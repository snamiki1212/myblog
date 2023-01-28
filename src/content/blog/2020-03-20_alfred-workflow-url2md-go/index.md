---
layout: /src/layouts/PostLayout.astro
title: "URLからMarkdownへ変換するAlfredWorkflowをGoで作って公開した"
createdAt: "2020-03-20 20:00"
updatedAt: "2021-10-17 20:00"
category: "技術"
tags:
  - golang
  - Alfred
slug: alfred-workflow-url2md-go
word:
  - nothing
---

<!-- cover -->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580489031/in/dateposted-public/" title="2020-03-20_0000_alfred-workflow-url2md-go__cover"><img src="https://live.staticflickr.com/65535/52580489031_7235af163b.jpg" width="500" height="280" alt="2020-03-20_0000_alfred-workflow-url2md-go__cover"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<!-- //cover -->

# URL から Markdown へ変換する AlfredWorkflow を Go で作って公開した

こんにちは Nash です。この記事は**「URL2MD という AlfredWorkflow を go で作って公開するまでの流れについての記事」**になります。

- コード：[GitHub - snamiki1212/alfred-url2md: Alfredworkflow: Convert URL to markdown link (go-lang)](https://github.com/snamiki1212/alfred-url2md-golang)
- Download 置き場：[Releases · snamiki1212/alfred-url2md · GitHub](https://github.com/snamiki1212/alfred-url2md-golang/releases)

では、見ていきます。

## なんで作った？

そもそも Alfred の Workflow として「Ruby 製の URL からマークダウンリンクへのコンバーター」というものを手元で使っていました。

入力と出力は下記みたいな感じですね。

```shell
# input
https://www.alfredapp.com/

# output
[Alfred - Productivity App for macOS](https://www.alfredapp.com/)
```

ただ、下記について色々思うところがあってので、自作しました。

- ruby 製の markdown を使ってたけどたまにバグる
- Alfred で Workflow をきちんと作ってみたかった
- Go でなんか作ってみたい（その場の思いつき）

という感じで、Go 製のクローンな Alfred workflow を作っていきます。

## AlfredWorkflow を Go で作る

だいたい下記の流れで作ります。

- Go でスクリプトを書く
- Go のスクリプトを使いながら、Alfred の Worlflow を作る

Alfred Worlflow をなんとなく先に作ってから Go でスクリプトを作りましたが、わかりやすさ重視で go→Alfred で記事は書いていきます。

### Go：環境構築〜HelloWorld

go をグローバルインストールしていくが、パッケージマネージャー経由で入れることにします。

- [GitHub - moovweb/gvm: Go Version Manager](https://github.com/moovweb/gvm)

installation の通り進めて、go の version は stable の 1.14 にしてインスコし、無事 hello world まで完了。そういえば go ってコンパイル言語だったな、とここで思い出す。

コンパイルすれば go のツールチェーンが入ってない環境でも実行可能みたいなのでローカルで環境を作らないでもよかったや。

### GO：基本構文の理解

基本的な構文を理解するために REPL を入れる。

- [GitHub - motemen/gore: Yet another Go REPL that works nicely. Featured with line editing, code completion, and more.](https://github.com/motemen/gore)

- [みん Go 学習メモ〜コード補完もできる REPL「gore」を使ってみた - Qiita](https://qiita.com/Ken2mer/items/94301d04d65c82088c60)

パッケージをグローバルに入れる場合はプレフィックスで`GO111MODULE=on`が必要な慣習をを知らないのでハマった。というか、なんだこれ。言語若いのに負債できるの早すぎでは？とか思いをはせている間に REPL の DL が完了した。

構文はなんとなくで OK だったので公式 Doc じゃなくて Qiita の記事を適当に斜め読みしながら REPL で手を動かして「完全に理解した」状態になる。

- [Go 言語：文法基礎まとめ - Qiita](https://qiita.com/HiromuMasuda0228/items/65b9a593275f769f6b69)

### GO：スクリプトを作る

ようやく本題のスクリプトを作る。下記参照、というかほぼ回答なのでコピペエンジニアにならないようにコードの動きはきちんと理解しながらコピペしていく。

- [Go で http リクエストを送信する方法 - Qiita](https://qiita.com/taizo/items/c397dbfed7215969b0a5)
- [[Golang] Get HTML Title via net/html Package](https://siongui.github.io/2016/05/10/go-get-html-title-via-net-html/)

- [golang の関数をまとめてみた。 - Qiita](https://qiita.com/pei0804/items/dd8acfba3dfe32530717#%E9%81%85%E5%BB%B6%E9%96%A2%E6%95%B0%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%97)

go を書くのが初めてなのもあり、コピペがメインのスクリプトでも地味にはまりながらもスクリプトが完成。これをビルドしておき後述の Alfred Workflow の途中で実行していく。

ここまでは Go についてで、ここからは Alfred について。

### Alfred：基礎知識

Alfred Worlflow について、なんとなく理解するためにまずは手元で適当にプロジェクトを作って動かしてみた。なんとなくで出来ることはわかったので、詳細は公式 Doc とわかりやすそうな記事があったのでここを読んで Workflow で出来ることは一通り「完全に理解した」状態になる。

- [Guides and Tutorials - Alfred Help and Support](https://www.alfredapp.com/help/guides-and-tutorials/)

- [Alfred 4 での Workflow の作り方と Workflow Object のまとめ | Webrandum](https://webrandum.net/alfred4-how-to-create-workflow/)

思ったよりも GUI プログラミングで出来ることが多い。NoCode で Alfred のみで今度はなにか作ろうかな。

### Alfred：Workflow を作成

こんな感じで Workflow を作成する。

<!-- img1 -->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580024802/in/dateposted-public/" title="2020-03-20_0000_alfred-workflow-url2md-go__1"><img src="https://live.staticflickr.com/65535/52580024802_cd19679d39.jpg" width="500" height="342" alt="2020-03-20_0000_alfred-workflow-url2md-go__1"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<!-- //img1 -->

workflow 側でエラー時のハンドリングを行ってみた。本当は、panic 系のエラー発生時は Github に Issue まで投げさせたいなー。

とにかくこれで Alfred Workflow 自体は完了して無事にローカルでも実行できるようになった。

### Alfred：Workflow を公開

作った Workflow を公開していく。Alfred の Workflow の実態はただの`xxx.plist`ファイルみたい。これと＋ α のファイル群、例えば go のコンパイルファイルやロゴファイルの png などをまとめれば OK。

ただ、公開にあたって下記２つについて考える。

- コード管理
- AlfredWorkflow の DL 置き場

幸い、すでに先駆者もいて、この記事のやり方が良さそうなのでそのまんま踏襲した。

- [ワークフローを GitHub で公開する #alfred - < /gecko >](https://geckotang.tumblr.com/post/104996742061/%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%95%E3%83%AD%E3%83%BC%E3%82%92github%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B-alfred)

この方法では、下記の通りとなる。

- コード管理＝ Github
- DL 置き場＝ Github の Release 機能

### Alfred：完了

というわけで無事に Alfred の Workflow 公開まで完了した。

- コード：[GitHub - snamiki1212/alfred-url2md: Alfredworkflow: Convert URL to markdown link (go-lang)](https://github.com/snamiki1212/alfred-url2md-golang)
- DL 置き場：[Releases · snamiki1212/alfred-url2md · GitHub](https://github.com/snamiki1212/alfred-url2md-golang/releases)

本来なら Packal という AlfredWorkflow の Hub にも自作したものを登録していくんだろうけど、ただのクローン Workflow なのでそこまではやらないで良いかなー、という気持ち。

### まとめ

URL2MD という Alfred Workflow を go で作った話でした。

ひとまず Alfred Workflow の作り方は理解できたので、今後のエンジニアライフにおいて下記の選択肢を持てるようになったのはよかったです。

- 複雑な AlfredWorkflow でも簡単に作れそう
- そもそも NoCode な Workflow でもかなり色々できそう

この記事がどなたかの助けになれば幸いです。
