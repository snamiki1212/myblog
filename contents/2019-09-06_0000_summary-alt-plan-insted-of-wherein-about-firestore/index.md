---
title: '【Firestore】「WhereIN」が使えない時の代案のまとめ'
cover: 'cover.png'
date: '2019-09-06 00:00'
category: 'Tech'
tags:
  - Firestore
  - NoSQL
slug: summary-alt-plan-insted-of-wherein-about-firestore
---

## 【Firestore】「WhereIN」が使えない時の代案のまとめ

こんにちは。平気でN+1を許容できるようになってきたNashです。

この記事は、「FirestoreのようなNoSQLで WhereIN が使えないときの、代案をまとめた記事」です。

### 背景

数日前に下記の記事を書きました。

≫ [【Firestore】「orWhere」が使えない時の代案のまとめ](./summary-alt-plan-insted-of-orwhere-about-firestore)

その中で、しれっと、「Firestoreでは、whereINがないので〜」というふうに書いたのですが、ここらへんをまとめていなかったことに気付いたので、記事にしようと思った次第です。

## Firestoreで whereIN が使えるか？

使えないです。(2019/9時点)
- [github - firebase/firebase-js-sdk - FR: Firestore getAll() to retrieve multiple documents at once. #1176](https://github.com/firebase/firebase-js-sdk/issues/1176)

ただし、Node.js 側に提供されているSDKには getAll が提供されています。

- [@google-cloud/firestore 0.15.4 » Class: Transaction  |  Node.js  |  Google Cloud](https://github.com/firebase/firebase-js-sdk/issues/1176)

ただ、これ、クエリレイヤーではなくて、SDKのレイヤーでforEachを回りしてるような気がしてます(TODO: きちんとコード確認していないので、あとで見る)

## whereIN の 代案

というわけで、クエリレイヤー・SDKレイヤーでwhereINを実現できないので、アプリケーションレイヤーで解決しないといけないです。

案として下記２つ。

- 【案 ①】すべてを一括で取得して、filterでデータをクレンジング
- 【案 ②】N+1クエリを投げて、結果を結合

実際に使うときは基本的には、案②になるかと思いますが、場合によっては案①のほうが良いケースもあります。

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
  createdAt: Date;
  updatedAt: Date;
};
```

- Twitterみたいに、ツイートしたものに対して、任意の人が「いいね」出来る
- あるTweetの詳細画面で、「いいね」したUserの一覧を取りたい。

## 【案 ①】すべてを一括で取得して、filterでデータをクレンジング

だいたいこんな感じになります。

```ts
// react-router から tweetIDを取る想定
const tweetID = match.params.tweetID

const tweet = await db.collection('tweets').doc(tweetID).get()

// (A) まず、一括ですべて取得
const allFriends = await db.collection('users').get()

// (B) その後に、データクレンジング
const myFriends = allFriends.filter(maybeMyFriend =>
  tweet.likedFriendIDs.includes(maybeMyFriend.id)
)

return myFriends
```

- メリット：fetch回数が少ない。
- デメリット：filterの計算コストの処理時間がかかる
- デメリット：無駄なデータまでfetchするので、帯域を余計に食う。
- 特徴：大雑把にfetchするので、これらがセキュアな情報だとしたらセキュリティポリシー的にNG
- 特徴：データ量が多いと変数格納のメモリ領域をかなり消費する。

結論、データ量が少なく、セキュアな情報でないときは、こちらがベターな選択、だと思っています。

そうでないなら、案②を採用する形になります。

## 【案 ②】N+1クエリを投げて、結果を結合

だいたいこんな感じになります。

```ts
// react-router から tweetIDを取る想定
const tweetID = match.params.tweetID

// (A) N+1の「1」のクエリ
const tweet = await db.collection('tweets').doc(tweetID).get()

// (B) N+1の「N」のクエリ
const myFriends = tweet.friendIDs.map(friendID =>
  await db
    .collection('users')
    .doc(friendID)
    .get()
)

return myFriends
```

- メリット：必要なデータのみをfetchしているので、帯域を食わず、また、データのセキュリティポリシー的にNGにならない。
- デメリット：fetch回数がN+1回必要。

### 所感

現状だと、たいていのケースでは案②のN+1のfetchです。

Firestoreを使っていると、非正規化だけでなくて、N+1まで許容しないといけないので、RDS脳が完全に崩壊します。（しました）
