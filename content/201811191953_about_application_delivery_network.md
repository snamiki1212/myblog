---
title: "Application Delivery Network ( ADN ) とは"
cover: "201811191953_cover.png"
date: "2018-11-19 19:53"
category: "Tech"
tags:
    - Tech
slug: about-application-delivery-network
---

# Application Delivery Network ( ADN ) とは

結論：**イマドキな色々機能 ＋ LB ( または cache )**

Netlifyでブログを構築しているのだがハンズオンベースでどうにかブログが運営できるレベル感になってきたあたりでNetlifyで出来ること改めて座学ベースで調べていた際にADNの単語を見つけた。

- [Netlify Application Delivery Network | Netlify](https://www.netlify.com/features/adn/)

日本語ぐぐっても「ADNとは？」に対するよい答えが何もなかったので、自分のためのメモ兼、他にも調べた人の為に記事として残しておく。

## 何はともあれ「ADNとは？」で日本語で検索

とりあえず日本語で調べてもこれくらいしか記事がなかった。

- [アプリケーション・デリバリー・ネットワーク | アカマイ](https://www.akamai.com/jp/ja/resources/application-delivery-network.jsp)
- [「ADNでアプリケーションとネットワークの距離を縮めていく」－米F5上級副社長](https://cloud.watch.impress.co.jp/epw/cda/topic/2007/12/07/11808.html)

akamaiの記事でわかりそうなのだが一般用語とakamaiのプロダクト用語と混合しそう。なので、この記事は参考までにやはり世界のwikipedia先生に聞くことにした。

## wikipedia「ADNとはな...」

> Gartner defines application delivery networking as the combination of WAN optimization controllers (WOCs) and application delivery controllers (ADCs).
> 
> --- <cite>[Application delivery network - Wikipedia](https://en.wikipedia.org/wiki/Application_delivery_network)</cite>

ということで

- ADN = WOCs + ADCs

ということがわかった。

次はこれらについて調べる

## Application Delivery Controllers ( ADCs )とは

結論：「ロードバランサー ( LB ) 」＋「色々な今どき機能」＝「ADCs」

> 負荷分散を役割とする「ロードバランサ（負荷分散装置）」は、時代の求めに応じて高速化機能やセキュリティ機能を実装するようになりました。
> 
> その名前も「L7スイッチ」「アプリケーションスイッチ」と代わり、現在ではアプリケーションデリバリコントローラ（ADC）と呼ばれています。
> 
> WAN高速化、SSLアクセラレータ、L7スイッチ、WAFなど幅広い機能を提供。
> 
> --- <cite>[アプリケーションデリバリコントローラの進化｜ITトレンド](https://it-trend.jp/adc/article/explain)</cite>

> ADCの主な機能
> 
>  機能１．ロードバランサ
> 
>  機能２．キャッシュサーバ
> 
>  機能３．WAN高速化
> 
>  機能４．SSLアクセラレータ
> 
>  機能５．L7スイッチ
> 
>  機能６．WAF
>
> --- <cite>[アプリケーションデリバリコントローラ選択の基礎｜ITトレンド](https://it-trend.jp/adc/article/choice)</cite>

ここのサイトがすごいわかりやすかったので説明することが特にないので、このサイト参照、とだけ言っておく。

また、おそらくWAN Optimization Controller ( WoCs ) とはWANの高速化を行うハード／ソフトの部分のことだろう。

というわけで、これでADNの概要はわかった。

## NetlifyにおけるADNは？

上のことからADNはLB＋色々機能ということがわかったが、おそらく後者の「色々機能」はどんどん増えていくだろうし、サービスによって違うであろうからせっかくなので今時点のNetlifyの分もある程度見てみた。

NetlifyのADNの説明ページがあったので見たがどうやらCDNとの比較表がある。

![Netlify vs Standard CDN](201811191953_1.png)

上の解説サイトを見てADNはLBからの派生と考えていたが、Netlify的にはCDNからの派生として捉えている、またはユーザには比較がしやすいだろう、と考えているようである。

ここで一つ一つの機能について言及はしないが、他にもCI/CSがbuilt-inで提供されていたりと、CDNに対して更に＋αな機能が載ったサービスと捉えると概要としてはわかりやすいのかと思う。

## まとめ

- 用語
  - ADN: Application Delivery Network
  - ADCs: Application Delivery Controllers
  - WoCs: WAN optimization Controllers
  - LB: Load Balancer
  - CDN: Content Delivery Network
- ADN とは、WoCs + ADCs を複合したもの
  - ADCs とは、LB＋イマドキ機能群 のこと
  - WoCs とは、WANの高速化技術のこと
- NetlifyはADNクラウドサービスの１つ
  - CDNベースにイマドキ機能が色々あるサービス
