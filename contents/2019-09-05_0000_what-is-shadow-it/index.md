---
title: '【解説】シャドーITとは？背景と、対策と、向き合い方'
cover: 'cover.jpg'
date: '2019-09-05 00:01'
category: 'Tech'
tags:
  - tech
slug: what-is-shadow-it
---

# 【解説】シャドーITとは？背景と、対策と、向き合い方

こんにちは、Nashです。大企業 SIer や、金融系の大企業の情シス部門や、ベンチャーでのエンジニアとか、いろいろ経験してきました。

この記事は「**シャドーITについての知識、最近なぜ話題になっているか？の背景、対策、付き合い方について**」をまとめた記事です。

では見てみましょう。

## シャドー IT とは

![shadow-it](cover.jpg)

> シャドー IT（シャドーアイティー、英語: shadow IT）とは、
> 企業・組織側が把握せずに従業員または部門が業務に
> 利用しているデバイスやクラウドサービスなどの IT 技術のことである
> -- 引用 [wikipedia](https://ja.wikipedia.org/wiki/シャドーIT)

つまり、

「**シャドーIT とは、企業側が知らないうちに従業員がビジネスでIT端末・サービス・アプリなどを使ってしまっている状況のこと。**」

ですね。

例えば、仕事の連絡に個人的な LINE を使ったりするのが「シャドー IT」ということですね。

### シャドー IT の問題

シャドー IT による最大の問題は「**セキュリティ**」です。

例えば、機密レベルの高い資料を上司や同僚に LINE を使って送ったとします。顧客情報とかですね。

そして、仮に、LINE 社がセキュリティ・インシデントを起こしてしまい、メッセージの情報を流失してしまったとき、どうなるでしょう？

LINE を使った従業員の会社は、LINE 社のインシデントの結果、自社の秘匿情報が漏れていることに気付くことができません。

このようにシャドーITによる危険性として、**企業側が気付かないうちにリスクを背負ってしまっている**、という点です。

### シャドー IT の背景

なぜ最近、シャドー IT が目立つようになってきたのか？

背景は下記のようなものかと思われます。

- 【背景 ①】人材不足による情シスのリソース不足
- 【背景 ②】簡単に、すべてがインターネットに繋がる世界になった。
- 【背景 ③】クラウド化したので、ブラウザがあれば何でも出来る

1 つずつ見ていきましょう。

### 【背景 ①】人材不足による情シスのリソース不足

現在、日本というレベルで市場を見たときに人材＝**働き手の供給が足りていない状態**です。

今までは、こういったシャドー IT などの問題に会社レベルで対応する際は「情報システム部＝情シス」の人員が何かしらのアクションを行ってきました。

ですが、現在の日本の人員不足から情シスの人員も不足している状態です。実際、「１人情シス」という言葉が生まれるようなものですから。

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">人手不足による先月の倒産件数 この４年間で最多に <a href="https://twitter.com/hashtag/nhk_news?src=hash&amp;ref_src=twsrc%5Etfw">#nhk_news</a> <a href="https://t.co/CKhIjkddoS">https://t.co/CKhIjkddoS</a></p>&mdash; NHKニュース (@nhk_news) <a href="https://twitter.com/nhk_news/status/928512233872773120?ref_src=twsrc%5Etfw">November 9, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 【背景 ②】簡単に、すべてがインターネットに繋がる世界になった。

一昔前では、一家に一台 PC があるかないか？のような時代でした。
ですが、現代では、「一人一つのスマホ」＋「一人一つの PC」が当たり前になっています。

ふと、電車内を見渡すと、ほとんどの人がスマホを見ているような時代です。

すべてが簡単にインターネットに繋がる世界です。

企業側は、これらすべての端末管理を行えなくなってきてしまいました。

### 【背景 ③】クラウド化したので、ブラウザがあれば何でも出来る

特に最近ではすべてのアプリケーション・サービスが「クラウド化」の一途をたどっています。

初期のブラウザでは、見れるものはせいぜいテキストと単純な画像くらいでした。

時代が進み、今ではブラウザを通せば、インターネット上で動画も見れるし、ハイクオリティなゲームも行えるような時代です。

企業側も「インターネットの先で何をしているのか？」を完全に管理できなくなってきています。


## シャドーITに対する対策・向き合い方

![people](1.jpg)

こういった、背景からシャドー IT が多発している状況です。
ではシャドー IT に対して各企業はどう向き合っていけばよいのか？どう対策するべきなのか？

大企業 SIer、大企業金融系、ベンチャーで仕事をしてきた、自分の私見をまとめていきます。

### 管理よりも裁量を。

上記の「背景」からわかるように、現実的に「管理」は不可能な状態になっています。

仮に完全に「管理」しようとするなら、

「会社へ出勤する際は、
荷物検査で USB などのデバイスがないことの確認と、
スマホは入り口のロッカーにあずけて、
金属探知のセキュリティゲートを通ってくださいね」

みたいになります。
一般的な企業でこれを実現するのは、ほぼ不可能ですよね？

そのため、一般的な会社では、管理ではなくて社員ひとりひとりに裁量権を与えて運用していくのがベターになるかと思います。

ちなみに、メガバンのデータセンターとかは本当にセキュリティゲートとかがあって、管理されてます。というか、もっと、セキュリティ厳しいです。

### 集中から分散に。

さて、トップダウンではなく、それぞれの社員・チームに裁量権を与えられると、どうなるか？

各個人・チームが裁量権を持てば、意思決定のプロセスが減るので、ビジネスの速度を上げることが出来ます。

また、現場のニーズも熟知しているので、仮にクラウド化されたアプリをチームに導入するときに「どんなものが今必要なのか？」もより的を得た、ものになります。

例えば、社員同士で仕事中に LINE を使ってしまっているような状況なら、そういったビジネスツールが本当に必要であることが自分たちで理解できるので、ひとまずチーム単位で ビジネス版 LINE の LINE WORKS を導入してみる、とか、ですね

### 教育にコストを。

ただ、その分、セキュリティインシデントなどに対する教育とこういった取り組みの背景について、何度も社員に行うべきです。

理想としては、社員からボトムアップで案が出て、個人かチーム単位で運用してみて、うまくいけば部門単位でも使いはじめていく流れです。

また、経験上、教育や上の人の考えをメンバーラインに伝える際は、しつこいくらい何度もやらないとメンバーは記憶してないです。

### まとめ

まとめです。

シャドーIT とは、企業側が知らないうちに従業員がビジネスでIT端末・サービス・アプリなどを使ってしまっている状況のこと。

シャドーITが起きている背景

- 【背景 ①】人材不足による情シスのリソース不足
- 【背景 ②】簡単に、すべてがインターネットに繋がる世界になった。
- 【背景 ③】クラウド化したので、ブラウザがあれば何でも出来る


シャドーITに対する向き合い方

- 管理よりも裁量を。
- 集中から分散に。
- 教育にコストを。

以上です。

---

ちなみに、例に上げた、LINE WORKS などのチャットツールを社内に導入していないのでしたら、すぐに入れるべきだと思います。

今の時代に、メールだけで連絡のやりとりしている、というのは、ベンチャーを中心に活動している自分としては信じられないです・・・。