---

title: "フラグ引数アンチパターン"
cover: "201811180000_cover.jpg"
date: "2018-11-18 00:00"
category: "Tech"
tags:
    - Tech
    - PHP
slug: flag-args-anti-pattern

---

# フラグ引数アンチパターン

フラグ引数アンチパターンを絶対悪のようにレビューしていたのだが少し前のTaylerOtwellさんのメーリスでのTipでそこら辺が紹介されていた。

- なぜ推奨すべきでないか?
- 実装するときにどうするべきか？

などの細かい思考の共有が出来ていなかったのとメーリスで新しく学んだTipsがあったのでまとめ。

## そもそもフラグ引数アンチパターンとは？

メソッドの引数のbool値に依存して内部の処理がハンドリングされるような設計のメソッド


```php{1}
public fucntion getDoctors($isPublic = false)// isPublicの値に依存して処理が変わる 
{
    if ( $isPublic ) {
        // ここに処理
    } else {
        // ここに処理
    }
}
```

## なぜ推奨されるべきでないのか？

この書き方が拡大してくとbool型が多数に並ぶことになる。見づらい。

```php{1-2,16-17}
// 引数が多くてわかりにくいメソッド
public fucntion getDoctors($isPublic = false, $isAdmin = false, $isMen = false) 
{
    // 処理の例
    Doctor
      ::where('public', $isPublic)
      ->where('isAdmin', $isAdmin)
      ->where('men', $isMen)
      ->get();
}

// ...
// ...
// ...

// 呼び出すときもtrue/falseの羅列で詳細な処理がわからない
$this->doctor->getDoctors(true, false, true); 
```

## どうするべき？
ケースに応じて対応が変わるので場合に分けて説明
1. 専用処理の場合
2. 汎用処理の場合

### 専用的な処理の場合
そもそもbool型によるハンドリングをやめてメソッド名を変えて専用のものにする。

```php{1}
public fucntion getPublicDoctors( ){ // method名から処理がはっきりとわかる
    return Doctor::where("isPublic", true)->get();
}
```

### 汎用的な処理の場合

下記の対応をすると良い

1. 「bool型でハンドリングするメソッド」自体を呼び出すラッパーメソッドを作成する
2. 「複数の要素」を渡すケースの場合は連想配列が好ましい
3. メソッドを呼び出すときに可読性を高めるためだけの変数代入を行う。（正式名称がおそらく無いので、`temp変数`と呼称する）

  ```php{1}
  // 上述の1と2のケース
  // 1. getDoctorsを呼び出すラッパーメソッドを作成
  // 2. 連想配列で値を渡す。

  public fucntion getPublicDoctors(){
    return $this->getDoctors([
        'isPublic' => true,
        'isAdmin' => false,
        'isMen' => false,
    ]); 
  }
  ```

  ```php{1,7}
  // 上述の1と3のケース
  // 1. getDoctorsを呼び出すラッパーメソッドを作成
  // 3. 「引き数が何なのか？」を明示するためだけに変数に代入することで
  //     このtemp変数名からメソッドが何やってるのかが、なんとなくわかる！

  public fucntion getPublicDoctors(){
    return $this->getDoctors($isPublic = false, $isAdmin = false, $isMen = false);
      // →関数名＋temp変数名だけで
      //  「公開可能なAdmin権限のない男性でない医者を取得する処理」
      // とわかる
  }
  ```

それぞれについて、何より述べたいのは**readability**を持たせよう。ってことになる。

### 所感

- 初otwellさんのtipsだったが特にタイムリーな事案だったので色々考えられてよかった。

- otwellさん的にメソッドの利用者のことをConsumerって書かれてるくらいだし、やはりLaravelの作者だけあって利用者の使いやすさや読みやすさを意識してるコードが多い、という感じだった。ちなみに上記の書き方は、Laravelのコード内でもよく見受けられる。特にラッピングするやり方とかかなりある。

- すでに出来上がってるアンチパターンなコードに対しても、呼び出し方を明示すればreadibiltyを確保できる、という発想は自分にとってはパラダイムシフトでこの思考は学ぶべき点があった。既存のコードに対する文句を言うような後ろ向きな対応とは違ってすごく前向きな対応だよね。まぁ、そもそも、アンチパターンで書くなよっていう話だはあるが。

- 注意なのはフラグ引数によるパターンはいつでもアンチパターンか？というとそういうわけではないという点。特に*関数型言語ではむしろよく使われる経験が多かった*の言語思想によって違うのかも？という点は頭に入れておいたほうがよいと思う。
