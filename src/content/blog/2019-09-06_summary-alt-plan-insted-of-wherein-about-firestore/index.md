---
layout: /src/layouts/PostLayout.astro
title: "【Firestore】「WhereIN」が使えない時の代案のまとめ"
createdAt: "2019-09-06 00:00" # created_at
updatedAt: "2020-05-10 20:00" # updated_at
category: "技術"
tags:
  - Firestore
  - NoSQL
slug: summary-alt-plan-insted-of-wherein-about-firestore
---

## 【Firestore】「WhereIN」が使えない時の代案のまとめ

こんにちは。平気で N+1 を許容できるようになってきた Nash です。

この記事は、「Firestore のような NoSQL で WhereIN が使えないときの、代案をまとめた記事」です。

### 追記: 公式で whereIn が対応されました(2019/11/09)

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Firebase が where in をサポート。<br>今まで無かったから N+1 でクエリ書いてたので助かる <a href="https://t.co/8AGeqVnoGN">https://t.co/8AGeqVnoGN</a></p>&mdash; Nash⚡️Next.jsとRN書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1192589159501721600?ref_src=twsrc%5Etfw">November 7, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

公式でサポートされるようになりました。

```typescript
// where in
type project = {
  status: string;
};
db.collection("projects").where("status", "in", ["public", "private"]);
```

これで、簡単に where-in を実現できるようになりましたね。

ただ、最大 10 件の値しかクエリに渡せられないので、固定で 10 件以下のケース以外では使えないので本当に wherein でいけるかどうかは設計時に注意してください。

ちなみに、`array-contains-any`というのもあります。こちらは、`string[]`を対象に whereIn を行えます。

```typescript
// array-contains-any
type article = {
  tag: string[]; // <== ここが違う
};
db.collection("articles").where("tag", "array-contains-any", [
  "Firebase",
  "Frontend",
  "TypeScript",
]);
```

基本的には firestore のバージョンを上げて、これらの API を使いましょう。バージョンを挙げられないなら、この記事の以降のやり方を参考にしてください。

追記終わり(2019/11/09)

### 背景

数日前に下記の記事を書きました。

[【Firestore】「orWhere」が使えない時の代案のまとめ](./summary-alt-plan-insted-of-orwhere-about-firestore)

その中で、しれっと、「Firestore では、whereIN がないので〜」というふうに書いたのですが、ここらへんをまとめていなかったことに気付いたので、記事にしようと思った次第です。

## Firestore で whereIN が使えるか？

使えないです。(2019/9 時点)

- [github - firebase/firebase-js-sdk - FR: Firestore getAll() to retrieve multiple documents at once. #1176](https://github.com/firebase/firebase-js-sdk/issues/1176)

ただし、Node.js 側に提供されている SDK には getAll が提供されています。

- [@google-cloud/firestore 0.15.4 » Class: Transaction  |  Node.js  |  Google Cloud](https://github.com/firebase/firebase-js-sdk/issues/1176)

## whereIN の 代案

というわけで、クエリレイヤー・SDK レイヤーで whereIN を実現できないので、アプリケーションレイヤーで解決しないといけないです。

案として下記２つ。

- 【案 ①】すべてを一括で取得して、filter でデータをクレンジング
- 【案 ②】N+1 クエリを投げて、結果を結合

実際に使うときは基本的には、案 ② になるかと思いますが、場合によっては案 ① のほうが良いケースもあります。

見ていきましょう。

### ユースケース

下記のような、設計・ユースケースで考えます。

```ts
////// Entity

// firestore:users/{user}
type user = {
  id: string;
  // ...
};

// firestore:tweets/{tweet}
type tweet = {
  id: string;
  likedUserIDs: string[]; // いいね　したUserIDのリスト
  // ...
};
```

- Twitter みたいに、ツイートしたものに対して、任意の人が「いいね」出来る
- ある Tweet の詳細画面で、「いいね」した User の一覧を取りたい。

## 【案 ①】すべてを一括で取得して、filter でデータをクレンジング

だいたいこんな感じになります。

```ts
// react-router から tweetIDを取る想定
const tweetID = match.params.tweetID;

// tweet を 取得
const snap = await db.collection("tweets").doc(tweetID).get();
const tweet = { id: snap.id, ...snap.data() };

// (A) まず、一括ですべて取得
const allFriends = await db.collection("users").get();

// (B) その後に、データクレンジング
const myFriends = allFriends.filter((maybeMyFriend) =>
  tweet.likedFriendIDs.includes(maybeMyFriend.id)
);

return myFriends;
```

- メリット：fetch 回数が少ない。
- デメリット：filter の計算コストの処理時間がかかる
- デメリット：無駄なデータまで fetch するので、帯域を余計に食う。
- 特徴：大雑把に fetch するので、これらがセキュアな情報だとしたらセキュリティポリシー的に NG
- 特徴：データ量が多いと変数格納のメモリ領域をかなり消費する。

結論、データ量が少なく、セキュアな情報でないときは、こちらがベターな選択、だと思っています。

そうでないなら、案 ② を採用する形になります。

## 【案 ②】N+1 クエリを投げて、結果を結合

だいたいこんな感じになります。

```ts
// react-router から tweetIDを取る想定
const tweetID = match.params.tweetID;

// (A) N+1の「1」のクエリ
const snap1 = await db.collection("tweets").doc(tweetID).get();
const tweet = { id: snap.id, ...snap.data() };

// (B) N+1の「N」のクエリ
const snap2List = tweet.friendIDs.map((friendID) =>
  db.collection("users").doc(friendID).get()
);
const myFriends = snap2List.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

return myFriends;
```

- メリット：必要なデータのみを fetch しているので、帯域を食わず、また、データのセキュリティポリシー的に NG にならない。
- デメリット：fetch 回数が N+1 回必要。

### 所感

現状だと、たいていのケースでは案 ② の N+1 で実現してます。

Firestore を使っていると、非正規化だけでなくて、N+1 まで許容しないといけないので、RDS 脳が完全に崩壊します。（しました）
