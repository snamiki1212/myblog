---
title: '【レビュー】『Elasticsearch 実践ガイド』のまとめ【１日で読める】'
cover: 'cover.png'
createdAt: '2020-04-26 02:00'
updatedAt: '2020-04-26 02:00'
category: 'Tech'
tags:
  - Tech
  - Elasticsearch
  - 書評
slug: elasticsearch-guide-book
word:
  - nothing
---

# 【レビュー】『Elasticsearch 実践ガイド』のまとめ【１日で読める】

こんにちは。Elasticsearch を使った経験がない中、Elasticsearch の導入・設計の仕事が出てきた Nash です。

この記事は「『Elasticsearch 実践ガイド』を読んだ内容の概要まとめ・レビュー」の記事です

結論は、**時間かけてネット記事を読むくらいなら１日で読めるこの本を読んだほうが良いです**。

<!-- アフィリエイト -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:90px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4295003913%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51YGeSqhovL._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4295003913%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">Elasticsearch実践ガイド (impress top gear)</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,080<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/4/26 21:49時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!-- // アフィリエイト -->

では、見ていきます。

## 背景

Elasticsearch を使った経験がなかったんですが、導入・設計の仕事が出てきました。

学習のために、それなりに時間使って様々なネット記事を読んでみたが下記の理由で本を読むことにしました。

- ネット記事だと古い情報が多い。
- ネット記事だと歴史的背景・体系的な説明がない。

特に「ネット記事だと情報が古い」はかなり危ないので注意です。設計のやり方についての記事にて「Type を使った設計」がかなり多いのですが、バージョン 8 では Type の概念が完全になくなるので。。。

## Elasticsearch 実践ガイドのレビュー

### だいたい１日で読める

本を読んだ時間だが、約１日で読めました。このメモ書きをしながら、ハンズオンで手を動かしながらで、たまに休憩していたので、頑張ればもっと早く終わるかもですが。

まとまった時間が少し必要ですけど、やはり学習効率はネット記事よりもかなり高いです。

下手にネット記事を五月雨に読むよりも、この本を読むことを強くおすすめです。自分もそれで失敗したので。。。

### 体系的にまとまってる

歴史的背景・内部構造にも触れながら説明してくれます。

Elasticsearch の技術自体が若いこともあり、ネット記事だと体系的にわかりやすく情報がまとまってる箇所が少ないので、やはり本は良いですね。

### バージョンが最新ではない

2020/4/26時点でこの本は6.x系ですが、最新は7.x系です。

なので、バージョンが最新に追従しきれてないです。とはいえ、致命的なレベルで古くはないので、問題ないかと思います。

一部の API は自分で調べて書き直さないと Deprecated の Warning が出たりしたのですが、そこまで大変ではないです。

### わかりやすい

スラスラ読むことが出来ました。
- 「説明が足らない」
- 「説明順序がおかしい」
- 「言っている意味がわからない」

みたいなことがなかったです。

「日本語の表現や、説明の順序を気にしてるなー」と思うような箇所が多く見られたので、わかりやすいです。著者に感謝。

### 実運用を想定した解説

実運用でも、注意すべき設計・運用内容についても実践レベルで解説されてます。具体的には下記のようなこと。

- クラスター設定
- ノード起動停止時の手順
- インデック作成時のシャーディング
- など

今回は、Elasticsearch を初めて導入するケースだったので特にためになりました。すでに運用中のケースだとしても既存のシステムがベストプラクティスに沿っているかの確認も踏まえて一読するのは良いかと思います。

---

というわけで、おすすめなので気になる人はどうぞ。

<!-- アフィリエイト -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:90px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4295003913%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51YGeSqhovL._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4295003913%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">Elasticsearch実践ガイド (impress top gear)</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,080<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/4/26 21:49時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!-- // アフィリエイト -->

また、各章ごとに内容をメモとしてまとめておきました。以降はその内容になります。

## 第 1 章 Elasticsearch とは

### Elasticsearch

全文検索システム。2010 年という後発なので、モダンな設計・思想を持つのが強み。

### 全文検索

全文検索とは、文章の中から特定の文言を検索する仕組みのこと。

全文検索の方法は大きく２つある。Elasticsearch では索引型検索を用いている。

例）あるキーワードで本の内容を検索。

- １）逐次検索：頭から最後まで順番にキーワードと本の文章と突き合わせる。

- ２）索引型検索：事前に本の内容を「単語」の単位に分割しておくことで、検索時にキーワードと単語を使って検索する方法。分割した単語にはメタ情報にて「何ページの何行」などが紐付けている。このデータのことを転置インデックスと呼ぶ。
- ２つの検索の比較：逐次検索はすべての文章に総当りで検索するため検索速度が遅い。索引型検索ではインデックスを作成しておくコストがあるものの、検索速度は格段に早い。

### Elasticsearch の特徴

- シャード・レプリカの自動生成・分散化

- REST API での操作が可能

- JSON ファースト（ドキュメント指向）

- ログ収集・表示ソフトウェアとの親和性

### Elasticsearch が利用されるユースケース例

- 全文検索
- ログ収集（アクセスログや、分散システムのログなど）
- IoT データ収集

## 第 2 章 Elasticsearch の基礎

### 構成

構成概要は、論理と物理の２つの切り口で下記の通りとなる。

- 論理
  - Index > Document > Field
  - Table > Row >Column と大体同じだと考えるとわかりやすい。
- 物理
  - Cluster > Node > Shared / Replica
  - インフラ的に分散サーバーの構成のこと。

### フィールド（Field）

RDS でいうところのカラム。JSON オブジェクトにおける Key/Value のこと。

### ドキュメント（Document)

RDS でいうところのレコード。JSON オブジェクトの形のデータのこと。

ドキュメントは、複数のフィールドを持つ。

### インデックス（Index）

RDS でいうところのテーブル。ドキュメントの保存場所。

インデックスは、複数のドキュメントを持つ。

また分散処理の観点から、**インデックスは複数のシャードに分割して持たれる。**

### シャード(Shard)

シャードは、複数のインデックスを保持する。RDS で言うところのシャーディングと同じ考え。

- **シャードの数は動的に変更不可**でインデックスの再作成が必要なので設計時に要注意。少し多めに見積もっておく。

- シャード数を上げれば、インデックス作成の負荷分散ができ、Replica も増えるので検索の負荷分散にもなる

### レプリカ（Replica）

シャードに対するコピー。１つのシャードに対して複数個のレプリカを同一・別のノードに作成できる。基本的には、シャードとは別ノードにレプリカを置くことで可用性を上げる。

- レプリカの数は動的に変更可能。

- レプリカ数を上げれば、検索の負荷部分散ができる

### ノード（Node）

ノードは、複数のシャード・レプリカを持つ。大別して 4 種の役割の Node がある。

- １）Master：Cluster の管理を行う。１つの Cluster に必ず１つ必要。
- ２）Data：Index を持ちクエリ管理を行う。複数の Node にあるそれぞれの Index に対して Read/Write の指示の Routing とその結果のまとめ、などを担う。
- ３）Ingest：Read/Write 前にデータ整形を行う。Ingest の後に Data ノードへ Routing される。
- ４）Coordinating：クエリ管理のための Routing「のみ」を行う。Data と違って、Index を持たない。

### クラスター（Cluster）

クラスターは、複数のノードを持つ。

### Split-Brain

１つの Cluster がなにかしらの障害などで分割したときに、２つの Cluster にて２つの Master が同時にできてしまう事象。理想は２つのクラスターでも、１つの Master であってほしい。

防止策として下記の２つを設定する

- １）過半数の Node がある Cluster にのみ Master への昇格権利を与えるようにする。

- ２）Node 数は 3 以上の奇数にする。偶数だと多数決が機能しないので。

### REST API: URI 設計

Elasticsearch へのクエリ発行は REST API 経由で行える。

- `https://localhost:9999/<インデックス名>/_doc/<ドキュメントID>`
- 本では上記 URI の\_type が＜ドキュメント名＞になってるけど、7 系ではすでに Deprecated で固定で\_doc を当てはめる

- これに加えて GET/POST/PUT/DELETE/HEAD メソッドを使う

### Elasticseasrch をローカルで動かす手順

- ここについてはネット記事などを参考にしたほうが良いと思う.

- [Running the Elastic Stack on Docker | Getting Started [7.6] | Elastic](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-docker.html)

- 注意点として起動に割と時間がかかるのと、Log を見ても起動中なのか死んでるのかが、わかりにくい点。該当の port にアクセスしても表示されなくて、docker-compsoe を無駄に何度も restart をさせたけど単純に早すぎたのでもう少し待てばよかっただけだった。

## 第 3 章 ドキュメント/インデックス/クエリの基本操作

前章の最後に環境構築したので、その環境上でいろいろクエリを試す。

### （個人的な推奨）

- curl での API 操作で説明されるけど、可能なら Kibana 上で Console 経由で行ったほうが簡単。
- 前述してるけど、この本では 6 系で説明されるが、7 系では API のパスが変更・Deprecated になってるから Warning を読みつつ新しい記法も調べながら進めること。

### 内容

- データリソースへの CRUD

- インデックスへの CRUD

- マッピングへの CRUD

- インデックステンプレートへの CRUD

### インデックステンプレート

ある条件のインデックス名に対して、自動的に Mapping の設定を反映させる機能。

- 動的にインデックスを作成したときに、動的に Mapping 定義を設定する必要があるため、この機能が必要となる。

- MEMO：Elasticsearch だとインデックス名に日付を入れて管理することは珍しくない（主に、ログ管理とかに使うケース）
- MEMO：１つのデータが複数のインデックスに登録されることもよくある。

### 検索種類

- 基本検索：match 系の検索。
- Term 検索：正確一致の検索。Mapping の Type が keyword 指定のときにに使う。
- Range 検索
- Bool 検索

  - Query と Filter の２種類。Query は条件をスコアで評価、Filter は Y/N のみで評価。（Filter だと、条件が N だと「絶対」に表示されない。日付とかで Range するときに役立つ。）
  - Query コンテキスト：must, should, must_not
  - Filter コンテキスト：filter

- ソート
  - RDS 的な Filed に Asc/Desc なソート
  - 検索結果の Score に応じたソート

## 第 4 章 Analyzer/Aggregation/スクリプティングによる高度なデータ分析

### アナライザー（Analyzar）

- データを全文検索に格納する際に、効率的な検索を行えるように文言に分割して格納する。このときに分割するレイヤー・役割をアナライザーと呼ぶ。

- 日本語の場合は文章にスペースがないので分割方法を考える必要がある。一般的なのは、文章の品詞単位に分ける形態素解析にて分割する。

### アナライザー：内部

３層の構造になっている。前提知識：Token ＝文言。

- フロー：CharFilter > Tokenizer > TokenFilter

- Char Filter: N 個ある。文言を変換する。（ex: emoji を文字化、`<br />`を消す
- Tokenizer: 1 個ある。文言を分割する。
- Token Filter: N 個ある。 文言を変換する。

### アナライザー：設定

- アナライザーを設定する
- Plugin で KuromojiAnalyzar を導入する

### アグリゲーション（Aggregation）

- 集計・グルーピング化などを行う機能。

- クエリ発行時に**検索と同時に行える**。

### Aggregation：種類

４種類ある。Metics と Buckets を主に使う。

- Metrics：統計計算。
- Buckets：グループ化。
- Pipeline：連続処理。Aggregation をパイプライン化する。
- Matrix：（Experimental な機能）フィールドに対して統計計算

### アグリゲーション：クエリ

アグリゲーションの略称の aggs で JSON を作る。

- Metrics：avg（平均）、min/max（最小/最大）sum（合計）、Cardinality（概算値）

- Buckets：terms（完全一致検索）、range（範囲）、histgram（増減値）
- 一般的な使い方：Buckets にて terms・range で範囲を指定して、フィールドに対して Metrics する。

### スクリプティング（Scripting）

クエリの JSON 中にスクリプト言語を直接書き込んで実行することが出来る機能。ここで動作するスクリプト言語の１つとして Painless という Elasticsearch 専用の Groovy に似た言語が主に使われる。

if-else/for/while などが使えるので、利用例としてアルゴリズム込で処理を何かしたいときに便利に使える。

- データソースに対する Update 処理
- 条件をスクリプト言語に記述した Update 処理（偶数なら更新、とか

## 第 5 章 システム運用とクラスタの管理

### health check による status 説明

インデックスとクラスターごとに、ステータスが定義されてる。

| ステータス | プライマリシャード | レプリカシャード |
| ---------- | ------------------ | ---------------- |
| green      | ○                  | ○                |
| yellow     | ○                  | ×                |
| red        | ×                  | ×                |

### その他

- Cluster / Node に対する healthcheck 系の API

- Elasticsarch が吐き出す Log（通常ログ、Deprecated ログ、slow ログ）

- RollintRestart、RollingUpdate について（RU は公式 Doc を参照とのこと）

### ノード起動・停止（＝クラスタ再起動）

クラスタ単位での起動停止などの API は用意されていない。なので、ノード単位で明示的に起動・停止をすることでクラスタ管理を行う。

一例として、効率的なクラスタの再起動は下記の通り。

- １）ノード停止前：シャード再配置無効化、synced flush 操作
- ２）ノード停止
- ３）ノード起動：Master ノードから起動する
- ４）ノード起動後：シャード再配置有効化
- （synced flush 操作：シャードとレプリカの同期。）

### ノード拡張

ノード拡張時に設定すべき内容。

- １）シャード再配置の無効化
- ２）SplitBrain 対策用の過半数を表現する`discovert.zen.minimum_master_num`の更新
- ３）ノード拡張
- ４）シャード再配置の有効化

### ノード縮小

ノード縮小時にシャードに対してレプリカが存在することを確認する。レプリカが無いとシャードがそのまま失われる（データ消失）。レプリカがあるならノードを縮小しても OK だが、安全のための手順を踏むことを推奨。

ノード縮小時に設定すべき内容。

- １）シャードを別のノードに退避。
- ２）シャード再配置の無効化
- ３）ノード縮小
- ４）シャード再配置の有効化

### スナップショット・リストア

- スナップショットのデータ保存場所は「すべてのノード」からアクセス可能な場所を準備。設定にて、Path を通して Restart してあげる。

- （スナップショットの設定・作成・削除の API）

- （リストアの設定・作成・適用・部分適用の API）

### インデックスエイリアス

インデックスに対するエイリアス。メリット・使いどころは下記の２つ。

- １）実体とインターフェースが疎結合になるので、インデックス名変更などによるアプリケーションレイヤーの影響がなくなる。
- ２）複数のインデックスを束ねて１つのエイリアスで持てる。（one_week という１つのエイリアスに対して、実体の monday~sunday のインデックスを参照させる、など）
- （インデックスエイリアスの作成・削除・Filter で条件付き作成の API）

### その他

- 再インデックス（reindex）：元のインデックスから、別のインデックスにコピーする。シャード数を増やしたいときによく行う。

- open/close 機能：インデックスに対して有効化／無効化を行う。使っていないインデックスに対して行う。
- shrink 機能：シャード数を縮小する機能。

### Elasticsearch と Lucene：データ構造

- 「Elasticsarch シャード＝ Lucene インデックス」は内部的に同じ。

- Lucene インデックスの中に、複数の Lucene セグメントがある。
- Lucene セグメントの中に、複数のドキュメントデータがある。

### Elasticsearch と Lucene：挙動

- ドキュメントデータが Lucene セグメント化した時点で、Elasticsearch はドキュメントへのアクセス・検索が行える。
- Lucene セグメントが作られるのは、ドキュメントをメモリバッファに貯めてまとめてから行う。
- ドキュメントがメモリバッファにいる間は、ドキュメントにアクセスできない。
- なので、**Write+Read を即時に行っても Read 出来ない。**
- ⇒ 明示的に反映させるために refresh/reopen 機能を使う。

### refresh/reopen 機能

- Lucene から reopen 操作をすると、検索が可能になる。（先程のデータが処理されるので）

- Elasticsearch から refersh 操作をすると、Lucene の reopen が実行される。
- Elasticsearch は、default で毎 1 秒ごとに refresh が発行されている。

### transaction ログと flush

前提として、Lucene においてドキュメントを格納するときは下記の流れとなる。

- １）一時的にメモリバッファに格納して
- ２）まとめて Lucene セグメント化してディスク書き込みする。

だが、２）が呼ばれる前にノードがダウンした場合、データロストしてしまう。そのために１）の時点で同期的に Transaction ログをディスク書き込みしている。

flush とは、このライフサイクルによるデータを整理する処理で下記の流れになる。

- １）メモリバッファにあるデータを Lucene セグメント化
- ２）更にディスク書き込み

- ３）Transaction ログをクリア

## 第 6 章 Elastic Stack インテグレーション

### ElasticStack とは

Elastic 社が提供している複数のパッケージをまとめて１つの Stack として提供しているアプリケーション。ログ収集、蓄積、監視、検索などを１つのスタックで管理できる。

下記のアプリケーション群によって構成されてる。

- Elasticsearch：全文検索システム。
- Kibana：データ可視化。

- Logstash：ログデータ加工・収集。
- Beats：メトリクスデータの収集・転送用のデータシッパー。
- X-Pack：便利ツール群。セキュリティ・アラート・モニタリング・機械学習など。

---

以上です。０ベースからこれだけの内容が１日で理解できたので助かりました。

<!-- アフィリエイト -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:90px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4295003913%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51YGeSqhovL._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4295003913%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">Elasticsearch実践ガイド (impress top gear)</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,080<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/4/26 21:49時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">
<!-- // アフィリエイト -->