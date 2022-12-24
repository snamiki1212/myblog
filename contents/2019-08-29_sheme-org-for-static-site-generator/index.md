---
title: '静的サイトジェネレータで構造化データマークアップを入れた知見【GatsbyJS】'
createdAt: '2019-08-29 00:00'
updatedAt: '2019-08-29 00:00'
category: '技術'
tags:
  - Gatsby
slug: sheme-org-for-static-site-generator
---

# 静的サイトジェネレータで構造化データマークアップを入れた知見【GatsbyJS】

こんにちは Nash です。GatsbyJS でブログを構築しています。

この記事は「**静的サイトジェネレータ(GatsbyJS)で構造化データマークアップを作り込むにあたってやり方・ハマったポイント**」の記事です。

結論を箇条書きにしていきます。

- 構造化データマークアップって？
  - ← 　 Web ページのメタ情報。Google のクローラに詳細を教えるために必要。
- どう表現するの？
  - ←JSON 形式でページに埋め込んでおくのがベター。Person みたいに繰り返し使うようなものは Entity が決められている。
- どう作っていくのが良い？
  - ← Google のツール・ドキュメントで Try＆Error が確実。
- 作る際の効率化
  - ← ローカルで開発して Ngrok 経由で Public に開放してツールで確認。

では見ていきます。

## 構造化データマークアップについて

### 構造化データマークアップとは？

Web ページに対するメタ情報のことで、Google の検索クローリングの精度をあげるのが目的。

例えば、ある Web ページが「ブログの記事」だとして「サムネイル画像」を構造化データマークアップで明示して URL を記載してあげると、クローラーがそのデータを「サムネイル画像」だと認識してくれる。場合によっては、検索結果に画像つきで出してくれたりする。

2019 年の現時点では、SEO の順位に直接的な影響はないが、今後影響がある旨がアナウンスされている。ただ、現時点でも、構造化データマークアップを入れると Google 検索結果に上記のように反映されるので、SEO 的には有利になるケースが多い。

### 構造化マークアップのデータ構造は？

JSON+LD という構造が推奨なので、素直にそれに従うのが良いし、データも JSON になるので、静的サイトジェネレータなどでも取り扱いやすい。

- 詳細はこちら：[Qiita - Google 推奨「JSON-LD」で構造化マークアップ](https://qiita.com/narumana/items/b66969b80cce848b2ddf)

## 構造化データマークアップ＋静的サイトジェネレータで実装

### 実装の流れ

「テストツールに値を入れる」→「Error・Wraning を潰しこむ」のサイクルが一番良かったです。

むしろドキュメント見てたらハマりました。

- [GoogleStructuredDataTestingTool](https://search.google.com/structured-data/testing-tool/u/0/)
- [Google のドキュメント](https://developers.google.com/search/docs/guides/search-gallery)
- [Scheme.org のドキュメント](https://schema.org/)（「参考程度に見る」を推奨。理由後述。）

### ハマリポイント：Scheme.org と Google のドキュメントでズレ

- Scheme.org のドキュメント
- Google のドキュメント＋テストツール

で、でズレがあったため、ハマりました。

なので、ドキュメントドリブンで開発しないほうが良かったです。

- Scheme.org のドキュメント

  - <a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580956880/in/dateposted-public/" title="2019-08-29_0000_sheme-org-for-static-site-generator__explain-1"><img src="https://live.staticflickr.com/65535/52580956880_8573eae238.jpg" width="500" height="48" alt="2019-08-29_0000_sheme-org-for-static-site-generator__explain-1"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
  - ドキュメント「BlogPosting のプロパティの publisher には Person か Organization を入れてね！」
  - じぶん「ふむふむ。Person を入れるか。」

- Google Structure Date Testing Tool

  - <a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52581039118/in/dateposted-public/" title="2019-08-29_0000_sheme-org-for-static-site-generator__explain-2"><img src="https://live.staticflickr.com/65535/52581039118_031f1bb2df.jpg" width="500" height="258" alt="2019-08-29_0000_sheme-org-for-static-site-generator__explain-2"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
  - ツール「publisher に Person の型？そんなやつは知らん」
  - じぶん「え？」

- Google のドキュメント
  - <a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580956825/in/dateposted-public/" title="2019-08-29_0000_sheme-org-for-static-site-generator__explain-3"><img src="https://live.staticflickr.com/65535/52580956825_e2dcbb052f.jpg" width="500" height="63" alt="2019-08-29_0000_sheme-org-for-static-site-generator__explain-3"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
  - ドキュメント「Article は Scheme.org の BlogPosting とかを参考にしろ。だが、Publisher は Organization だけな。」
  - じぶん「なんでや」

完全に互換性があるわけではない？みたいなので、Scheme.org のドキュメントは参考程度に、「テストツールに値を入れる」→「Error・Wraning を潰しこむ」のサイクルが最終的に一番良かったです。

---

ですが、テストツールはパブリックな URL にしか有効ではありません。
「ローカルで修正」→「デプロイ」を何度も行うのは手間なので、Ngrok を使いました。

### 開発ポイント：Ngrok 使う

Ngrok はローカルの TCP ネットワークを Ngrok が提供してくれるドメイン経由でパブリックに開放してくれます。

- Ngrok とは？→ [Qiita - ngrok が便利すぎる](https://qiita.com/mininobu/items/b45dbc70faedf30f484e)
- Ngrok ＋ GoogleStructureDataTestingTool：[How to test localhost website with Google SEO tools](https://www.aymen-loukil.com/en/blog-en/how-to-test-localhost-website-with-google-seo-tools/)

これで、ローカルで開発した結果を Tool に流し込んで確認できます。

### 終わりに

普段は Web アプリケーションが中心なので、構造化データマークアップなど SEO 寄りの知識が全然なかったので、概要知識から手に入れるところから始めたので思ったよりも時間がかかってしまいました。

WordPress などなら、ここらへんもテーマがよしなにやってくれるので（たぶん）、GatsbyJS などでオレオレで作るとすべて自分作る必要があるので、勉強になりますね。
