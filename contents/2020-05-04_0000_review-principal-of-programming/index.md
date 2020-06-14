---
title: '【書評】『プリンシプルオブプログラミング』は3年目までに読むこと'
cover: 'cover.png'
createdAt: '2020-05-04 01:00'
updatedAt: '2020-05-04 01:00'
category: 'Tech'
tags:
  - 書評
slug: review-principal-of-programming
word:
  - nothing
---

# 【書評】『プリンシプルオブプログラミング』は 3 年目までに読むこと

こんにちは、最近の趣味は技術書を読むことの Nash です。

この記事は「『プリンシプルオブプログラミング』を読んだのでその書評」の記事です。

結論は、リーダブルコードに次ぐ現代の新しいエンジニア向けの教科書だと思っていて１年目の時点で読むべきです。

<!-- アフィ -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:300px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px; width:100px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4798046140%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51Ss443d4hL._SS120_.jpg" /></a></td><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4798046140%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">プリンシプル オブ プログラミング3年目までに身につけたい一生役立つ101の原理原則</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥2,420<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/5/4 00:51時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!-- /アフィ -->

では、見ていきます。

## プリンシパルオブプログラミングは辞書的な技術書

まずは、目次です。

目次を見るだけでもこの本が「辞書的な技術書」という点がわかるかと思います。
ただ目次も長いので、ななめ読みで見てください。

```
プロローグ 本書の読み方
0.1 プリンシプルのカテゴリ
0.2 プリンシプルの説明のフォーマット
0.3 プリンシプルの説明における用語法
0.4 プリンシプルの説明の注意点

第１章 前提 ～プログラミングの変わらぬ真実～
1.1 プログラミングに銀の弾丸はない
1.2 コードは設計書である
1.3 コードは必ず変更される

第２章 原則 ～プログラミングのガイドライン～
2.1 KISS
2.2 DRY
2.3 YAGNI
2.4 PIE
2.5 SLAP
2.6 OCP
2.7 名前重要

第３章 思想 ～プログラミングのイデオロギー～
3.1 プログラミングセオリー
3.2 【プログラミングセオリーを支える3つの価値1】コミュニケーション
3.3 【プログラミングセオリーを支える3つの価値2】シンプル
3.4 【プログラミングセオリーを支える3つの価値3】柔軟性
3.5 【プログラミングセオリーを実現する6つの原則1】結果の局所化
3.6 【プログラミングセオリーを実現する6つの原則2】繰り返しの最小化
3.7 【プログラミングセオリーを実現する6つの原則3】ロジックとデータの一体化
3.8 【プログラミングセオリーを実現する6つの原則4】対称性
3.9 【プログラミングセオリーを実現する6つの原則5】宣言型の表現
3.10 【プログラミングセオリーを実現する6つの原則6】変更頻度
3.11 アーキテクチャ根底技法
3.12 【アーキテクチャ根底技法1】抽象
3.13 【アーキテクチャ根底技法2】カプセル化
3.14 【アーキテクチャ根底技法3】情報隠蔽
3.15 【アーキテクチャ根底技法4】パッケージ化
3.16 【アーキテクチャ根底技法5】関心の分離
3.17 【アーキテクチャ根底技法6】充足性、完全性、プリミティブ性
3.18 【アーキテクチャ根底技法7】ポリシーと実装の分離
3.19 【アーキテクチャ根底技法8】インタフェースと実装の分離
3.20 【アーキテクチャ根底技法9】参照の一点性
3.21 【アーキテクチャ根底技法10】分割統治
3.22 アーキテクチャ非機能要件
3.23 【アーキテクチャ非機能要件1】変更容易性
3.24 【アーキテクチャ非機能要件2】相互運用性
3.25 【アーキテクチャ非機能要件3】効率性
3.26 【アーキテクチャ非機能要件4】信頼性
3.27 【アーキテクチャ非機能要件5】テスト容易性
3.28 【アーキテクチャ非機能要件6】再利用性
3.29 7つの設計原理
3.30 【7つの設計原理1】単純原理
3.31 【7つの設計原理2】同型原理
3.32 【7つの設計原理3】対称原理
3.33 【7つの設計原理4】階層原理
3.34 【7つの設計原理5】線形原理
3.35 【7つの設計原理6】明証原理
3.36 【7つの設計原理7】安全原理
3.37 UNIX思想
3.38 【UNIX思想1】モジュール化の原則
3.39 【UNIX思想2】明確性の原則
3.40 【UNIX思想3】組み立て部品の原則
3.41 【UNIX思想4】分離の原則
3.42 【UNIX思想5】単純性の原則
3.43 【UNIX思想6】倹約の原則
3.44 【UNIX思想7】透明性の原則
3.45 【UNIX思想8】安定性の原則
3.46 【UNIX思想9】表現性の原則
3.47 【UNIX思想10】驚き最小の原則
3.48 【UNIX思想11】沈黙の原則
3.49 【UNIX思想12】修復の原則
3.50 【UNIX思想13】経済性の原則
3.51 【UNIX思想14】生成の原則
3.52 【UNIX思想15】最適化の原則
3.53 【UNIX思想16】多様性の原則
3.54 【UNIX思想17】拡張性の原則
3.55 UNIX哲学
3.56 【UNIX哲学1】小は美なり
3.57 【UNIX哲学2】1つ1仕事
3.58 【UNIX哲学3】即行プロトタイプ
3.59 【UNIX哲学4】効率性より移植性
3.60 【UNIX哲学5】データはテキスト
3.61 【UNIX哲学6】レバレッジ・ソフトウェア
3.62 【UNIX哲学7】シェルスクリプト活用
3.63 【UNIX哲学8】対話インタフェース回避
3.64 【UNIX哲学9】フィルタ化

第４章 視点 ～プログラマの観る角度～
4.1 凝集度
4.2 結合度
4.3 直交性
4.4 可逆性
4.5 コードの臭い
4.6 技術的負債

第５章 習慣 ～プログラマのルーティーン～
5.1 プログラマの3大美徳
5.2 ボーイスカウトの規則
5.3 パフォーマンスチューニングの箴言
5.4 エゴレスプログラミング
5.5 1歩ずつ少しずつ
5.6 TMTOWTDI

第６章 手法 ～プログラマの道具箱～
6.1 曳光弾
6.2 契約による設計
6.3 防御的プログラミング
6.4 ドッグフーディング
6.5 ラバーダッキング
6.6 コンテキスト

第７章 法則 ～プログラミングのアンチパターン～
7.1 ブルックスの法則
7.2 コンウェイの法則
7.3 割れた窓の法則
7.4 エントロピーの法則
7.5 80-10-10の法則
7.6 ジョシュアツリーの法則
7.7 セカンドシステム症候群
7.8 車輪の再発明
7.9 ヤクの毛刈り

-- https://www.shuwasystem.co.jp/book/9784798046143.html
```

目次を見てもわかるかと思いますが、各プリンシパル（原則、法則、ルールなど）をまとめた用語集のような技術書ですね。

### エンジニアの必須知識・概念・用語がまとまってる

なんといっても、網羅的に技術的な概念・用語がまとまっている点です。

今までは、これらすべてを網羅する技術書がなかったので、様々な技術書を読んで、それぞれの技術書から概念・用語をピックアップして理解しないといけなかったわけです。

しかも、複数の本にまたがっているし、技術書なので読むのもかなり大変でした。

この本なら、１つの本で網羅的に概念・用語がまとまっているし、１つのトピックは１〜３ページくらいの簡潔でわかりやすい説明にまとめられています。

### What/Why/How などの背景をわかりやすく書かれてる

各用語に対して、what/why/how までを踏まえてわかりやすく書かれています。そのため、ただの用語集ではなくて効率的に「理解」を腹落ちさせる手助けをしてくれる技術書です。

## 書評のまとめ

<!-- アフィ -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:300px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px; width:100px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4798046140%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51Ss443d4hL._SS120_.jpg" /></a></td><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4798046140%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">プリンシプル オブ プログラミング3年目までに身につけたい一生役立つ101の原理原則</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥2,420<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/5/4 00:51時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!-- /アフィ -->

### この本は１〜３年目までに読むべき

少なくとも１〜３年目までに、この本に書かれている内容は理解〜実践できるレベルになっているべきかと思います。サブタイトルにも『3 年目までに身につけたい』と書かれてますし、そのとおりだと思います。

少なくとも１〜３年目までに理解すべきなので、**１年目に読むべき**だと思います。

理由は、効率的なインプットのために**事前の刷り込みをしたいから**です。

「英単語を記憶する」という観点と同じなのですが、１回目の**インプットはできる限り早めに**しておくべきです。エンジニアを１〜３年目をまともな現場でやっていれば、この本に出てくるトピックはかなりの頻度で話題に出てきます。その時点で「初めて聞いた用語・概念だなー」ではなくて、**「あぁ、この本で１回見たな」という状態を作っておくべき**です。

１回目は知識としてこの本でインプットしておけば、２回目以降のインプットは経験を通して更に深くまで理解・実践できるからです。

そのため、この本を読むのが早ければ早いだけその準備を作れるので、１年目の時点で読むべきだと思います。

### 抽象的・専門的・哲学的すぎてわかりにくい点も目立つ

説明している内容にもよるのですが

- 説明が抽象的すぎる
- 説明が哲学的になりすぎる
- 説明で使われる単語が専門的すぎる

というトピックもいくつかありました。

つまり、「ふむふむ、なるほど。わからん。」という状態になるやつですね。。。

そういうトピックについては、ある程度はスキップして、時間を置いて読み直すのが正解だと思っています。

個人的には「もう少し具体例も書かれていても良いかも」とも思いますが、そうなると抽象度が減ってしまうので、読み手の解釈の余地がなくなってしまうのかなー、という欠点もあるので難しいですね。

### 辞書＋お守りとして機能する

用語をドわすれしても、用語の内容を忘れても目次から素早く情報にたどり着けます。

しかも、情報はかなり正確にかつ簡潔にわかりやすくまとまっています。

現代なら Google 検索でも情報にたどり着けますが、用語の正確性としてはやはり厳格な校正が行われている本を真としてインプットしておきたいものです。

### おわりに

この本は、自分も１年目に読んで最近になってまた読み直しました。

書かれている内容は今でこそ「あぁ、知ってる知ってる。わかるよ、それ。」という内容ばかりですが、とはいえ直近のエンジニアリングの反省点を振り返ると大抵はここに書かれている内容で説明がつくことばかりです。

年次が変わって読み直すたびに、自分の理解がより深くなっていくことを実感させられる良い本だと思います。

<!-- アフィ -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:300px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px; width:100px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4798046140%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51Ss443d4hL._SS120_.jpg" /></a></td><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4798046140%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">プリンシプル オブ プログラミング3年目までに身につけたい一生役立つ101の原理原則</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥2,420<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/5/4 00:51時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!-- /アフィ -->