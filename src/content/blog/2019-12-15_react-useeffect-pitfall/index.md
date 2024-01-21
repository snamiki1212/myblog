---
layout: /src/layouts/PostLayout.astro
title: "React.useEffect でハマったポイントのまとめ"
createdAt: "2019-12-15 00:00"
updatedAt: "2024-01-21 18:30"
category: "技術"
tags:
  - React
  - ReactHooks
slug: react-useeffect-pitfall
---

# React.useEffect でハマったポイントのまとめ

ども、React を触り始めたのが「関数コンポーネント＋ Hooks 」の世代の Nash です。

この記事では自分が勉強はじめの時に、**React.useEffect で自分がハマったポイントのまとめ**の記事です。

随時更新しますが、これ以上この記事の内容が増えないことを祈ります。。。

## その前にまずは「React.useEffect 完全に理解した」状態になっておく

自分がいくつか `React.useEffect` でハマったポイントがあるのですが、それらの全ての根本的な原因は「**React.useEffect の挙動を正確に理解していないこと**」が原因でした。

そのため根本原因の解決は、公式ドキュメントを読むのは当たり前ですが、その上で `React.useEffect` の挙動を正確に理解できることです。

いろいろな記事を見てきましたが、`React.useEffect` の挙動を正確かつわかりやすく理解できる記事として下記のものを紹介しておきます（自分の記事ではないです）

- [Overreacted - useEffect 完全ガイド](https://github.com/gaearon/overreacted.io/blob/archive/src/pages/a-complete-guide-to-useeffect/index.ja.md)

> [!NOTE]
> UPDATED(2024-01-21)
> このブログは原文が英語で多言語対応されており日本語でも書かれていたのですが、ブログのリプレイスにあたり多言語対応をやめてしまったので過去のMarkdownを直接を見にいく形になります。
> https://github.com/gaearon/overreacted.io/issues/796

この記事では、下記のような内容が記載されています。

- ClassComponent ベースのライフサイクルから Hooks ベースのライフサイクルへ変わるにあたり、どのように考え方が変わり、どのように処理されているか。

- 原文が英語ですが、あまりに良記事すぎて、日本語訳だけでなくてコントリビューションされて7ヶ国語くらいの多言語で翻訳されてる。

といわけで、この記事を読めば「React Hooks 完全に理解した！」となるのですが、それでも手を動かすとやっぱりハマるポイントがあるかもしれないので自分が落ちた穴を見ていきましょう。

## 期待通り実行されない、または暴走する

**React.useEffect に慣れていない初期の頃のあるある**です。特に `useEffect` が無限ループまたは無限発火するバグは日常茶飯事です。

このバグが起きてる原因は「**React.useEffect の第二引数に値が足りない／多い**」です。

もし、この指摘だけでも「自分のコードがなぜ期待通り動かないのかわからない、、、」となると、

- １）`React.useEffect` の理解が前提理解が足りない可能性がある
- ２）自分の無限発火している`React.useEffect`の第２引数をきちんと追いきれてない

のどちらかかと思います。

では、具体的にどういうケースで無限ループするか見てみます。

```tsx
/** 無限ループする例 **/

// #1. React.useEffectが実行される
// #2. setCounterが実行されて、counterの値が変わる
// #3. counterの値が変わるので、React.useEffectが再実行される
// #4. #1にもどる

// カウンター
const [counter, setCounter] = React.useStte<number>(0);

// これが無限ループする
React.useEffect(() => {
  setCounter((prev) => prev + 1);
}, [counter]);
```

実際のケースではもう少しロジックが複雑になっているかと思いますが、仕組み自体はこれと同じような状態なはずです。

## `react-hooks/exhaustive-deps` を入れたらバグる

無限ループの話の延長なのですが、`react-hooks/exhaustive-deps`を入れるときも気をつけてください。

この Linter ルールを入れると、React.useEffect の第２引数によしなに値を入れてくれます。

そのため、プロジェクトにこのルールを入れると、今まで動いていた useEffect の第 2 引数に値が入って無限ループを起こす可能性があるので注意していれましょう。

とはいえ、この Linter を導入することは自分としても強く推奨です。

## 早期リターンの時の Callback に気をつける

前提として、まず React.useEffect の第一引数の関数の返り値について説明します。

React.useEffect の第一引数では関数を記述します。この関数の返り値として「calback関数」を返すと、このcallback関数が Unmount 時に実行されます。

```tsx
React.useEffect(() => {
  const unsubscribe = subscribe();
  return () => unsubscribe(); // << unmount時にこの関数が実行される
}, [listen]);
```

さて、そうなると、React.useEffect の第一引数にて早期リターンをしたい場合はどうなるか。

結論から言うと、React.useEffect の第一引数に書くロジックの内部でも早期リターンを行うことは可能です。ただ、返り値にはそのコンポーネントが Unmount されたときに実行される callback を指定する、という意識が常に必要になります。

```tsx
// Unmount時に実行する関数をDRYに表現したいので、外で定義しておく
const doUnmount = () => conosle.log("unmount!");

React.useEffect(() => {
  if (something) {
    // 早期リターン可能。
    return doUnmount;
  }

  // somethins logics...

  // Unmount 時のCallback
  return doUnmount;
}, [doUnmount]);
```

Unmount 時に何をしたいかにもよりますが、ロジックによっては関数を共通化しておくのがベターでしょう。

というわけで、React.useEffect でも早期リターンは使えるので、使えるべきポイントではできる限り使うべきかと思います。

## 非同期関数は直接呼べない

React.useEffect の第一引数にて async な関数を直接定義できません。パット見だと、これいけそうじゃん、と思いますよね。

```tsx
// でも、これ動かないんですよね。。。
React.useEffect(async () => {
  // ...
  await func1();
  // ...
}, [fun1]);
```

そのため、非同期処理をしたいなら

- #1) useEffect に渡す関数は、非同期ではなく同期の関数
- #2）内部で、非同期関数を定義する
- #3）その非同期関数を実行する

という流れにしましょう。

```tsx
// #1 async キーワードはつけないこと
React.useEffect(() => {
  // #2）ここで、非同期関数を定義する
  const fn = aysnc () => {
    // ...
    await ...
    // ...
  }

  // #3）ここで、非同期関数を実行する
  fn()

}, [...])
```

## setXX 系で値を更新しても、即座には変更されない。

`React.useEffect` ではなくて、`React.useState` の話ですが合わせて書いちゃいますね。`React.useEffect` のロジックでこれをやらかす人が多いので。

setXXX 系で値を更新させて、その値を後続の処理でも使いたくて下記のようなコードを書きます。

```tsx
const [loaded, setLoaded] = React.useState(false);
React.useEffect(() => {
  // ここで loaded の値を true にする
  setLoaded(true);

  // loaded の値を表示する
  // ただし、前処理でtrueにしているが直後だとsetLoadedで値が変えられる前時点のloadedが表示される
  console.log(`counter is ${loaded}`);
}, [loaded]);
```

これの `console.log()`で表示される値なのですが`false`です。
なぜなら、その関数が実行された時点での`loaded`が使われるからです。

そのため、値を setXX で更新した上で後続でも値を使いたいなら、変数に入れて使いまわしたりしてください。

```tsx
const [loaded, setLoaded] = React.useState(false);

React.useEffect(() => {
  const newValue = true; // << ここで変数に入れてあげる

  setLoaded(newValue);
  console.log(`counter is ${newValue}`); // これでOK
}, []);
```

## 複数の useEffect 同士が依存地獄になる

`React.useEffect`は、１つのコンポーネントに複数定義できます。

そのため、逆に言えば**適切に分割しないと依存地獄が生まれてスパゲッティ・モンスターが爆誕します**。

```tsx
const [x, setX] = React.useState(0)
const [y, setY] = React.useState(0)
const [z, setZ] = React.useState(0)

// こんな感じで複数の変数・useEffectで依存しあっていると、コードを読むのがしんどい。
React.useEffect(() => { console.log(`x + y = ${x + y}`)}, [x, y])
React.useEffect(() => { console.log(`y + z = ${y + z}`)}, [y, z])
React.useEffect(() => setZ(prev => (x + y + prev) % 2 === 0 ? prev + 1 : prev)), [x, y])

return(
  <button onClick={() => setX(prev => prev + 1)>
    Increment!!!
  </button>
)
```

上記みたいな感じでロジックがごちゃごちゃし始めたら、すぐに手を打ってあげてください。
具体的には、カスタムフックスに切り出して上げてください。

```tsx
const useCalc = () => {
  // ...
  // ... some logics
  // ...
  return { x, y, z, increment };
};

const MyComponent = () => {
  const { x, y, z, increment } = useCalc();
  return (
    <div>
      <div>{`${x}:x, ${y}:y, ${z}:z.`}</div>
      <button onClick={increment}>increment</button>
    </div>
  );
};
```

カスタムフックスへの切り出しですが、

- １）`/lib/useCalc.tsx` みたいにファイル単位で配置
- ２）同一コンポーネント上に書く（上の例のように）

と２通りあるかと思いますが、そのプロジェクトの方針に従うのが良いかと思います。
もしプロジェクトでの方針がないならひとまず２）で良いのでカスタムフックスに切り出すクセをつけておきましょう。あとあと、整理するときやコードリーディングをするときに劇的に楽になります。

### 所感

前提として、公式ドキュメントと上記のドキュメントは読んでおくと「`React.useEffect`ってどういう仕組で裏で動いているの？」がわかるので、表面的な問題の挙動に対しても「裏で〜〜となってるから、ここでおかしくなるのか」がわかるようになるかと思います。

とはいえ、資料を読んでもハマるものはハマるので、経験を通して覚えることも多いかと思います。

というわけで、自分のハマった内容でした。この記事がどなたかの役に立ってくれれば幸いです。
