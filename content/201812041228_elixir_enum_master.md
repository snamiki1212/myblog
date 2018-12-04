---
title: "【Elixir】Enumを完全に理解する | 効率的なEnumの学習方法・暗黙のルール・意識すべきこと"
cover: "201812041228_cover.png"
date: "2018-12-04 12:28"
category: "Tech"
tags:
    - elixir
    - tech
slug: elixir-enum-master
---

# 【Elixir】Enumを完全に理解する | 効率的なEnumの学習方法・暗黙のルール・意識すべきこと

作成するアプリケーションに依存するとも思うが、Elixirでアプリケーションを作成する時はかなりの比率でEnumモジュールの関数を使う。初学者はElixirになれる意味合いでもEnumの使い方に慣れると良いと思われる。

ただし、全部の関数を頑張って手を動かしたりして学ぶ必要は無かった。自分もやってみたが結局は業務中には全部は使わないし記憶にも定着しにくいので。

最終的に良かった方法は

1. よく使う関数のみ最初にマスターする

2. ルールと意識すべき点を理解する

3. 全体的にさらっておく

だった。

自分が学習した際の大事だと思う観点も合わせながら、この流れで説明していく。

## 0. そもそもEnumとは？

![img](./201812041228_1.png)

Elixirの言語自体にビルトインされているModuleで配列に対して抽出・並び替え・結合など様々なアルゴリズムを抽象化した関数として用意されている。

- [Enum – Elixir](https://hexdocs.pm/elixir/Enum.html)

そのため、利用者は計算量が最適化された既に用意されたアルゴリズムを使用することでバグがなく高速な処理を行うことが出来る。

## 1. よく使うEnumの関数8選

文言による定義よりも具体例の方が日本人は理解しやすいと思う。自分が経験上よく使った関数を独断と偏見でピックアップしたので最初にこれらの関数を記憶しておけば大体のことは出来ると思う。


### `Enum.filter/2` ↔ `Enum.reject/2`

この2つは対義語なのでペアで記憶すると良い。

```elixir
# filter
iex> Enum.filter( [1,2,3], fn x -> x > 2 end )
[3]

# reject
iex> Enum.reject( [1,2,3], fn x -> x > 2 end )
[1, 2]
```

「条件を元に配列から抽出↔除外する」処理となる。



### `Enum.each/2` / `Enum.map/2`

この2つは最初使い分けがわからなかったり、意識しないで実装している人が多かったので、これもペアで記憶すると良い。

```elixir
# each
iex(8)> result = Enum.each([1,2,3], fn x -> IO.inspect(x*2) end)
2 # IO.inspectで標準出力されて表示されているだけ
4 # 同上
6 # 同上
:ok
iex(9)> result
:ok

# map
iex(12)> result = Enum.map([1,2,3], fn x -> x*2 end)
[2, 4, 6]
iex(13)> result
[2, 4, 6]

```

eachは「配列の1つ1つの要素に対して第2引数に渡す関数を実行する」なので、結果は**常に`:ok`**で返ってくる。

mapは「配列の1つ1つの要素に対して第2引数に渡す関数を実行した結果を配列にして返す」なので、結果は**常に配列**で返ってくる。



### `Enum.find/2`

```elixir
iex(2)> Enum.find( [1,2,3,4,5,1,2], fn x -> x >2 end )
3
```

条件に合う一番最初の要素を返す。条件に合う要素が複数あっても最初の要素のみを返す。

### `Enum.empty?/1`

配列の値が空か否かをチェックする

```elixir
iex(19)> Enum.empty?([])
true
iex(20)> Enum.empty?([1,2,3])
false

# よくあるバグ
iex(20)> Enum.empty?(nil)
** (Protocol.UndefinedError) protocol Enumerable not implemented for nil
    (elixir) lib/enum.ex:1: Enumerable.impl_for!/1
    (elixir) lib/enum.ex:146: Enumerable.count/1
    (elixir) lib/enum.ex:677: Enum.empty?/1
```

また、よくあるバグとして`Enum.epmty?/1`の引数に`nil`を入れてしまうことがある。

条件によって変数に「配列」か「nil」が入ってくるコードのとき、「配列」のケースの時は正常に動くが「nil」になったらエラーとなるわけだ。

```elixir{9}
numbers1 = getNumbers(5) # [0, 1, 2, 3, 4, 5]
numbers2 = getNumbers(nil) # nil

if Enum.empty?(numbers2) do # エラー
  # something
end

###########
def getNumbers(nil), do: nil # バッドパターン
def getNumbers(x), do: Enum.to_list(0..x)

```

ちなみに、この問題の解決として「配列を格納する変数にはnilを格納せずに必ず配列のみを格納し、要素がない場合は空配列を格納するべき」なので、これも合わせて意識しておくと良いと思う。

```elixir{1}
def getNumbers(nil), do: [] # グッドパターン
```



### `Enum.all?/1` / `Enum.any?/1`

「要素のすべて / １つでも条件を満たしているか？」を確認する関数。返り値は真偽値となる。

```elixir
# all?
iex(34)> Enum.all?([1,2,3], fn x -> x < 4 end)
true
iex(33)> Enum.all?([1,2,3], fn x -> x > 4 end)
false
iex(35)> Enum.all?([1,2,3], fn x -> x < 2 end)
false

# any?
iex(38)> Enum.any?([1,2,3], fn x -> x > 2 end)
true
iex(39)> Enum.any?([1,2,3], fn x -> x > 4 end)
false
```



## 2. Enumの共通ルールを理解し、返り値の型を意識する

Enumモジュールが提供している関数は下記の通りとなる

- 73個 ( Elixir v1.7.4時点 )

そのため、愚直に1つずつ記憶していくのは結構大変なので、効率的に学習するためにEnumモジュールの暗黙的な共通ルールを先に学習すると良い。

ちなみに、Hexのドキュメントにも特に書かれておらず、関数群を一通り学習した時に法則性に気付いたものなので、もし公式でアナウンスのあるものなら教えて欲しい・・・

### サフィックスのルール

Enumの関数名に下記のサフィックスがついているケースがある。一部例外らしい動きもあるが、大抵は**メインの関数の動きに対して下記の挙動が追加される**。

- `〜_by`	：functionの引数の条件に沿って〜をする
- `〜_while`	：条件まで〜の処理を行う（条件にあったら処理が止まる）
- `〜_every`	：個数毎に〜の処理を行う



具体的には下記の通りとなる

```elixir
# _by
iex(49)> Enum.max([1,2,3])
3
iex(51)> Enum.max_by([1,2,3], fn x -> 1/x end)
1

# _while
iex(12)> Enum.take([0,1,2,2,1,3,2,1], 3)
[0, 1, 2]
iex(11)> Enum.take_while([0,1,2,2,1,3,2,1], fn x -> x < 3 end)
[0, 1, 2, 2, 1]

# _every
iex(70)> Enum.map([1,2,3,4,5], fn x -> x + 1000 end)
[1001, 1002, 1003, 1004, 1005]
iex(71)> Enum.map_every([1,2,3,4,5], 2, fn x -> x + 1000 end)
[1001, 2, 1003, 4, 1005]
```



### 複合Enum関数のルール

Enumには、**複数のEnum関数を１つにまとめて提供されている関数がある**（以後、便宜上、複合Enum関数と呼ぶが、正式名称ではない）。

例えば、`Enum.map_join/3`は`Enum.map/2`のあとに`Enum.join/2`を行う処理のEnum関数だ。

具体的に例を見てみる。

```elixir

iex(76)> Enum.map([1,2,3], fn x -> x + 1000 end)
[1001, 1002, 1003]
iex(74)> Enum.join([1,2,3], "a")
"1a2a3"

iex(75)> Enum.map_join([1,2,3], "a", fn x -> x + 1000 end)
"1001a1002a1003"

# Enum.map_joinと下記は同じ
iex(79)> [1,2,3] \
...(79)> |> Enum.map(fn x -> x + 1000 end) \
...(79)> |> Enum.join("a")
"1001a1002a1003"

```

そのため、**それぞれの関数の動きを理解していれば簡単に理解できる**ので、最初は複合Enum関数の学習や使用は避けて慣れてきてから着手すると良いと思う。

また、アルゴリズムが最適化されているので可能なら複合化された複合Enum関数を使うべき、ということでこれらが提供されているわけだと思う。

ただ、個人的には「処理速度よりも可読性・拡張性を優先するべき」という思想なので、あまり**複合Enum関数は積極的に使わないようにしている**。チームメンバー・プロジェクトのElixirの慣れ具合やチームとしての思想とかを元に複合Enum関数を積極的に使うべきかどうかは考えると良いのではないかと思う。


### 返り値の型を意識する

まず、Enumが提供している関数の**第一引数はすべて配列**だ。(厳密にはEnumrableプロトコルなので違うが最初は考慮しないで良いと思う)。ちなみに、初心者あるあるなのは、ここに配列でなくMapを書いたりして悩んでいるケースで型が違うので型を変えたりMapモジュールなどを使おう。

次に、Enumの**返り値の型は関数によって違う**。先程、紹介した関数でも、`Enum.map/2`の返り値は配列だし、`Emnum.empty?/1`の返り値は真偽値だ。

さて、プログラミングElixir本で「Elixirはデータ変換を行う言語」と書かれており、関数をパイプラインで渡していく中で「どの時点でどういったデータ・形なのか？」は大事になる。

これら考慮すると、Enum関数の第一引数はすべて配列なのでパイプラインで連続してデータ変換を行っている時にEnum関数を使う場合はその直前で配列になっている必要がある。
そのため、**配列以外の返り値を返すEnum関数のあとにEnumは使えない**。

言語を問わずデータ変換処理に慣れていると無意識にこの観点は考慮しているが、データ変換処理に慣れていない最初の頃はこのパラダイムがわかっていなかったりする。最初の時点からこの観点があるとパイプラインで連続して処理が行いやすいと思う。

```elixir
[1,2,3]
|> Enum.map(fn x -> x * 2 end) # [2, 4, 6]
|> Enum.map(fn x -> x + 10 end) # [12, 14, 16]
|> Enum.filter(fn x -> x/2 end) # [12, 14, 16]
|> Enum.find(fn x -> x > 13 end) # 14
```



## 3. 全体をさらう

上記の流れを追っていけば基礎知識は把握出来ているはずなのであとは手を動かして行いたい処理が出てきた時に都度Enumの関数を確認していけば、次第に使えるEnumの関数も増えていくと思う。英単語とかと同じで詰め込み教育よりも実践を通して記憶をしていくべきだ。

ただ、その前に一通りEnumの関数を見ておくと「Enumにすでにあるかも」「確かEnumですでにあった」という思考になりやすいので先に確認しておくのを推奨する。

特に、すべてのEnum関数は確認しないで「プレフィックスが無い　かつ　複合Enum関数でない」モノのみを見ておくのが良い。

参考用に、最後に自分が学習した際のメモを残しておく。

<div><iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTB77NHbT2IrUgVu_ZMlL7CeAokxous_MUfjeh-LFTmmdoAX9ym-kg6MObpSicnCnXNRR1NwSe2nXxR/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
  style="width: 100%;height: 400px">
  </iframe>
</div>

- [Elixir_Enum](https://docs.google.com/spreadsheets/d/1CFguVecOeffXtByb2xNGwo-it0WUqxApXzQG4qr4o4s/edit?usp=sharing)

## まとめ

効率的な学び方

- 最初はよく使う関数のみを絞ってマスターする

- サフィックスルール・複合Enum関数の理解、返り値の型を意識、という観点を持つ

- 全体のEnumの機能をさらっておく

- とはいえ結局、重要なのは手を動かしながら学ぶところなので手は動かそう。

## Reference

- [Enum – Elixir](https://hexdocs.pm/elixir/Enum.html)


