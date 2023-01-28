---
layout: /src/layouts/PostLayout.astro
title: "Application Delivery Network ( ADN ) とは"
createdAt: "2018-11-19 19:53"
updatedAt: "2018-11-19 19:53"
category: "技術"
tags:
  - ADN
slug: about-application-delivery-network
---

# Application Delivery Network ( ADN ) とは

結論：**イマドキな色々機能 ＋ LB ( または cache )**

Netlify でブログを構築しているのだがハンズオンベースでどうにかブログが運営できるレベル感になってきたあたりで Netlify で出来ること改めて座学ベースで調べていた際に ADN の単語を見つけた。

- [Netlify Application Delivery Network | Netlify](https://www.netlify.com/features/adn/)

日本語ぐぐっても「ADN とは？」に対するよい答えが何もなかったので、自分のためのメモ兼、他にも調べた人の為に記事として残しておく。

## 何はともあれ「ADN とは？」で日本語で検索

とりあえず日本語で調べてもこれくらいしか記事がなかった。

- [アプリケーション・デリバリー・ネットワーク | アカマイ](https://www.akamai.com/jp/ja/resources/application-delivery-network.jsp)
- [「ADN でアプリケーションとネットワークの距離を縮めていく」－米 F5 上級副社長](https://cloud.watch.impress.co.jp/epw/cda/topic/2007/12/07/11808.html)

akamai の記事でわかりそうなのだが一般用語と akamai のプロダクト用語と混合しそう。なので、この記事は参考までにやはり世界の wikipedia 先生に聞くことにした。

## wikipedia「ADN とはな...」

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
> その名前も「L7 スイッチ」「アプリケーションスイッチ」と代わり、現在ではアプリケーションデリバリコントローラ（ADC）と呼ばれています。
>
> WAN 高速化、SSL アクセラレータ、L7 スイッチ、WAF など幅広い機能を提供。
>
> --- <cite>[アプリケーションデリバリコントローラの進化｜ IT トレンド](https://it-trend.jp/adc/article/explain)</cite>

> ADC の主な機能
>
> 機能１．ロードバランサ
>
> 機能２．キャッシュサーバ
>
> 機能３．WAN 高速化
>
> 機能４．SSL アクセラレータ
>
> 機能５．L7 スイッチ
>
> 機能６．WAF
>
> --- <cite>[アプリケーションデリバリコントローラ選択の基礎｜ IT トレンド](https://it-trend.jp/adc/article/choice)</cite>

ここのサイトがすごいわかりやすかったので説明することが特にないので、このサイト参照、とだけ言っておく。

また、おそらく WAN Optimization Controller ( WoCs ) とは WAN の高速化を行うハード／ソフトの部分のことだろう。

というわけで、これで ADN の概要はわかった。

## Netlify における ADN は？

上のことから ADN は LB ＋色々機能ということがわかったが、おそらく後者の「色々機能」はどんどん増えていくだろうし、サービスによって違うであろうからせっかくなので今時点の Netlify の分もある程度見てみた。

Netlify の ADN の説明ページがあったので見たがどうやら CDN との比較表がある。

<!-- img1 -->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52582702263/in/dateposted-public/" title="2018-11-19_1953_about-application-delivery-network__1"><img src="https://live.staticflickr.com/65535/52582702263_ebdcfb2d75.jpg" width="500" height="289" alt="2018-11-19_1953_about-application-delivery-network__1"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<!-- /img1 -->

上の解説サイトを見て ADN は LB からの派生と考えていたが、Netlify 的には CDN からの派生として捉えている、またはユーザには比較がしやすいだろう、と考えているようである。

ここで一つ一つの機能について言及はしないが、他にも CI/CS が built-in で提供されていたりと、CDN に対して更に＋ α な機能が載ったサービスと捉えると概要としてはわかりやすいのかと思う。

## まとめ

- 用語
  - ADN: Application Delivery Network
  - ADCs: Application Delivery Controllers
  - WoCs: WAN optimization Controllers
  - LB: Load Balancer
  - CDN: Content Delivery Network
- ADN とは、WoCs + ADCs を複合したもの
  - ADCs とは、LB ＋イマドキ機能群 のこと
  - WoCs とは、WAN の高速化技術のこと
- Netlify は ADN クラウドサービスの１つ
  - CDN ベースにイマドキ機能が色々あるサービス
