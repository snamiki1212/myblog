---
title: '【TypeScript】reaonly不要論'
createdAt: '2022-11-13 00:00'
updatedAt: '2022-12-11 11:30'
category: '技術'
tags:
  - TypeScript
slug: no-need-readonly-in-ts
word:
  - nothing
---

# 【TypeScript】reaonly不要論

ども、Nashです。

この記事は「TypeScriptのreadonlyについて、状況によっては不要なのではないか？という考えについてまとめた記事」になります。

では、見てみます。

## TL;DR

- readonlyの使い勝手が少し微妙なので割り切って使わない選択もいいのでは、という考え方。
- 具体的には、チーム・プロダクトがまだそこまで成長してなく、堅牢性を上げるよりもやることがある状態のとき。

## 背景

いままでreadonly をあまり使ってこなかったが、「これってどんだけ有用なんだろう」と思って調べてみた。

利用箇所としては、関数の引数で配列orオブジェクトを受け取るときに破壊的な変更をさせたくないのでreadonlyを設定する。例えばsortは破壊的な変更をする関数のため関数内部で使っていて気付いたら配列を破壊してることもあるので。

```git
const accending = (
-   list: number[]
+   list : readonly number[]
): number => {
-    return list.sort((a, b) => a-b);
+    return [...list].sort((a, b) => a-b);
}
```
[TS Playground](https://www.typescriptlang.org/play?#code/N4KABBYMYPYHYGcAuYCGUoFM4BMCWcA5mALxgAUANnsgFxhwCuAtgEaYBOA2gLoCUYekzadepAHxhQkGR0xJGHOGGrIAdAhgck5cqgA0YVgJKTUAWmPhIAXxDWIsRClUoyXAIyGPABh+GAJkMATmCeAG4HaHhkMDkERko3NAxsfCIqGiQ+SJknTUpMNUoYQnIAIi4cVCJOHnLDcvjElBoGuMwEpIEAeh7TME9AkODvPx4o-JhC4tKKqprCOvby1zAaMHbXAQg+gaGwILBQsZ8JuxBpSHyUdCxcAmIyTLoO1Bx4SgBPBhZ2bn4gl+IgBEikUUgcgUSkGajhrh4Gi0Oj0hmMYIsVhkFzyMRcWVIgy8YF8-kOIwikzxHS6yTuaUeL2yuWuMWmRRKZUqCFQADNMPVGs0kusEJtDMLsmA9pIDkcTiTxlTEOzZlyuDz+YLNmsNlssjtpf1ZcTScNjud7EA)

## readonly の問題点

引数にreadonlyを設定すると関数内部で破壊的変更が起きないのでより安全なコードになる。

これだけ見ると導入するほうがいいのでは？とも思うが個人的に考えるTSのreadonlyの問題点を整理してみた。

### (1) mutable first な設計

TSはデフォルトでmutableになっている点。逆であってほしい。いまからの変更は現実的ではないのはわかるがせめてcompiler に configを導入してほしい

- [Readonly everything by default · Issue #42357 · microsoft/TypeScript · GitHub](https://github.com/microsoft/TypeScript/issues/42357)
- [Immutable-By-Default Flags · Issue #32758 · microsoft/TypeScript · GitHub](https://github.com/microsoft/TypeScript/issues/32758)
- [GitHub - tc39/proposal-record-tuple: ECMAScript proposal for the Record and Tuple value types. | Stage 2: it will change!](https://github.com/tc39/proposal-record-tuple)


### (2) readonly 宣言が冗長

Rustだと可変な場合はmutでTSだと普遍な場合はreadonlyとなる。ただでさえほぼすべての引数に必要となる上に文字数的にもreadonlyって書くのはちょっと長い。

また必要に応じて書き方として`Readonly<T>`である必要もあるのだが、どっちにしても長い。

この対策としてはエイリアスを設定してもいいのかなとも思う。

```ts
type R<T> = Readonly<T>;
```

### (3) readonly がネストに対応してない

readonlyの設定がネストしたオブジェクトに対応していない。そのため、自前で`DeepReadonly<T>`を作っておかないといけない。

しかも、`DeepReadonly<T>` であるべきところで`Readonly<T>`を使ってしまいそう。これの回避としてデータ構造の内部詳細を意識して型をつけないといけない。漏れをなくすならすべて常に`DeepReadonly<T>`にすべきで、必要な場所のみを`readonly`を抜くのがいいがコード冗長さに拍車がかかる。

```ts
const fn = (obj: Readonly<{ child: { a: number }}>) => {
    obj.child.a = 99;
    return true;
}

const obj1 = { child: { a: 1 } }
fn(obj1)
console.log(obj1.child.a) // => 99
```

- [TS Playground](https://www.typescriptlang.org/play?ts=4.9.0-dev.20221007&ssl=8&ssc=35&pln=1&pc=1#code/MYewdgzgLgBAZmGBeGAKEAjAVgLhgJQFMBDAE3ABsBPAHgG8ZgALASwtLweLzAFcBbDIQBOMAL5iAfAEpkkmHQBQMFTExYAdMzakNxZDACchgNzLVwwlF7DEUYb0JmxixaEix1ARgMNt7ThhuGB8xcUUEdGwvaTdwCBAKQg0KEABzKKwvLVZ2PVkAegK5I0NXIA)



### (4) readonly が完璧に動作しないことがある

`Object.assign` 使うとreadonlyなのに破壊できる。readonlyとは何だったのか。

```ts
const log = console.log;

const fn = (obj1: Readonly<{a: number}>) => {
    return Object.assign(obj1, {b: 1});    
}

const input: Readonly<{a: number}> = {a: 1} as const;

log("input is", input);      // => { a: 1 }
log("result is",  fn(input)) // => { a: 1, b: 1 }
log("input is", input)       // => { a: 1, b: 1 }
```
- [TS Playground](https://www.typescriptlang.org/play?ts=4.8.4#code/MYewdgzgLgBANiA5jAvDUkRwKYDoGIDcAUMRtDAGZiowAUIARgFYCMAXDAErYCGAJuDgBPADwBvXpzABXALaNsAJwC+APgCUqNTHHEYBmEuxQZSmgHkW2YFFy8IEAJaIwDFqwA0uxp1YqNQkMYYhVSclgnMAAHGShOHgEhMUlpeUVVHTRUmH8YB3RwaBJiAjoAIijYyIhy7yq4wOCDAHoW7V18vxgwsvLjCBk4GrqDajoGqA0tNo7xLtzvX1ye0qQKyZgnWvqYxubW9pQdealFmGXWVaA)
- [TypeScript: readonlyなプロパティはObject.assignで無理やり変更できる - Qiita](https://qiita.com/suin/items/97247695ded57c927316)
- [TypeScriptのreadonlyプロパティを使いこなす - Qiita](https://qiita.com/uhyo/items/0fd033ff1aed9b4b32dd#%E5%9E%8B%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AE%E9%96%A2%E4%BF%82%E6%B3%A8%E6%84%8F%E7%82%B9)



## readonlyのpros/cons

readonly導入におけるpros/consをまとめるとこうなる。

メリット
- 関数のシグネチャから破壊的変更がないことがわかる（100%ではないが）
- 誤って破壊的変更を入れてしまっていたらTS compiler が検知してくれる

デメリット
- コードが冗長になる
- readonly を設定しても破壊できるコードがありえるので100%の担保にならない

## 結論

readonlyを入れることでより堅牢になる点は間違いないが、個人的に使い勝手が悪く感じてじている。
そのため、メリデメを考えると常に脳死で使うべきでもないようにも感じた。

得られるメリットはもちろんあるがコードの冗長性などのデメリットを考えると、チームやプロダクトの成長具合に応じては「意図的にreadonlyは積極的に使わない」という運用をするのもいいかと思う。

