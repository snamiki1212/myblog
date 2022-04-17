---
title: 'Varnish / Fastlyとは'
createdAt: '2018-11-20 17:06'
updatedAt: '2018-11-20 17:06'
category: '技術'
tags:
  - Varnish
  - Fastly
slug: about-varnish-and-fastly
---

# Varnish / Fastly とは

最近、CDN 周りで

- fastly
- varnish

の単語をよく聞くようになったので、概念レベルでもきちんと理解をしておくための学習履歴メモ

## Varnish とは?

> Varnish is an HTTP accelerator designed for content-heavy dynamic web sites as well as APIs
>
> --- <cite>[Varnish (software) - Wikipedia](<https://en.wikipedia.org/wiki/Varnish_(software)>)</cite>

> HTTP accelerator
> A web accelerator is a proxy server that reduces web site access time.
>
> --- <cite>[Web accelerator - Wikipedia](https://en.wikipedia.org/wiki/Web_accelerator)</cite>

> Varnish is a caching HTTP reverse proxy.
>
> --- <cite>[The fundamentals of web proxy caching with Varnish — Varnish version trunk documentation](https://varnish-cache.org/docs/trunk/tutorial/introduction.html)</cite>

まとめると

- 動的大規模コンテンツサイト／API 向けのリバースプロキシサーバ
- モダンなアーキテクチャを持ちつつパフォーマンスが意識された設計
- OSS

## Fastly とは

[Fastly](https://www.fastly.com/)社は普通に説明すると CDN サービスプロバイダーとなるが、「今までの CDN サービスプロバイダーじゃ出来なかったことをやってやる。」ってスタンスが強いみたい。

> Fastly は便宜上 CDN というくくりのサービスということにしていますが、「これまでの CDN ができなかったことをやろう」というのが既存の CDN と発想が大きく異なるところです。
>
> --- <cite>[爆速サイトだけではない！Fastly の中の人に聞く！エッジクラウドとしての Fastly 活用法（前編）](https://cloud.nifty.com/navi/tech/fastly_1.htm)</cite>

だからなのか、wiki も

> Fastly, Inc. is an American cloud computing services provider.
>
> --- <cite>[Varnish (software) - Wikipedia](<https://en.wikipedia.org/wiki/Varnish_(software)>)</cite>

となってる

### 特徴

> インスタント・パージとログのストリーミングができるという点、そして「Varnish」の VCL（Varnish Configuration Language）を使った配信設定のカスタマイズ性の高さですね。この 3 つが最大の特徴だと考えています。
>
> --- <cite>[爆速サイトだけではない！エッジクラウドとしての Fastly 活用法（後編）](https://cloud.nifty.com/navi/tech/fastly_2.htm)</cite>

1. instant purge

   - キャッシュを即時に削除
   - 従来の CDN ではキャッシュ削除に時間を要していたが、マイクロ秒単位で実現可能
   - 従来では動的コンテンツをキャッシュ化してもコンテンツ更新後にキャッシュの更新に時間がかかっていたが、instant purge により、動的コンテンツをキャッシュ化する選択肢が生まれる

2. VCL(Varnish Control Language)

   - 設定を DSL で制御
   - Fastly の根幹基盤にて Varnish を使用
   - VCL を使用することで C 言語ライクの記述で柔軟な設定が可能
     - ただ、細く設定が行える分、深みまで行うと管理が難しいみたい
       > そんな感じで「VCL 最高じゃん」ってなるんですけど、実際の開発はつらくて、なんかもう状態遷移がめちゃくちゃ複雑なんですね。
       > ..フローが難しく..
       > ..変数が限定的にしか使えない..
       > ..リクエストのレスポンスも本体のほうは見ることができなかった..
       > ..for 文がないのでループできない..
       >
       > --- <cite>[CDN を使って表示速度を 2 倍に　日経電子版リニューアルの舞台裏](https://logmi.jp/282375)</cite>

3. Realtime Log Streaming

   - アクセスログを瞬時に取得することができるため、リアルタイムでの傾向分析、障害把握が可能

## まとめ

- Fastly は先進的な機能を数多く有しており技術的優位が高い

- Fastly のコア機能となるのが Varnish 基盤であるが、OSS であるため Fastly のサービスを使わなくても自社でも自分ででも導入できる

  ただ、その分自分達ですべて実装するツラミがある（日経の記事でも大変だった旨が書かれてる）

  どちらにしても、仕事を利用する際は最初から Varnish-cache で自前ですべて作らずに、Fastly のサービスを利用して慣れてきてから移行するほうが良さそう。

  Varnish 自体が OSS ってのもあるけど、Fastly も無料枠があるのでガンガントライできるヨ
