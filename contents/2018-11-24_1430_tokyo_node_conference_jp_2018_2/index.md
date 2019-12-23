---
title: '東京Node学園2018(Conference@JP)のまとめ（その２）'
cover: 'cover.jpg'
createdAt: '2018-11-24 14:30'
updatedAt: '2018-11-24 14:30'
category: 'Tech'
tags:
  - Tech
  - Study
slug: tokyo-node-conference-jp-2018-2
---

# 東京 Node 学園 2018(Conference@JP)のまとめ（その２）

前回の続き

- [東京 Node 学園 2018(Conference@JP)のまとめ（その１）](./tokyo-node-conference-jp-2018-1)
- 東京 Node 学園 2018(Conference@JP)のまとめ（その２）← この記事

<!-- TwitterLink -->
<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">残りのセッションについても追記しましたー<a href="https://twitter.com/hashtag/nodefest?src=hash&amp;ref_src=twsrc%5Etfw">#nodefest</a> <a href="https://twitter.com/hashtag/node?src=hash&amp;ref_src=twsrc%5Etfw">#node</a> <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a> <a href="https://t.co/PqRfgB97Bo">https://t.co/PqRfgB97Bo</a></p>&mdash; Namiki🌏Webエンジニア (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1066312408845582336?ref_src=twsrc%5Etfw">2018年11月24日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- TwitterLink -->

## 👍 Web アプリを Native アプリにする Capacitor が広げる Web の可能性 by 榊原 昌彦

- https://nodefest.jp/2018/schedule.html#conference-2-6
- スライド：＜見つけたら貼る＞
- 概要：Capacitor の説明

### 1. 前提：Cordova での開発の課題

1. バージョン：ビルドバージョンを整えるのが辛い
2. プラグイン：作るのが大変
3. デザイン：スマホデザインを真似ているコピーなのでネイティブ API のデザインが変更されるとここもメンテしないといけない、という危険性がある。
4. 開発スピード：OSS なのでクリティカルな脆弱性への対応がクイックでない

### 2. Cordova(コルドバ)の後継である[Capacitor](https://capacitor.ionicframework.com/)について

- HTML5 での Web アプリ開発

  - SPA で作成される
  - 「WebView」＋「ネイティブ機能へのアクセス用 API」の組み合わせ

- Capacitor とは
  - Ionic チームの考える最強の Cordova が Capacitor
  - Capacitor の中で NativeAPI を使う
  - NativeAPI と WebView を部分的に使い融合
  - cordova より plugin 作成が圧倒的にスマート
  - cordova プラグインもサポート
  - vs ReactNative：RN は javascriptCore / native script runtime を通して swift にコンパイルされる

* レスポンス速度

  - HTML5 は遅くはない。ただ早くもない
  - Facebook レベルのアプリケーションなら十二分の速度となる実装例もある
  - **HTML5 遅い説の根拠の大半は実装がイケてないだけのケース**

* まとめ
  - 今後は、Web ページ上の PWA でポジティブな体験をしたらアプリをインストールされるようになるのではないか

### 所感

- この手のネイティブへのトランスコンパイラ系は学習コストが高いイメージがありかつメインストリームが ReactNative だが他にも色々と存在して群雄割拠な構図、という印象が強くある。そのため、自分としては手を出してみたいが手を出しづらいジャンルの 1 つなので、手を出すならプラットフォームや FW のサイクルが落ち着いてから手を出すかなーと、どうしてもなってしまう。
- 登壇者の HTML5 / Capacitor などへの愛をすごく感じた

## 👍 実践 GraphQL for クライアント側 by 鈴木 亮太

- https://nodefest.jp/2018/schedule.html#conference-2-7

- スライド：＜見つけたら貼る＞

- 概要：GraphQL の本番導入によるナレッジ

### 1. GraphQL とは

- クライアント側からクエリによるサーバ側のデータ取得を実現する機構
  - Query : Get 操作
  - Mutation : Get 以外操作
- データのリレーションのネストも 1query で取れる
- 最近 founddation ができた

### 2. GraphQL を使ったプロダクト紹介

- 広告配信システムの管理画面：GrowLio
- 特徴：データ同士の関連がかなり多い
- RESTful で以前も同様のシステムを構築したが辛さがあった。

### 3. GraphQL で解決したこと

1. サバ／クラのコミュニケーション

   - ☓：手動のドキュメント化
     - → 　 ◯：コードからジェネレート可能
   - ☓：型を明確に定義をしていない
     - → 　 ◯：GraphQL のスキーマ中心のコミュニケートになる

2. 取得の複雑化

   - ☓：たくさんのエンドポイント
     - → 　 ◯：１エンドポイント＋スキーマでクライアントで整理可能
   - ☓：型不審
     - → 　 ◯：型安全になり introspection 機能で型の信頼性が担保される

3. パフォーマンスボトルネック
   - ☓：複数 API を発行するとネットワーク帯域を大きく取る
     - → 　 ◯：ネットワークがボトルネックにならなくなった
   - ☓：不要フィールドが多くある
     - → 　 ◯：サーバ連携なくクライアント主導でパフォーマンスチューニング可能

- GraphQL でなくても解決できた内容

  - ドキュメント
    - → 　 Swagger
  - パフォーマンス
    - → 　 BFF
  - 型
    - → 　サバ／クラで同一言語

- なぜ GraphQL？

  - サバ／クラが切り離される
  - 学習コストが低い
  - 学習意欲が高い
  - ブルーオーシャン

- GraphQL の痛み

  - エンドポイントが同一になるので**エンドポイントごとのボトルネック探し／トラッキングツールでのユーザ行動履歴が追えない**、というネガティブなこともある。

- まとめ
  - ネガティブもあるがトータルではかなり旨味があるのでおすすめ。

### 4. GraphQL で工夫

- Query / Mutation に名前をつける
  - トラブルシュート可能
  - デバッグしやすい
- Fragment を使用する
  - クエリの再利用性を高める
  - ライブラリ／関数経由でクエリを発行すると共通化できている風に見えるができていないケースが多い。

### まとめ

- クライアント的にはデメリットなし
- サーバ的にはこちらを参照：https://speakerdeck.com/petitviolet/real-world-graphql-on-scala

### 所感

- GraphQL の本番の話でまだ前例が少ないので、本番導入に対するメリデメなどの良い題材
- 自分も Gatsby での静的サイト作成でも GraphQL を使ったがこの規模感の実装でも「Query / Mutation に名前をつける」「Fragment を使用する」は行っていたところもあり、これからサービスの運用・グロースを通して中〜大規模サービスならではのナレッジが生まれるところもあると思うのでそこでの気付きや工夫のナレッジに期待。

## ❤️ React + Apollo Client (GraphQL) により変化するアプリケーション設計 by 宮崎 優太郎

- スライド：https://speakerdeck.com/vwxyutarooo/react-plus-apollo-client-graphql-niyoribian-hua-suruapurikesiyonshe-ji
- 概要：メルカリの次期システムで GraphQL/Apollo によって Redux がいらなくなる
- https://nodefest.jp/2018/schedule.html#conference-5-8

### 0 . はじめに

- メルカリのシステムが古くなってきたので、最新の技術スタックにて作り直しを画策・実施している re-architecture チームのフロントエンドの人

- GraphQL Summit 2018 行ってきたので、そこらへんのナレッジも共有

- Redux to GraphQL
  - [「Appollo + GraphQL 導入で Redux が不要になる」](https://blog.apollographql.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a)記事を疑いながら作ったら...
  - 本当にメルカリでも**Appollo + GraphQL 導入で Redux が不要になっている**（ただしまだ全てをリプレイスしていないので今時点では、だが）
  - パラダイムシフトなので Flux 設計ありきで考えずに考えると良い

### 1. Prerequirements

- GraphQL とは

  - 前のセッションで語られている通り。
  - 最近ではマイクロサービスの BFF / API Aggregation としてもよく登場。

- Apollo

  - プラットフォーマー。色々なことを提供しているが、提供しているものをわかりやすくするために 3 層で考えると良い

    - Gateway
    - Library ( Server/Client )
    - Development

### 2. Apollo Client

- Boost
  - Link
    - サバ／クラの間を管理
  - Cache
    - キャッシュ

### 3. React Apollo

- GraphQL の query/mutation の発行を行う Component を HoC として提供されている

### 4. Apollo Link State

- Local state へ query を発行する

### 5. Compare with Flux

- Redux はいらなくなる。なぜならクライアント側に存在するビジネスロジックの代わりに GraphQL / Apollo がその分を代替する。
- Logic：大きく 2 つが存在
  1. BusinessLogic：3 つが存在
     1. Data Access: RESTful でデータ取得
        - →GraphQL Server & Apollo が取って代わる
     2. Endpoints Management ：エンドポイント管理
        - →GraphQL Server が取って代わる
     3. State Management：データの整形と保存
        - →Apollo が取って代わる
  2. Presentation Logic：表示管理
     - →Apollo が取って代わる

### まとめ

- 今までは RESTful はアプリケーション間で異なる設計になりがちなので統一するのは、このレイヤーではできなかったが GraphQL の導入でここのレイヤーで統一化される。合わせてクライアントレイヤーでも管理をする必要がなくなるため Redux が不要になる

- Apollo が既存のアーキテクチャを差し替えられるような良い塩梅の抽象レイヤーを提供してきたのが大きい
- 個人的に「この Apollo を利用したアーキテクチャに名称がついていない点が普及していない理由なのではないか、とも思う。また、**この設計は今の主流な Flux 設計などに対する次期アーキテクチャになりえる**と捉えている。」とのこと
- このアーキテクチャにより、クライアントサイドで状態の関心が減り、UI のことだけに注力できるようになる
- ただ、今回の説明のようにビジネスロジックがキチンと分割されていない状態からこのアーキテクチャを導入しても、うまくワークしない可能性もあるので注意。

### 所感

- ミーハーな観点で見て GraphQL summit 2018 での情報収集などをした上でもメルカリの次期システムへのリプレイスにてこのアーキテクチャを進めている現状であり、また技術的な観点で見ても Redux が不要になるというのはフロントエンドにとっては十二分な程のポジティブなニュースだと思う。総合して**かなり将来性の高いアーキテクチャ**のように感じた。
- また、技術的に先端の企業がアーキテクチャを先行導入して、それに対して後追いで名称がつき、その後に一般的に普及していく、という流れのケースは今までのアーキテクチャでもよくあるケースなので今回もそのケースになるだけの可能性は十二分に秘めていると思う。

## ❤️ 貢献できる OSS の見つけ方 -完結編- by Masato Ohba

- 概要：参入障壁の課題を解決するためのサービス goofi を作るまでと作ってから

- https://nodefest.jp/2018/schedule.html#conference-2-9

- スライド：＜見つけたら貼る＞

### 1. どうやって OSS を見つける

- 偶発　 → 　今回のセッションは対象外
- 自発
  - 好きなプロジェクトをウォッチは長期にはベストだが短期では難しい
  - 小さいプロジェクトを狙う

### 2. 離脱要因

- 「プロジェクトを選ぶ」＋「課題を決める」ところが体感では一番難しい。

- ここの壁はメンテナーとコントリビュータの不幸

### 3. 離脱要因を超える

- なので、それを解決するサービス：[goofi](https://goofi.now.sh)を作った。

  - `good first issue`というコントリビュートを求めているラベルがあるので、これで対応
  - Github issue reader の jasper とかではノイズが大きすぎた

- 技術的な課題
  - performance / rate limit
    - GraphQL では github 上で point で評価している
  - → キャッシュ入れて両方解決

### 4. 結果

### 所感

- ジョブズ風に歩くプレゼン素敵。自分的には今日の登壇者の中で最も美しいプレゼンをしていたように感じる。あと関係ないけど思想がモダンでかなり自分好みだった。

- サービスへの共感：今回の「OSS 参入障壁の問題」にまさしく自分も殺された経験があって「OSS のコントリビュートしようかな〜・・・、、、結局どのリポジトリのどの内容から入ればいいのか全然わからん」で、くじけたことがある。なのでこのサービスに対して応援したい気持ちがものすごく強いし、OSS コントリビュート経験もそこまで無いのでしばらく自分もこのサービス使っていこうと思った。

* プロダクトのグロースがリーン開発のお手本のようだった。プロダクトのグロースの観点では、v1 は csv 吐き出し見れるレベル →v2 は UI の強化 →v3 はバックエンド強化、とリーンにサービスをグロースしており、フィードバックの観点では今回のような発表などを複数回行って顧客となる我々エンジニアからのフィードバックを取り入れているようである。

* また、自分の感じていた課題を自分のサービスで解決していたり、自分のやってみたい技術スタックをまるっとそのサービスにブチ込むことで成長・自己満足・ポートフォリオ拡大と見事にすべてをキレイに行っている様を見ると、自分もサービスの作成をしてみたいなーとモチベーションを刺激される良い内容でもあった。

## 👍 Vue.js/Nuxt.js で 実現できた PWA の リアルタイム動画ラップ・バトル・アプリ by lulzneko

- スライド：https://riotz.works/slides/?2018-nodefest#1

- 概要：アプリのハッカソンで優勝に至るまで

### 1. 導入

### 2. Vue.js/Nuxt.js で開発するスマホ向け PWA アプリ

### 3. サーバーレス Web API w/AWS Lambda + TypeScript

- PWA

- Vue.js / Nuxt.js

- WebRTC / Skyway
- Realtime Database

- AWS Lambda

### 4. Vue.js/Nuxt.js PWA と プレゼン スライド の CI/CD

- プレゼンスライド自体を CI/CD
  - remark.js 使っているが今後は reveal.js がデファクトになりそうな予兆はある
  - CI でのデプロイ
  - 複数人でのバージョン管理
  - エンジニアへの敷居がかなり低い
  - 作成コストもかなり早く行える
  - スライド中に iframe タグを埋め込めるので Web アプリケーションならそのまま使える

### 5. まとめ

### 所感

- 最近、自分もフロント学習中な点も相まって、個人開発で「如何に管理すべきサーバを減らすか？」「実装を減らすか？」の視点のプライオリティが上がってきたのもあり、登壇者達のチームのサーバーレスにこだわるスタイルはすごく魅力的に感じたし、今後も自分もその方向をアーキテクチャ選定は進めていきたいと思った。
- また、サーバレスや外部サービスを多用することで実装量を減らす分、比例して経験量を増やすことも出来てその分が成長に繋がるのでは？と感じた
- ハッカソンやったことないので面白そうなのでやってみたいなーと思ったが、この「やってみたいなー」から「実際にやった」までのギャップはちょっと広そうなのでまずはライトに出来る箇所を探してみたい。

## 🎉 総括

### 1. 自分の所感のまとめ

- バックエンドとしての Node.js 話だけだと思っていたらフロントエンドとしての JavaScript の領域がかなり多くて意外だった。
- 来年から JS conf(仮)となるようだが、そもそも JS conf 的なのが日本でなかったことも驚きだった。
- 毎セッションごとに移動を行う必要のあるカンファレンスが初めてだったので思ったよりも疲れた。
- 企業の事例を生の声で多く見ることが出来るので肌感でトレンドやコミュニティの温度感を感じられるので、やはりリアルでカンファレンスに参加するのは有意義だった。
- セッションのスキマ時間がかなりカツカツで QA タイムも特に無いので気になるところはあったが QA は出来なかった。アフターパーティーに参加して登壇者に QA しに行っても良かったと思う。この手の QA タイムが無いケースではアフターパーティーなどで登壇者に QA しにいく前提で考えていたほうが良いと思う。

### 2. 発表を聞いた自分のまとめ

- _Node.js_：Node v10 の Workers にてシングルスレッドからマルチスレッドになる点はキチンと認識しておくべきポイントだと思う。
- _GraphQL_：GraphQL を本番に導入した話やこれからリプレイスしようとしている話などが散見された。発表内容的にも大抵ポジティブな意見ばかりなので GraphQL での開発は今後も後追いで増えていくように思う

## 📊 アンケート

![survey](./1.jpg)

参加者のアンケート結果。技術動向をそれなりに終えている人からすれば特に意外に思うところはないような結果だと思う。

---

- [東京 Node 学園 2018(Conference@JP)のまとめ（その１）](./tokyo-node-conference-jp-2018-1)
- 東京 Node 学園 2018(Conference@JP)のまとめ（その２）← この記事

---
