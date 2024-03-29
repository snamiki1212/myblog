---
layout: /src/layouts/PostLayout.astro
title: "フラグ引数アンチパターンとは｜なぜダメなのか解説"
createdAt: "2018-11-18 00:00"
updatedAt: "2020-06-20 12:00"
category: "技術"
tags:
  - プログラミング
  - PHP
slug: flag-args-anti-pattern
---

# フラグ引数アンチパターンとは｜なぜダメなのか解説

こんにちは Nash です。

この記事は「**フラグ引数アンチパターンとは何か？、なぜ使うべきではないか？、具体的にどう対処するか？**」についてまとめた記事です。

では、見ていきましょう。

## そもそもフラグ引数アンチパターンとは？

今まではフラグ引数アンチパターンを絶対悪のようにレビューしていたが、少し前に Laravel の作者の[TaylerOtwell 先生](https://twitter.com/taylorotwell)のメーリスでフラグ引数アンチパターンについて紹介されていたのを機に考えを整理することにした。

### フラグ引数アンチパターンを理解する

メソッドの引数の bool 値に依存して内部の処理がハンドリングされるような設計のメソッドのこと。

```php
// isPublicの値に依存して処理が変わる
public fucntion getDoctors($isPublic = false)
{
    if ( $isPublic ) {
        // ここに処理
    } else {
        // ここに処理
    }
}
```

### なぜ推奨されるべきでないのか？

この書き方が拡大してくと bool 型が多数に並ぶことになる。

```php
// 引数が多くてわかりにくいメソッド
public fucntion queryDoctors($isPublic = false, $isAdmin = false, $isMen = false)
{
    // 処理の例
    Doctor
      ::where('public', $isPublic)
      ->where('isAdmin', $isAdmin)
      ->where('men', $isMen);
}
```

（注意：この例の関数は引数で処理が分岐する関数ではないので、正確にはフラグ引数なパターンではないけど、良い例が考えつかなかったので、これで説明していく）

```php
// 呼び出すときもtrue/falseの羅列で詳細な処理がわからない
$doctosrs = $this->doctor->queryDoctors(true, false, true)->get();
```

## どうするべき？

案として下記の対応などが挙げられる。

1. ラッパーメソッド作成：「bool 型でハンドリングするメソッド」自体を呼び出すラッパーメソッドを作成する。
2. 連想配列化：「複数の要素」を渡すケースの場合は連想配列が好ましい。
3. 説明的な変数代入：メソッドを呼び出すときに可読性を高めるためだけの説明的な変数代入を行う。（NOTE: これは PHP 以外の言語では出来ない場合もある。）

１つずつ見ていく。

### ラッパーメソッド作成＋連想配列化

下記の対応をしてみるケース。

- 1.ラッパーメソッド作成 + 2.連想配列化

```php
// 1. getDoctorsを呼び出すラッパーメソッドを作成
public fucntion getPublicDoctors(){

  // 2. 連想配列で値を渡す。
  return $this->queryDoctors([
      'isPublic' => true,
      'isAdmin' => false,
      'isMen' => false,
  ])->get();
}
```

これで、「呼び出すときの関数名」＋「連想配列」だけで処理の内容がわかるようになる。

### ラッパーメソッド作成＋説明変数代入

下記の対応をしてみるケース。

- 1.ラッパーメソッド作成 + 3.説明的な変数代入

```php
// 1. getDoctorsを呼び出すラッパーメソッドを作成
public fucntion getPublicDoctors(){

  // 3. 関数を実行するときに「引数が何なのか？」を明示するためだけの説明的な変数に代入することで可読性が上がる。
  return $this->getDoctors($isPublic = false, $isAdmin = false, $isMen = false);
}
```

これで、「呼び出すときの関数名」＋「説明変数名」だけで処理の内容がわかるようになる。

### おわりに

それぞれについて、何より述べたいのは「**Readability**を持たせよう」ってことになる。

すでに出来上がってるアンチパターンなコードに対しても、呼び出し方を明示すれば readibilty を確保できる、という発想は自分にとっては学ぶべき点があった。
既存のコードに対する文句を言うような後ろ向きな対応とは違ってすごく前向きな対応なので。まぁ、そもそも、アンチパターンで書くなよっていう話だはあるが。
