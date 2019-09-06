---
title: '【Firestore】「orWhere」が使えない時の代案のまとめ'
cover: 'cover.jpg'
date: '2019-09-04 00:00'
category: 'Tech'
tags:
  - Firestore
  - NoSQL
slug: summary-alt-plan-insted-of-orwhere-about-firestore
---

## 【Firestore】「orWhere」が使えない時の代案のまとめ

この記事は、「Firestore のような NoSQL で orWhere が使えないときの、代案をまとめた記事」です。

### 背景

Firestore を使っている現場で orWhere が必要なケースが出てきました。
ですが、Firestore は orWhere がサポートされていません。(2019/9 時点)

- [firebase/firebase-js-sdk - FR: Firestore OR operator in WHERE query #321](https://github.com/firebase/firebase-js-sdk/issues/321)

NoSQL なので、ここらへんは仕方ないですが、どうにか代案を考えて実現はしないといけないので、そのときに考えた結果をまとめました。

## orWhere の 代案

出てきた案として下記２つです。

### 【案 ①】クエリを２つ投げて、アプリレイヤーで１つの List に結合して、最後にソート。

- メリット：データを持つ必要がない ⇐ データ整合性を気にしないで良い
- デメリット：結合やデータ取得のロジックが複雑になる

### 【案 ②】非正規化した検索用コレクションを作る

- メリット：データ取得のロジックが案 ① よりも簡素になる。
- デメリット：データを保持するので、データ整合性を担保しておかないといけない
  - ⇐Firebase を使っているケースなら、CloudFunctions のトリガーも使えると思うので、データ整合性の担保を取りやすい
- デメリット：検索用コレクションで絞ったリストを元にクエリを投げるが、Firestore には whereIN もない（2019/9 時点）。なので、N+1 回のクエリが必要なので fetch 回数が多い
  - ⇐Firestore なので、むしろそういうもの、だど割りきる。

結論ですが、案 ② の方針にしました。案 ① だと無限スクロールとの併用が特につらそうだったので。

### ユースケース

```ts
////// Entity

// firestore:users/{user}
type user = {
  id: string
  // ...
}

// firestore:messages/{message}
type message = {
  id: string
  senderID: string // = userID
  receiverID: string // = userID
  createdAt: Date
  updatedAt: Date
}
```

＜ユースケース＞

- 「自分が投げた Message」＋「自分が受け取った Message」のリストを表示
- updatedAt の DESC 順

## 【案 ①】2 つクエリを投げて、1 つに結合

だいたいこんな感じになります。

```ts
const me = '<Userモデルの自分のデータ>'
const lastQ1Visible = '<q1の前回取得分の最後>'
const lastQ2Visible = '<q2の前回取得分の最後>'

const snap1 = await db
  .collection('messages')
  .where('senderID', '==', me.id)
  .orderBy('updatedAt')
  .limit(10)
  .startAt(lastP1Visible)
  .get()

const snap2 = await db
  .collection('messages')
  .where('receiverID', '==', me.id)
  .orderBy('updatedAt')
  .limit(10)
  .startAt(lastP2Visible)
  .get()

const [q1, q2]: Message[] = [snap1, snap2].map(snap => ({ id: snap.id, ...snap.data() })) // 結果をentity に格納

const result = sortDesc([...q1, ...q2]) // `sortDesc` はupdatedAt で ソートをしてくれるようなヘルパーの想定
```

実際は結合する前にきちんと「ソート条件とデータ順番」についての確認してあげないといけないです。

例えば

- p1 の条件のデータ群の 20 件は最近の分
- p2 の条件のデータ群の 20 件は 5 年前の分
- Limit がそれぞれ 10 件ずつ

となると、1 回目の fetch 結果が、

**「最近の p1 の 10 件」＋「5 年前の p2 の 10 件」 を updatedAt でソートした結果**

になってしまいます。

なので、結合して良いかを確認して、結合不可の場合はキャッシュの変数に格納しておいて、次の fetch タイミングではそこから取って、みたいな処理にしないといけなさそうです。

更に、無限スクロールが入ってくると、ここらへんの処理が複雑になるかと思います。

この案は、「ページネーション がないような、一度ですべてのデータを取得できるようなケース」のときに良さそうです。

## 【案 ②】非正規化した検索用コレクションを別に作る

下記のような Model でのコレクションを作っておきます。

```ts
// firestore:viewableMessages/{viewableMessage}
type ViewableMessage = {
  messageID: string
  userID: string // <= senderID or receiverID
  createdAt: Date
  updatedAt: Date
}
```

**viewableMessage は message を 非正規化したものです。**

つまり、1 つの message に対して、2 つの showableMessage の Document が存在する関係です。

```dot
digraph G{
    compound=true

    node [shape=folder]
    comment [label="ここの範囲で検索する", shape=none, fontsize=8]
    text [shape=point, fontsize=8]

    subgraph cluster_M {
        label="Message"
        M1 [label="・senderID\n・receiverID"]
    }
    subgraph cluster_VM {
        label="ViewableMessage";
        labelloc="b"
        labeljust="l"
        labelfloat="false"
        bgcolor="gray";
        margin=30

        VM1 [label="userID=senderID"]
        VM2 [label="userID=receiverID"]
    }
    M1->text [headlabel="非正規化"]
    text->VM1
    text->VM2

    comment -> VM1 [lhead=cluster_VM]
}
```

データ生成については後述しますが、ひとまずデータも用意されている前提で話を進めます。

実装は、下記のようになるかと思います。

```ts
const me = '<Userモデルの自分のデータ>'
const lastVisible = '<前回取得分の最後>'

// ①viewableMessageから取得。これで、ほしいMessageIDの一覧がわかる。
const snaps1 = db
  .collection('viewableMessages')
  .where('userID', '==', me.id)
  .orderBy('updatedAt')
  .limit(10)
  .startAt(lastVisible)
  .get()
const viewableMessages: ViewableMessage[] = snaps1.map(snap => ({ id: snap.id, ...snap.data() }))

// ②viewableMessage が持つMessageIDの、Messagesをすべて取得。
const snaps2 = viewableMessages.map(viewableMessage =>
  db
    .collection('messages')
    .doc(viewableMessage.messageID)
    .get()
)
const result = snaps2.map(snap => ({ id: snap.id, ...snap.data() }))
```

案１に比べて、案２はロジックも少なく、Pagination・無限スクロールなども入れやすい形ですね。

ただ、① ＋ ② で N+1 の回数分だけクエリが発行されてしまいます。ただ、Firestore なので、「そういうもの」だとと思っているので、ここは個人的には許容範囲です。

### 案 2 のデータ保持

さて、案 ② の ViewableMessage ですが、message とデータ整合性を取らないといけません。

特に、今回のユースケースが `updatedAt` の順番なので、message の値が更新されたら、viewableMessage の `updatedAt` も更新してあげないといけません。

こういうときには、CloudFunctions のトリガーを使うのがベターだと思っています。

```dot
digraph G{
    MessageModel
    Trigger [shape=box]
    ViewableMessageModel

  MessageModel -> Trigger [ label ="「データ作成 or 更新」を\n検知して発火"]
  Trigger -> ViewableMessageModel [label="「作成」 or \n 「updatedAt を更新」"]
}
```

こんな感じで、データ整合性の担保をします。

今回のケースでは、一方方向のデータ依存性なので、トリガーが連鎖してループする可能性も少ないかと思います。

### 所感

案 2 のように、クエリの関係上、既存データを正規化して保持していても、非正規化しなおしたデータを別途保持しないといけないというケースは、今まで RDS による設計をしていた人間からすると狂気の沙汰です。

RDS の設計を一通りしていると、非正規化 → 正規化、というベクトルの能力がつきますが、Firestore のデータ設計をしていると、正規化 → 非正規化というベクトルの発送・能力がつくのは気付きが多いです。
