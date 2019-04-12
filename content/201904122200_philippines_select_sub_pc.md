---
title: "フィリピン留学用にサブPCを選定した話【IT留学じゃないです】"
cover: 201904122200_cover.jpg
date: "2019-04-12 22:00"
category: "Tech"
tags:
  - サブPC
slug: philippines-select-sub-pc
SEO-keyword:
  - なし
---

# フィリピン留学用にサブPCを選定した話【IT留学じゃないです】

こんにちは。フィリピンで語学留学しながらフリーランスの仕事してるNashです。

この記事は「フィリピン留学中に使うPCを選定したときの、調査まとめ記事」です。
フィリピンに行く前に選定していたときの思考などを、まとめておきます。

結論は、中古MacBook(2015)を買いました。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">エンジニアのPCスペックは人権だ！と叫ばれてる中<br>macbook(2015)でしばらく仕事してみたけど<br>高望みしなければ意外とどうにかなるな</p>&mdash; Nash🌏留学中Webエンジニア (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1076377911718891520?ref_src=twsrc%5Etfw">2018年12月22日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



＜文言整理＞

- Mac Book Pro＝MBP

- Mac Book Air＝MBA

- Mac Book＝MacBook

＜Reference＞

PCのハードについて詳しくなりたければ下記のサイトで学習するのが一番良かったです。メチャクチャ詳しく、UIも見やすく、キレイにまとまってます。→[https://chimolog.co](https://chimolog.co/)



## フィリピン留学用にサブPCを選定した理由

![philippines-select-sub-pc-1](./201904122200_1.jpg)

前提として自分が持っていたメインPCはMac Book Pro(2017 / 15inchi)になります。

ただ、別途でサブPCを購入することにしました。
理由は、大きくわけて2つです。

- 母艦のMac Book Pro(2017 / 15inchi)が物理的に重すぎる(2kg over)
- 母艦を紛失したら金額面での損失がでかい（50万くらい）

語学学校でのセキュリティレベルがわからないのもあり、サブPCを購入することにしました。

### 仕事や語学留学について

仕事は軽めのタスクのみです。
具体的には、Rails/Slim/SASS+Dockerで小規模なWebアプリケーションの開発です。
また、語学留学の期間は3ヶ月です。

では、まず選定において重視した点からです。

## 重視した点

![philippines-select-sub-pc-2](./201904122200_2.jpg)

### モビリティ：軽いは正義

気軽に持ち運び可能で、荷物としても負担にならないことを重視しました。
理由は、メインで使っていたMBPが重すぎたので、常に肩こりに悩まされてたからです。



### スタンドアローン：NoNetwork, NoProgramming

PC単独で完結して作業が行えることを重視しました。

Cloud9などのクラウド環境を使った開発はサブPCにおいて定石ですが、それは日本で作業する際の定石です。ネットワークが安定している場所では開発環境・性能をクラウドに依存させる選択は「あり」だと思います。

ですが、フィリピンのような発展途上国では、ネットワーク速度・安定がどこまで担保されるのかが、不透明です。

そのため、PC単独で作業が完結できるようにする、スタンドアローン性を重視しました。



### ライフタイム：USB Type-Cに統一したい

長期的に長く使えることを重視しました。
具体的にはUSB Type-Aの規格は選ばないで、Type-Cの端子のPCを選ぶことにしました。

現状(2019/1頃)は、TypeA→Cの過渡期ですが、将来的に確実にType-Cに統一されるます。そのため、今の時点でType-AのPCを選択すると、端子の観点でPCのライフタイムが短くなるかと思いました。

Type-AのPCのほうが価格が安い傾向がありますが、長期的に見た時にライフタイムが長いPCのほうがコスパは良いかと思います。また、複数デバイスを持つ時に2端子に対応させるために、複数コードを持ちたくなかったです。

そのため、長期的なコストの観点でライフタイムを重視しました。



### キーボード：US配列

メインPCがUSなので、揃えることは必須にしました。

以前、US配列・JS配列の２つのPCを同時に使っていたときがありましたが、生産性が劇的に落ちます。具体的に言うと、タイポが劇的に増えます。

そのときの教訓から、絶対にここは譲れなかったです。



## 重視しなかった点

![philippines-select-sub-pc-3](./201904122200_3.jpg)

### コスパ：性能に対する値段

「性能に対する値段」という意味合いのコスパは重視しなかったです。というのも、他に重視したいポイントが多かったので、金で解決することにしました。



世の中は金で大抵のことが解決します。良い世の中ですね。



### カスタマイズ性：メモリ交換したい

メモリの差し替え、バッテリーの交換などのカスタマイズ性は重視しなかったです。

カスタマイズ性が高いと、コスパがよくなる傾向があります。例えば、メモリも自分で差し替えたほうが性能の高いRAMを安価で揃えられるし、バッテリーの寿命からくる交換も安いです。

とはいえ、金ですべて解決できます。



### スペック：最低限ライン

高スペックはそこまで、求めないことにしました。

とはいえ、譲れないポイントは少なくとも下記です。

- RAM　=　8GB
- CPU　＝　Y系orPentium以上
- Storage　＝　SSD

CPUについては、Y系（Pentium）は弱すぎると思っていましたが、<b>同僚がメモリ4GB＋Y系CPUのMBA(2010?)でUnity動かしながらDocker上でElixirをコンパイルする開発スタイル</b>でも仕事が出来ていたので、ここを最低ラインにすることにしました。

ちなみに、同僚の開発スタイルをとるとMBAが熱くなりすぎて焼き肉が焼けるレベルです。

ただ、さすがにRAM=4GBは辛いと思ったので、8GBを最低ラインにしてます。DDR4についても、DDR3でOKです。

ストレージは「SSDであること」を最低ラインにしました。CPUとRAMで性能を下げている分、SSDにすることで性能のバランスを保ちたかったのが理由です。ちなみに、PCIe/NVMeでなくてもSATAでOKにしてました。



## 【結論】中古Mac Book(2015)にした【理由】

![philippines-select-sub-pc-4](./201904122200_4.jpg)

というわけで、選定基準を決めて色々とPCを選定しました。

結果として、買ったものは中古MacBook(2015)で、買った場所は秋葉原のsoftmapで、金額は10万くらいです。

はじめて秋葉原で中古PC巡りをしましたが、かなり楽しいですね。ただ、リアル店舗に見に行くメリットはなく、ネットで探すほうが効率性の観点からは良いです。

とはいえ、リアル店舗を色々と見て回るのは楽しかったので、良しとしています。



では、中古Mac Book(2015)を購入した理由を挙げていきますね。



### 中古の理由

最新MacBook(2018)よりも、中古MacBook(2015)のほうが値段が安いです。まぁ当たり前ですね。

ちなみに、通常だとメルカリで購入するほうが更に安くなりますが、保証がないのでトラブルのリスクを考慮してsoftmapにしました。

ちなみに、この時期にPayPay祭りだったので2割還元されましたので、メルカリより安く買えたのはデカイですね。



### CPUが、MB(2018)よりそこまで悪くない

CPUの性能についてですが、自分の購入時期だと最新のMac Bookは2018モデルです。そして、MacBook(2018)のCPUは第7世代です。

後述しますが、CPUは第7→8世代で飛躍的に性能が向上します。逆に言うと、2015モデル→2018モデルのCPUの成長曲線はリニアかつ緩やかです。

そのため、最新モデルのMB(2018)ではなくMB(2015)でも性能面はそこまで極端に大きくは変わらないです。



### RAM／端子／Storageの要求を満たす

RAM＝8GBがMBのレパートリーにあるので、少なくとも自分が設定していた最低ラインは超えてくれます。また、端子もMacBook(2015)はUSB Type-Cです。StorageもSSDです。

というわけで、要求している性能は全部クリアしていました。



## 他のPCにしなかった理由

![philippines-select-sub-pc-5](./201904122200_5.jpg)

### なぜ、MBA(~2017)にしなかった？

ライフサイクルが短いと感じました。

具体的には、USB-TypeAかつ充電規格がmagsafeだったのが理由です。

ただ、ライフタイムを捨ててコスパを重視するならおすすめです。中古なら、5万でメモリ8GBのMacBookAirが秋葉原に転がってます。

「MacのPCがとりあえず欲しい」という人に最初におすすめするなら、これですね。



### なぜ、MBA(2018)にしなかった？

MacBookより少し重いのでやめました。このとき自分の中で、モビリティはかなり大事でした。



### なぜ、MBP(13inchi)にしなかったの？

そもそも、MBP(15Inchi)を持っていたのと、語学留学中に紛失の可能性がどれだけあるかが、わからなかったのでやめました。

ただ、性能と重量のバランスが一番良いので、将来的に自分の母艦はMBP(13inchi)にすると思います。



### なぜ、Windows系にしなかったの？

開発環境を作るコストを大きく払いたくなかったからです。

昨今のDocker事情からも、Windowsでも開発環境を整えることはできると思います。ですが、Windowsでの環境構築を整えるコストを払うのはそれなりに高くつくと思っています。

そのため、金を積めばMac製品が買えるので、今回は金で解決しました。

ちなみに、具体的には「ThinkPad」「LG gram」「SurfacePro」などがWindows系の候補でした。



### なぜ、iPad(無印)/(Pro)にしなかったの？

スタンドアローン性が低いからです。

タブレット端末による開発はクラウド依存が必須です。ネットワークが死んだ時に、母艦にてサーバを立てられないと詰みます。

それと、iPadで開発をするナレッジがまだまだ少ないので、今の自分はそこにコストは払わないことにしました。



## 学んだこと

![philippines-select-sub-pc-6](./201904122200_6.jpg)

というわけで、選定を割とガッツリ行ったのですが、その時に学んだ内容もまとめておきます。



### IntelCPUの第７→８世代がターニングポイント

端的に言えば、第7→8世代で性能が1.5倍に跳ね上がっています。

そのため、「値段が安いので、第7世代CPUのPCを買う！」みたいな、選択は結果としてコスパが悪いケースが多いと思っています。

背景として、CPUの性能の観点でムーアの法則の成長曲線に限界を迎え始めました。つまり、シングルコアでは性能が頭打ちになりはじめたわけですね。そこで、更に性能を引き出すため物理的にコア数を増やしたマルチコアが主流になっています。（最近では、機械学習などのジャンルではGPUを使って更に性能を引き出してると思いますが。）

つまり、コア数に処理性能が大きく依存しているわけですね。

そして、Intelのライバル社が新CPUを投入してきたので、それをぶっ潰すためにIntelは今までのIntelCPUのコア数を1.5倍にしました。そのタイミングが第７→８世代というわけです。

そのため、見た目は数字が7→8に上がっただけですが、実態はアーキテクトレベルでCPU数が増加しているメジャーアップデートなわけです。

結論、CPU選定においては「第７世代以前か？第８世代以降か？」がターニングポイントになります。



### 「軽い」は「機能」

自分の結論ですが、PC選定してわかったのは、PCが「軽い」という特長はもはや機能の１つです。

ソフトウェアにおける「速い」に似ています。ソフトウェアにおいても、「速い」は１つの機能として捉えられることもあります。

そのため、同一性能のPCでも「軽い」と値段が確実に高くなります。

「できれば軽いPCにしたいな〜」は、考えが甘くて、「お金を払ってでも、軽いという機能を買うか？」という思考を持っていると選定が楽になります。



### トレードオフの関係性

もちろんPCごとに違いますが、いくつかの観点で共通したトレードオフがあるように感じました。

- 値段↔性能
- 軽量性↔値段

- 軽量性↔カスタマイズ性
- 軽量性↔稼働時間：（バッテリーの重さに比例する）
- 軽量性↔タッチパッド機能

改めてまとめると「軽量性」の観点が多いですね。



### 終わりに

色々調べた結果、落ち着いたのがMacBookです。

開発者がMacBookを使っているケースが少ないので、使ってみた結果とかも後々でまとめていこうと思います。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">数少ないmacbookエンジニア仲間ですねー<br><br>エンジニアは大抵MBPかMBAなのでmacbook使うエンジニアってあんまり見ないんですよね</p>&mdash; Nash🌏留学中Webエンジニア (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1076398485593706496?ref_src=twsrc%5Etfw">2018年12月22日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


