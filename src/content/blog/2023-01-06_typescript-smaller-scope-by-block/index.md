---
layout: /src/layouts/PostLayout.astro
title: "TypeScript｜ブロック文で変数スコープを小さくする"
createdAt: "2023-01-06 17:00"
updatedAt: "2023-01-06 17:00"
category: "技術"
tags:
  - 技術
  - TypeScript
slug: typescript-smaller-scope-by-block
word:
  - nothing
---

# TypeScript ｜ブロック文で変数スコープを小さくする

ども、Nash です。

この記事では、TypeScript（JavaScript）でブロック文を使うと変数のスコープを小さくできるのでおすすめ、という話をしたいです。

## ブロック文で変数スコープを小さくする

### tl;dr

ブロック文を使って変数のスコープを小さくできるので、コードリーディング・レビュワーにちょっとだけ優しい世界になる。

### ブロック文とは

ブロック分とは、こういう記法です。

```ts
{
  Statement;
}
```

ここで重要なのは、変数のスコープがブロックスコープで管理される点です。

```ts
const x = 10;
{
  const y = 99;
  console.log({ x, y }); // => { x: 10, y: 99})
}
console.log({ x }); // => {x: 10}
console.log({ y }); // => error // これが大事！
```

（挙動の詳細は MDN のドキュメントを見てください）

[block - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

### 具体例）Block 文で変数スコープを小さくする

では、具体的にどうやってブロック文を使って変数スコープを小さくしていくか見ていきます。

例として「URL のパラメータの情報をもとに Upsert する関数」を作るとします。だいたいこんな感じとしましょう。

（upsert の中で呼び出してる関数は、関係ないのでどこかに用意されてるとして脳内補完してください。`validateUrl`、`verifyInsertion`などのことです。）

```ts
const upsert = (url: string): void => {
  const isValidUrl = validateUrl(url);
  if (isInvalidUrl) {
    throw new Error("Invalid URL: Something is wrong");
  }

  const shouldInsert = verifyInsertion(url);
  if (shouldInsert) {
    insertByUrl(url);
    return;
  }

  const shouldUpdate = verifyUpdation(url);
  if (shouldUpdate) {
    updateByUrl(url);
    return;
  }

  throw new Error("Invalid URL: Cannot run upsert.");
};
```

この処理をリファクタします。ブロック文を使い変数のスコープを小さくするとこうなります。

```diff
const upsert = (url: string): void => {
+	{
		const isValidUrl = validateUrl(url);
		if (isInvalidUrl) { throw new Error("Invalid URL: Something is wrong")}
+	}

+	{
		const shouldInsert = verifyInsertion(url);
		if(shouldInsert) {
			insertByUrl(url);
			return
		}
+	}  // ここも同じ。

+	{
		const shouldUpdate = verifyUpdation(url);
		if(shouldUpdate) {
			updateByUrl(url);
			return;
		}
+	} // ここも同じ。
	throw new Error("Invalid URL");
}
```

正直、このケースの場合は処理が小さいのでブロック文をいれるメリットはかなり少ないです。

ですが、関数が大きくなったときや、処理のはじめのほうでしか使われない変数などはブロック文で閉じておくと、「この変数はそれ以降の処理では使われないですよ」ということが明示できるのでコードリーディングがしやすいかと思います。

よくあるケースとして、上述した例がわかりやすいかと思いますがそれぞれ下記のように整理されます。

- 事前条件の確認をするとき
- 複数に分岐処理するとき

### デメリット

この方法のデメリットの１つとして、JS・TS の界隈であまり一般的な書き方ではない点があるかと思います。

そのため、チーム・メンバーによってはこの書き方を嫌うケースもあるかと思うのでその場合はチームとしてどうするかのコンセンサスをとっておくべきかと思います。

## おわりに

個人的に好みな記法です。

適度にブロック文で刻んでコードリーディングをしやすくしましょう。

### その他）IIFE について

ちなみに、ブロック文と同じような書き方として IIFE でも似たようなことができます。頻度としてはさらに少ないですが場合によってはこちらも同じように使うといいかと思います。

- [JavaScript の IIFE を使うユースケース - Qiita](https://qiita.com/snamiki1212/items/37152d0066c57eb60796)
