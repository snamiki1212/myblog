---
layout: /src/layouts/PostLayout.astro
title: "【ReactNative】RecyclerListView で ハイパフォーマンスなリスト"
createdAt: "2021-10-02 00:00"
updatedAt: "2022-07-05 00:00"
category: "技術"
tags:
  - 技術
  - ReactNative
slug: react-native-recycler-view-list
word:
  - nothing
---

# 【ReactNative】RecyclerListView で ハイパフォーマンスなリスト

こんにちは、Nash です。

この記事は「**ハイパフォーマンスにリストを表示出来る RecyclerListeView についての紹介記事**」になります。

では見ていきましょう。

## 更新（2022-07-05）

Shopify から FlashList が発表されたので、今後はこちらを使うことを強く推奨します。

- [GitHub - Shopify/flash-list: A better list for React Native](https://github.com/Shopify/flash-list)

FlashList を使うべき理由として、ざっくりとこれらです。

- 内部的には、この記事で取り上げてる `RecyclerListView`を使ってる[REF](https://github.com/Shopify/flash-list/commit/cc9669cc6d300834dc2b3a2a90df26a1aaef936a#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R78)
- RLV を拡張していて、パフォーマンス向上・callback の追加などがされている[REF](https://shopify.github.io/flash-list/docs/known-issues/)
- RLV の複雑な API に比べて、FlashList は ReactNative の FlatList を同様の API になっていて遥かにスマートになってる。

## はじめに

仕事で ReactNative を書いているのですが、ある日いつものようにリストビューを実装をすることになりました。

ただ、このリストのデータが１つあたりのサイズが大きい上にリストも 100 件以上使うような要件です。
そのためいつものように FlatList で実装してみたのですが、どうしてもパフォーマンスが出ないので最終的に RecyclerListView を使うことになりました。

そのときに、使い方などを理解したのでこの記事でまとめておきます。

## RecyclerListView とは

RecyclerListView は ReactNative 向けのハイパフォーマンスな ListView です。名前が長いので以降は RLV と呼びます。

- [GitHub - Flipkart/recyclerlistview](https://github.com/Flipkart/recyclerlistview)

RLV は、ネイティブへの依存がない JS だけで書かれています。

また、リストの各セルを再利用することでビューオブジェクトを作成するコストを減らします。
この作成する作業が高コストなので、RVL はハイパフォーマンスなわけです。

## 使い方

詳細の使い方は公式ドキュメントの役目なので、ここでは概要レベルで理解できるように使い方を説明していきます。

大きくは２つのステップで考えるとわかりやすいです。

1. セルに対して Type を決める
2. Type に対してサイズ・コンポーネントなどを決める

そして、これらの定義を関数にて行います。

### 1. Type を決める

まず、セルに対して「Type」を定義します。これは string/number のどちらかですが、実運用としては列挙型などで定義してあげるべきでしょう。

例えば、こんな感じで Type を列挙します。

```ts
const RVL = {
  HEADER: "HEADER",
  BODY: "BODY",
  CM: "CM",
  FOOTER: "FOOTER",
};
```

---

次にこの列挙した Type を各セルに割り振ります。

例えば、こんな感じの要件だとします。

- 一番上は Header、一番下は Footer
- 6 個に１つは広告のセルである CM を入れる
- それ以外のセルはすべて Body とする

コードだとこうなります。

```tsx
// LayoutProvider の第一引数に定義する（詳細は後述）
const defineType = (index) => {
  if (index == 0) return RVL.HEADER;
  if (isLast(index)) return RVL.FOOTER;
  if (index % 6 == 0) return RVL.CM; // 6個に１つ広告
  return RVL.BODY;
};
```

### 2. サイズ・コンポーネントなどを決める

次に、セルのコンポーネント・サイズ（Width/Hight）などを「どのタイプなのか？」に応じて設定します。

下記の例はサイズを設定します。

```tsx
const defineDimension = (type, dim) => {
  switch (type) {
    case RVL.HEADER: {
      dim.width = 20;
      dim.height = 50;
      return;
    }
    case RVL.BODY: {
      dim.width = 20;
      dim.height = 30;
      return;
    }
    case RVL.CM: {
      dim.width = 20;
      dim.height = 70;
      return;
    }
    case RVL.FOOTER: {
      dim.width = 20;
      dim.height = 10;
      return;
    }
  }
};
```

---

ここまでで、具体例・コードを踏まえての説明でした。これで、だいたいのイメージがついたかと思います。

1. セルに対して Type を決める
2. Type に対してサイズ・コンポーネントなどを決める

その上で、RVL で定義すべき必須の Props などを説明していきます。

## RVL の必須 props

RLV では下記の３つの props が必須です。

1. `layoutProvider`
2. `dataProvider`
3. `rowRenderer`

それぞれ見ていきましょう。

### 1. `layoutProvider`

各セルごとの Type とサイズ（height/width）を定義します。

```tsx
// defineType , defineDimension はすでに上述で書いてあります。
const lp = new LayoutProvider(defineType, defineDimension);
```

### 2. `dataProvider`

各セルごとのデータ周りの処理を定義します

DataProvider インスタンスを作成するときに、prev/new のコンポーネントの差分比較をする関数を定義します。
基本は id で比較してあげればよいかと思いますが、動的に id 以外が変わる場合は id 以外の要素も比較する必要があります。

最後に`cloneWithRows` メソッドでデータを渡してあげます。

```tsx
const isEqual = (prev, next) => prev.id !== next.id;
const dp = new DataProvider(isEqual).cloneWithRows(myList);
```

### 3. `rowRenderer`

各セルごとのコンポーネントを定義します。

定義の方法ですが、レンダープロップスで値を渡します。

```tsx
const renderer = type => {
  switch(type) {
    case RVL.HEADER: { return <Header ... /> }
    case RVL.BODY:   { return <Body ... /> }
    case RVL.CM:     { return <CM ... /> }
    case RVL.FOOTER: { return <Footer ... /> }
  }
}
```

### RVL コンポーネントを呼び出す

これで必須の Props を定義できました。これらの props を RVL コンポーネントに渡してあげます

```tsx
<RecyclerVewList
  layoutProvider={lp} // 1.
  dataProvider={dp} // 2.
  rowRenderer={renderer} // 3.
/>
```

これで完了です。

## おわりに

FlatList などと比べると RVL でコンポーネントを定義するとどうしても複雑になりがちです。

実際に自分も手元で簡単なビューリストを RVL で実装しましたが、どうがんばってもコードボリュームが簡単に膨らんでしまいました。

- [GitHub - snamiki1212/example-react-native-recycler-list-view](https://github.com/snamiki1212/example-react-native-recycler-list-view)

ただ、そのトレードオフとして手軽にハイパフォーマンスなリストビューが実現できるので、必要なときは重宝するかと思います。

## REF

- [Which one is best react native FlatList or Flipkart recyclerlistview? - Stack Overflow](https://stackoverflow.com/questions/59499096/which-one-is-best-react-native-flatlist-or-flipkart-recyclerlistview)
