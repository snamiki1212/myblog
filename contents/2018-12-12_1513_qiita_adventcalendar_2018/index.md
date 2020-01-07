---
title: '【Elixir】約1年ほどElixirを業務で使った自分が最初に知りたかったこと'
cover: 'cover.jpg'
createdAt: '2018-12-12 15:14'
updatedAt: '2020-01-07 00:00'
category: 'Tech'
tags:
  - elixir
  - tech
slug: qiita-adventcalendar-2018
---

# 【Elixir】約 1 年ほど Elixir を業務で使った自分が最初に知りたかったこと

この記事は[Qiita - Elixir Advent Calendar 2018 - 12/12 の記事](https://qiita.com/advent-calendar/2018/elixir)です。

## はじめに

某スマホゲームのバックエンドで 1 年くらい Elixir で開発して、気付いたら開発リーダーっぽいポジションとかもやっていた。

せっかく 1 年くらい Elixir 書いたので、**自分が Elixir を使うにあたって最初に知りたかったこと**などをざっくばらんに書いていく。そのため、この記事は個人の主観によるところが強く、断定口調で書かれているかもしれないのでフィルターを通して読んでほしい。

また、Elixir だけでなく言語共有の学ぶ方法や関数型言語の話なども混ざってるのであしからず。

### 対象読者と期待

- Elixir これから学び人　 → 　この中から１つでも持ち帰ってください

- Elixir ちょっと学んだ人　 → 　補足ください

- Elixir ちょっとデキる人　 → 　マサカリください

## Elixir の学習ロードマップを知りたかった

「Elixir の学び方」というよりも「言語の学び方」論の色が強いが「今の自分が Elixir を学ぶなら」の学習ロードマップを書いておく。

振り返ると最初はこの 3 ステップで十分だった。

- ① 基本構文を抑える

- ②Enum の基本を扱える

- ③ 作りたいものを作る／実務を開始する

### ① 基本構文を抑える

- [Elixir Documentation - Elixir](https://elixir-lang.org/docs.html)
- [Elixir School 日本語訳 · Elixir School](https://elixirschool.com/ja/)

ここらへんを中心に読みながら iex で実際に手を動かす。iex は Elixir の REPL。

### ②Enum の基本を扱える

Elixir によるアプリケーションは**Enum によるデータ変換がかなりの比率が書かれるケースが多い**と思うので Enum 自体を最初のころに学習しておくのは効率的だと思う。もちろん、最初にすべての Enum を学ぶ必要はないので薄く広くで良い。

Enum の学び方については別記事があるので詳細はこちらを参照。

- [【Elixir】Enum を完全に理解する | 効率的な Enum の学習方法・暗黙のルール・意識すべきこと](elixir-enum-master)

### ③ 作りたいものを作る／実務を開始する

これ以降は Elixir を使う理由によって学習ロードマップが大きく変わる。ただ、ガンガン手を動かすのが正義だと思う。

大抵は Phoenix を使ったアプリケーションを作るので思うので何度も`mix phx.new`してアプリケーションを作れば作る過程で Phoenix の使い方も覚えていける。

座学で学ぶよりもモノを作りながら覚えるほうが良い。

もし可能なら仕事で Elixir を使っているところに早々にジョインするのも良い。

### 最初は Erlang のアクターモデルに手を出さない？

個人的には Elixir の本質は Erlang のアクターモデルだと思っている。ただ、もし最初に携わる範囲が API サーバだけならむしろ**学習の初期は Erlang のアクターモデルは出さなくても良かった**かもしれない。最初は概念理解の程度にしておいてあとで手を出せば良い。理由は単純に学習範囲が広がってしまうから。

選択と集中の理論に従って範囲を絞る。「Enum・Phoenix の機能を一通り扱えること」のみを中心に進めると API サーバとしての Elixir/Phoenix の使い方なら割と**早い段階**で扱えるようになる。下地が出来てその後に Erlang のアクターモデルや Phoenix の WebSocket や Stream などを進めるほうが効率的だったと思う。

ただ、Erlang のアクターモデルに関して思想・使い方の学習は早々に進めたい。他の言語／FW を色々触ってきた人なら上記の ①②③ や FW の使い方は大抵の言語とも似ているので、ある程度わかったら切り上げて、早々に Elixir を介した Erlang のアクターモデルの使い方などに手をつけても良いと思う。

### API サーバなのか Erlang サーバなのか

上記で「API サーバ」という単語を使っていたが、Elixir でアプリケーションを書くと大抵は下記の 2 ケースのどちらかになると思う（API サーバ／Erlang サーバという名称は仮名）

- (A) _API サーバ_：ユーザからの Request を元に DB レイヤーからデータ取得しその結果を整形して Response を行うような一般的なバックエンドのサーバ

- (B) _Erlang サーバ_：Erlang のアクターモデルによる SupervisorTree を中心にした Erlang サーバ

もちろん簡単に２つに分けられない。アプリケーションによってはこれらを同一のサーバにしていたり、ロジック的にも切れないケースもあるし、そもそも片方の機能しか使わないケースとかもある。

ただ、意識として

- 作っているものがどちらなのか？
- 学んでいる／使っている技術はどちらのカテゴリなのか？

を意識すると、Elixir で提供されている一つ一つの機能・技術がカテゴライズされやすいかと思う。

繰り返すが、上記で書いた通り**最初は一般的な API サーバとしての Elixir/Phoenix を学んで、慣れてきたら発展した機能**にふれると良いと思う。

## Elixir らしい書き方を知りたかった

Laravel による OOP の書き方から Elixir に来たので Elixir らしさや関数型らしさなどで、色々戸惑ったところを書いておく。

### for 構文は使わない

先に断っておくと for が嫌いではないし使う時は使う。が、最初は Elixir では「for 使ったら死ぬ」くらいの縛りで始めても良いと思う。自分が個人的に for を使うべきではない理由は

- 👎①拡張性時の可読性が悪い
- 👎②Enum でも表現できる
- 👎③for 構文を知らないとわかりにくい

で、逆に for を使う場所は

- 👍 ④多重ネスト構造
- 👍 ⑤絶対に処理が拡張されない場所

だと思っている。ただ、「コードは必ず変更される」の思想で考えるとロジックの部分ではやはり for は使わないほうが良いと思う。

▼①拡張性時の可読性が悪い

```elixir
// 👎拡張性時の可読性が悪い
// ①Enum
iex(45)> 1..10 \
...(45)> |> Enum.map(fn x -> x + 3 end) \
...(45)> |> Enum.filter(fn x -> rem(x, 2) == 0 end)
[4, 6, 8, 10, 12]

// ②for
iex(47)> (for i <- 1..10 do \
...(47)>   i + 3 \
...(47)> end) \
...(47)> |> Enum.filter(fn x -> rem(x, 2) == 0 end)
[4, 6, 8, 10, 12]
```

▼②Enum でも表現できる＋③for 構文を知らないとわかりにくい

```elixir
// 👎Enumでも表現できる　＋　👎for構文を知らないとわかりにくい
// ①Enum
iex(42)> 1..5 \
...(42)> |> Enum.filter(fn i -> rem(i,2) == 0 end) \
...(42)> |> Enum.into(%{}, fn i -> {i, i+1000} end)
%{2 => 1002, 4 => 1004}

// ②for
iex(28)> for i <- [1,2,3,4,5], rem(i,2)==0, into: %{}, do: {i, i+1000}
%{2 => 1002, 4 => 1004}
```

▼④多重ネスト構造

```elixir
// 👍多重ネスト構造
// ①Enum
iex(19)> Enum.map(1..3, fn i ->
...(19)>   Enum.map(["a","b","c"], fn x ->
...(19)>     "#{i}_#{x}"
...(19)>   end)
...(19)> end) \
...(19)> |> List.flatten()
["1_a", "1_b", "1_c", "2_a", "2_b", "2_c", "3_a", "3_b", "3_c"]

// ②for
iex> for i <- [1,2,3], x <- ["a", "b", "c"] do
...>   "#{i}_#{x}"
...> end
["1_a", "1_b", "1_c", "2_a", "2_b", "2_c", "3_a", "3_b", "3_c"]
```

## with 構文は使わない

for と近い理由で with を使うべきでない。こちらも「with 使ったら死ぬ」くらいの縛りでちょうど良い。

特に Elixir にちょっとこなれてきたタイミングに「with 構文ちょっと使ってみるかな」っとなって、めでたくクソコードが生まれのをよく見た。というか自分が生みました、すみません。

with は「case のネストが発生する場面」以外では使わないで良いという考えだが、それこそ Elixir チョットデキる人が「そこ with で書くとキレイだよ」と言われたタイミングで初めて取り入れるくらいの気持ちで十分だと思う。

## if/case 内のブロックで束縛しない

PR 指摘でかなりの回数「if/case の中で束縛しないで！」の指摘をしたので初心者あるあるだと思う。

```elixir
# 👎バッドパターン
if is_nil(user) do
  user_money = get_money(user)
  user_gacha = get_gacha(user)
else
  user_money = 0
  user_gacha = nil
end
```

```elixir
# 👍グッドパターン
{ user_money, user_gacha } =
  if is_nil(user) do
	{ get_money(user), get_gacha(user) }
  else
  	{ 0, nil }
  end
```

根底の思想として下記の通りとなる。

- 「if-do-else も１つの関数とみなす」
- 「関数化しつくした最終形態をイメージできること」
- その上で、「あえて関数化しないという選択肢も持つこと」

詳細はこちらの記事を参照

≫ [【Elixir】if や case の中で代入・束縛を行うべきでない](elixir-not-to-bind-in-block)

## 同一の関数名を定義し、引数で処理を分ける

Laravel 作者の TaylorOtwell 先生が

「引数に応じて関数の処理を分けるな」

の言葉を元に成長してきた自分だったが、Elixir では引数で処理をハンドリングしていたので最初はかなり困惑した。

結論、関数型のパラダイムでは下記が正義だと受け入れた。

「 同一の関数名を定義し、引数で処理を分ける」

この世界はそういうもので受け入れば楽だったが「パラダイムが変わる」ことによってむしろ今までの知識が弊害になる、というわかりやすい具体例だったように思う。

ちなみに、「引数に応じて関数の処理を分けるな」は「フラグ引数アンチパターン」というアンチパターンの１つで詳細は下記。

≫ [フラグ引数アンチパターン](flag-args-anti-pattern/)

## Enum の共通ルールを知りたかった

Enum の関数の命名に関する暗黙ルールを知っておくと Enum について効率的に学べたので、最初に知りたかった。

### サフィックスルール

Enum の関数名に下記のサフィックスがついているケースがある。一部例外らしい動きもあるが、大抵は**メインの関数の動きに対して下記の挙動が追加される**。

- `〜_by` ：function の引数の条件に沿って〜をする
- `〜_while` ：条件まで〜の処理を行う（条件にあったら処理が止まる）
- `〜_every` ：個数毎に〜の処理を行う

そのため、サフィックスを元に処理が大体推測できるし、記憶もしやすい。

### 複合 Enum 関数

Enum には、**複数の Enum 関数を１つにまとめて提供されている関数がある**。例えば、`Enum.map_join/3`は「`Enum.map/2`のあとに`Enum.join/2`を行う Enum 関数」だ。学習順序として、**それぞれの関数の動きを理解していれば簡単に理解できる**ので、最初は複合 Enum 関数の学習や使用は避けて慣れてきてから着手すると良いと思う。

「サフィックスルール」「複合 Enum 関数」については下記の記事に記載してある。

≫ [【Elixir】Enum を完全に理解する | 効率的な Enum の学習方法・暗黙のルール・意識すべきこと](./elixir-enum-master)

## 関数型らしさは Haskell ではなく JavaScript で学ぶべきだった

せっかく Elixir を通して関数型を学んでいるので

- Elixir らしさ

- 関数型らしさ

を分けて学習するのもよいと思う。「関数型らしさ」を知るおすすめは JavaScript で学ぶタイプの本だ。

<div style="display:flex; flex-direction:row;">

<!--  -->
<div style="flex:1">
<!--  -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4865940596%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://images-fe.ssl-images-amazon.com/images/I/51OuxCyQM1L._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4865940596%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">関数型プログラミングの基礎 JavaScriptを使って学ぶ</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,080<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/1/7 11:52時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!--  -->
</div>

<div style="flex:1">
<!--  -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4873116600%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://images-fe.ssl-images-amazon.com/images/I/414qGlNpcHL._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4873116600%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">JavaScriptで学ぶ関数型プログラミング</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,300<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/1/7 11:53時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!--  -->
</div>

<!--  -->
</div>

<!--  -->


他の本も色々と読んだりしたが大抵の本は Haskell で説明されている。「関数型とは？」を知りたかったはずが気付いたら「Haskell とは？」となり Haskell を勉強していた、ということになりかねない。というか自分がそうなっていた。

JavaScript で関数型のエッセンスを説明されている本なので「関数型とは？」を知りたければこの本から始めると障壁は低いし、もし深く知りたくなったらその時に Haskell をベースに学び始めてもよいと思う。

ちなみに、関数型を学びたかったはずの自分は最終的に Haskell Day 2018 を楽しんでいた。

≫ [HaskellDay2018 のまとめ – namiki – Medium](https://medium.com/@snamiki1212/haskellday2018%E3%81%AE%E3%81%BE%E3%81%A8%E3%82%81-3f66500c3113)

## 最後に

全体的にごちゃごちゃとした内容かつポエム色も強い内容になってしまって申し訳ない限りだが、この内容のどれか一つでも誰かの助けになれば幸いです。

[@snamiki1212](https://twitter.com/snamiki1212)の[Qiita - Elixir Advent Calendar 2018 - 12/12 の記事](https://qiita.com/advent-calendar/2018/elixir)はこれで終わり。

おつかれ、おれ。

お誕生日おめでとう、おれ。
