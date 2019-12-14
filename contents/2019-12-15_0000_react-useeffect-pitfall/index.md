---
title: 'ReactのContextAPIでの正規化をReduxと比較'
cover: 'cover.jpg'
date: '2019-12-15 00:00'
category: 'Tech'
tags:
  - React
slug: react-useeffect-pitfall
---

# React.useEffect でハマったポイントのまとめ

こんにちは、関数コンポーネントと Hooks 世代な Nash です。

この記事では、React.useEffect を使っているときに自分がハマった落とし穴についてまとめます。（これ以上、この記事の内容が増えないことを祈るばかり）

## その前に「React.useEffect 完全に理解した」になる

根本原因なのですがほぼ全て「React.useEffect の挙動を正確に理解していないこと」が原因でした。

公式ドキュメントを読むのは、そもそもの前提ですが、その上で、下記の記事を頑張って読み込むのが、一番費用対効果が高かったです。

≫ [Overreacted - useEffect 完全ガイド](https://overreacted.io/ja/a-complete-guide-to-useeffect/)

この記事では、ClassComponent ベースのライフサイクルから、Hooks ベースのライフサイクルではどのように考え方が変わり、処理されているかが、かなり詳しく書かれてます。

あまりに良い記事すぎて、英語原文ですが、日本語訳だけでなくて中国語やポルトガル語まであります。

といわけで、この記事を読めば「React Hooks完全に理解した」となり、いろいろハマるわけなので、自分のハマった事例を見ていきましょう。

## 期待通り実行されない、または暴走する

初期の頃にあるあるです。無限ループは日常茶飯事です。

この問題の原因は「React.useEffect の第 2 引数に値が足りない／多い」です。

もしこの指摘でも「自分のコードがなぜ期待通り動かないのかわからない」となると、React.useEffect の理解が前提理解が足りないので、上述のドキュメントを読んだり、自分で CRA とかで手を動かして、理解を腹に落とす、という作業から始めるべきです。

```tsx
// 無限ループする例
const [counter, setCounter] = React.useStte<number>(0)
React.useEffect(() => {
  setCounter(prev => prev + 1)
}, [counter])

// 1. React.useEffectが実行される
// 2. setCounterにてcounterの値が変わる
// 3. counterの値が変わるので、React.useEffectが再実行される
// 4. 1にもどる
```

また、`react-hooks/exhaustive-deps`を使う際も気をつけてください。

基本的には、この Linter を導入することは自分も強く推奨ですが、何も考えずにコレを新しく入れると、今まで動いていた useEffect の第 2 引数に値が入って無限ループを起こす、までも、初心者あるあるです。

## 早期リターンは出来るが、Unmount 時の Callback に気をつける

React.useEffect 内でも早期リターンを行うことは可能です。ただ、返り値には、そのコンポーネントが unmount されたときに実行される callback を指定します。これは、**早期リターンする場所でも例外ではありません**。

そのため、「早期リターンする場合の返り値にもきちんと Callback を仕込まないといけない」という意識が必要になります

```tsx
React.useEffect(() => {
  if(list.length <= 0) {
    // 早期リターンは可能。unmount時のcallbackが必要なら、ここでも定義しておかないといけない。
    return () => conosle.log('unmount!')
  }
  list.forEach(e => console.log('e'))
  return () => console.log('unmount!!')
}, [...])
```

もちろん、関数を共通化しておけば、DRY に書くことも出来るので、分岐がネストするよりは全然良い選択だと思うので、この観点は忘れないようにしつつ、基本的に早期リターンは使うべきかと思います。

## 非同期関数は直接呼べない

あるあるなのが、React.useEffect 内部で async/await を実行しようとしても、エラーが出て動かせない、というやつです。パット見だと、これいけそうじゃん、と思います。

```tsx
// これ動かない。
React.useEffect(async () => {
  // ...
  await ...
}, [...])
```

これが、動かない理由ですが、async で定義された非同期関数は Promise オブジェクトを返すから、という点です。つまり、

```tsx
const asyncFunc = async () => { ... }
asyncFunc() // => Promise{...}
// 関数の結果ではなくて、Promiseが返ってくる
```

そのため、非同期で処理をしたいなら、非同期関数を定義して、それを実行するようにしてください。

```tsx
React.useEffect(() => {
  // 定義
  const fn = aysnc () => {
    // ...
    await ...
  }

  fn() // 実行

}, [...])
```

これを毎回やるのが面倒なので、オレオレカスタムフックスを作って簡略化することも可能なのですが、unmount 時の callback がどうやっても指定できなくなってしまうので、面倒ですが、上記のやりかた一択だと思っています。

```tsx
// useEffectAsyncというカスタムフックスを作って、内部でよしなにやってくれるとする。
useEffectAsync(async () => {
  await ...
  return () => console.log('unmount!!') // これunmount時に実行されない。
}, [...])
```

## setXX 系で値を更新しても、即座には変更されない。

正確には React.useEffect ではなくて、React.useState の話です。ただ、React.useEffect のロジックで、これをやらかす人が多いので、合わせて書きます。

setXXX 系で値を更新させて、その値を後続の処理でも使いたくて下記のようなコードを書きます。

```tsx
const [loaded, setLoaded] = React.useState(false);
React.useEffect(() => {
  setLoaded(true);
  console.log(`counter is ${loaded}`); // setLoadedで値が変えられる前時点のloadedが表示
}, [loaded]);
```

ですが、`console.log()`で表示されるのは、あくまで、その関数が実行された時点での`loaded`です。

後続でも値を使いたいなら、変数に入れて使いまわしたりしてください。

```tsx
const [loaded, setLoaded] = React.useState(false);

React.useEffect(() => {
  const newValue = true;
  setLoaded(newValue);
  console.log(`counter is ${newValue}`); // これでOK
}, []);
```

（例のコードがあまりイケてないけど、良い例が思いつかなかった。。。

## 複数の useEffect 同士が依存地獄になる

１つのコンポーネントの中に複数の React.useEffect を定義できます。

そのため、適切に分割しないと依存地獄が生まれて、スパゲッティ・モンスターが爆誕します。（召喚テロ、すいませんでした）

```tsx
// こんな感じで複数のuseEffectで依存しあっていると、コードを読むのがしんどい。
const [x, setX] = React.useState(0)
const [y, setY] = React.useState(0)
const [z, setZ] = React.useState(0)

React.useEffect(() => { console.log(`x + y = ${x + y}`)}, [x, y])
React.useEffect(() => { console.log(`y + z = ${y + z}`)}, [y, z])
React.useEffect(() => setZ(prev => (x + y + prev ) % 2 === 0 ? prev + 1 : prev)), [x, y])
const onClick = () => setX(prev => prev + 1)
return(<button onClick={onClick}>incre X</button>)
```

ただ、ここでいう「適切な分割」もビジネスロジックによるところが大きいかと思っているので、機械的に〜すれば良い的なのがあまりないかもです。

あえて言えば、

- useEffect 内では、極力 if での分岐をさせない
- １つのコンポーネントで複数ロジックがあり、かつその中で独立したロジックがあるなら、極力カスタムフックスにして切り出す

かと思っています。

### 所感

前提として、公式ドキュメントと上記のドキュメントは読んでおくと、どういう仕組で裏で動いている？がわかるので、表面的な問題の挙動に対しても「裏で〜〜となってるから、だからだめなのか」がわかるようになるかと思います。

とはいえ、資料を読んでもハマるものはハマるので、銀の弾丸はないので経験を通して覚えることが多いとも思っています。

というわけで、自分のハマった内容でした。この記事がどなたかの役に立ってくれれば幸いです。
