---
title: "Varnish / Fastlyとは"
cover: "201811201706_cover.jpg"
date: "2018-11-20 17:06"
category: "Tech"
tags:
    - Tech
    - Study
slug: about-varnish-and-fastly
---

# Varnish / Fastlyとは

最近、CDN周りで

- fastly
- varnish

の単語をよく聞くようになったので、概念レベルでもきちんと理解をしておくための学習履歴メモ

## Varnishとは?

> Varnish is an HTTP accelerator designed for content-heavy dynamic web sites as well as APIs
>
> --- <cite>[Varnish (software) - Wikipedia](https://en.wikipedia.org/wiki/Varnish_(software))</cite>


> HTTP accelerator
> A web accelerator is a proxy server that reduces web site access time.
>
> --- <cite>[Web accelerator - Wikipedia](https://en.wikipedia.org/wiki/Web_accelerator)</cite>

> Varnish is a caching HTTP reverse proxy. 
>
> --- <cite>[The fundamentals of web proxy caching with Varnish — Varnish version trunk documentation](https://varnish-cache.org/docs/trunk/tutorial/introduction.html)</cite>

まとめると
  - 動的大規模コンテンツサイト／API向けのリバースプロキシサーバ
  - モダンなアーキテクチャを持ちつつパフォーマンスが意識された設計
  - OSS

## Fastlyとは

[Fastly](https://www.fastly.com/)社は普通に説明するとCDNサービスプロバイダーとなるが、「今までのCDNサービスプロバイダーじゃ出来なかったことをやってやる。」ってスタンスが強いみたい。

> Fastlyは便宜上CDNというくくりのサービスということにしていますが、「これまでのCDNができなかったことをやろう」というのが既存のCDNと発想が大きく異なるところです。
>
> --- <cite>[爆速サイトだけではない！Fastlyの中の人に聞く！エッジクラウドとしてのFastly活用法（前編）](https://cloud.nifty.com/navi/tech/fastly_1.htm)</cite>

だからなのか、wikiも

> Fastly, Inc. is an American cloud computing services provider.
>
> --- <cite>[Varnish (software) - Wikipedia](https://en.wikipedia.org/wiki/Varnish_(software))</cite>

となってる

### 特徴

> インスタント・パージとログのストリーミングができるという点、そして「Varnish」のVCL（Varnish Configuration Language）を使った配信設定のカスタマイズ性の高さですね。この3つが最大の特徴だと考えています。
>
> --- <cite>[爆速サイトだけではない！エッジクラウドとしてのFastly活用法（後編）](https://cloud.nifty.com/navi/tech/fastly_2.htm)</cite>

1. instant purge
    
    - キャッシュを即時に削除
    - 従来のCDNではキャッシュ削除に時間を要していたが、マイクロ秒単位で実現可能
    - 従来では動的コンテンツをキャッシュ化してもコンテンツ更新後にキャッシュの更新に時間がかかっていたが、instant purgeにより、動的コンテンツをキャッシュ化する選択肢が生まれる

2. VCL(Varnish Control Language)
    
    - 設定をDSLで制御
    - Fastlyの根幹基盤にてVarnishを使用
    - VCLを使用することでC言語ライクの記述で柔軟な設定が可能
      - ただ、細く設定が行える分、深みまで行うと管理が難しいみたい
        > そんな感じで「VCL最高じゃん」ってなるんですけど、実際の開発はつらくて、なんかもう状態遷移がめちゃくちゃ複雑なんですね。
        > ..フローが難しく..
        > ..変数が限定的にしか使えない..
        > ..リクエストのレスポンスも本体のほうは見ることができなかった..
        > ..for文がないのでループできない..
        > 
        > --- <cite>[CDNを使って表示速度を2倍に　日経電子版リニューアルの舞台裏](https://logmi.jp/282375)</cite>

3. Realtime Log Streaming

   - アクセスログを瞬時に取得することができるため、リアルタイムでの傾向分析、障害把握が可能

## まとめ
- Fastlyは先進的な機能を数多く有しており技術的優位が高い

- Fastlyのコア機能となるのがVarnish基盤であるが、OSSであるためFastlyのサービスを使わなくても自社でも自分ででも導入できる

  ただ、その分自分達ですべて実装するツラミがある（日経の記事でも大変だった旨が書かれてる）
  
  どちらにしても、仕事を利用する際は最初からVarnish-cacheで自前ですべて作らずに、Fastlyのサービスを利用して慣れてきてから移行するほうが良さそう。
  
  Varnish自体がOSSってのもあるけど、Fastlyも無料枠があるのでガンガントライできるヨ
