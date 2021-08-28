---
title: '【書評】「Elasticsearch 実践ガイド」'
cover: 'cover.png'
createdAt: '2020-04-26 02:00'
updatedAt: '2020-10-17 22:00'
category: '書評'
tags:
  - Elasticsearch
  - 書評
  - レビュー
slug: elasticsearch-guide-book
word:
  - nothing
---

# 【書評】「Elasticsearch 実践ガイド」

こんにちは。Elasticsearch を使った経験がない中、Elasticsearch の導入・設計の仕事が出てきた Nash です。

この記事は**「『Elasticsearch 実践ガイド』を読んだ内容の概要まとめ・レビュー」の記事**です

結論は、**Elasticsearch についてネット記事を読むくらいなら、１日くらい使ってこの本をざっと読んだほうが良いです**。

<!-- アフィリエイト -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB07DN87LQV" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/51D+VfIF6rL._SL160_.jpg" alt="" style="border: none;" /><br />Elasticsearch 実践ガイド impress top gear シリーズ</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>

<!-- // アフィリエイト -->

では、見ていきます。

## 背景

Elasticsearch を使った経験がなかったんですが導入・設計の仕事が出てきました。

学習のために、それなりに時間使って様々なネット記事を読んでみたが下記の理由で本を読むことにしました。

- ネット記事だと古い情報が多い。
- ネット記事だと歴史的背景・体系的な説明がない。

特に「ネット記事だと情報が古い」はかなり危ないので注意です。設計のやり方についての記事にて「Type を使った設計」がかなり多いのですが、バージョン 8 では Type の概念が完全になくなるので。。。

### おすすめ読者

個人的には、下記のような人におすすめできます。

- これから Elasticsearch を使う人
- すでに動いている Elasticsarch をなんとなく使ってる人

レビューを含めながら理由なども説明していきますね。

## Elasticsearch 実践ガイドのレビュー

### だいたい１日で読める

本を読んだ時間だが、約１日で読めました。このメモ書きをしながら、ハンズオンで手を動かしながらで、たまに休憩していたので、頑張ればもっと早く終わるかもですが。

まとまった時間が少し必要ですけど、やはり学習効率はネット記事よりもかなり高いです。

下手にネット記事を五月雨に読むよりも、この本を読むことを強くおすすめです。自分もそれで失敗したので。。。

### 体系的にまとまってる

歴史的背景・内部構造にも触れながら説明してくれます。

Elasticsearch の技術自体が若いこともあり、ネット記事だと体系的にわかりやすく情報がまとまってる箇所が少ないので、やはり本は良いですね。

### バージョンが最新ではない

2020/4/26 時点でこの本は 6.x 系ですが、最新は 7.x 系です。

なので、バージョンが最新に追従しきれてないです。とはいえ、致命的なレベルで古くはないので、問題ないかと思います。

一部の API は自分で調べて書き直さないと Deprecated の Warning が出たりしたのですが、そこまで大変ではないです。

### わかりやすい

スラスラ読むことが出来ました。

- 「説明が足らない」
- 「説明順序がおかしい」
- 「言っている意味がわからない」

みたいなことがなかったです。

**「日本語の表現や説明の順序を気にしてるなー」と感じる箇所が多くて、かなりわかりやすいです。著者に感謝。**

### 実運用を想定した解説

実際に仕事で使うときに注意すべき設計や運用内容についても解説されてます。具体的には下記のようなこと。

- クラスター設定
- ノード起動停止時の手順
- インデック作成時のシャーディング

今回は、Elasticsearch を初めて導入するケースだったのでかなりためになりました。すでに運用中のケースだとしても「今、動いているシステムがベストプラクティスに沿っている？」の確認も踏まえて一読するのは良いかと思います。

<!-- アフィリエイト -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB07DN87LQV" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/51D+VfIF6rL._SL160_.jpg" alt="" style="border: none;" /><br />Elasticsearch 実践ガイド impress top gear シリーズ</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>

<!-- // アフィリエイト -->

以上です。これだけの内容を０ベースから１日で理解できるので助かりました。

気になる人はどうぞ。
