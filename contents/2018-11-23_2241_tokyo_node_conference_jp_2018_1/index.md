---
title: '東京Node学園祭 2018 (Conference @JP)の1日目のまとめ（その１）'
createdAt: '2018-11-23 22:42'
updatedAt: '2018-11-23 22:42'
category: '技術'
tags:
  - イベント
slug: tokyo-node-conference-jp-2018-1
---

# 東京 Node 学園祭 2018 の 1 日目のまとめ（その１）(Conference@JP)

東京 Node 学園祭 2018 の 1 日目に行ってきたので、そのまとめ。

<!-- TwitterLink -->
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">東京Node学園祭2018(1日目)<br>登壇者・聴講者・スタッフの皆さん<br>お疲れ様でした😇<br><br>聴講した内容をまとめました📝<br>今日の振り返りや<br>見れなかったセッションの<br>参考としてどうぞ💫<a href="https://twitter.com/hashtag/nodefest?src=hash&amp;ref_src=twsrc%5Etfw">#nodefest</a> <a href="https://twitter.com/hashtag/node?src=hash&amp;ref_src=twsrc%5Etfw">#node</a> <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a> <a href="https://t.co/SZZDDoWXan">https://t.co/SZZDDoWXan</a></p>&mdash; Namiki🌏Webエンジニア (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1065981410383560704?ref_src=twsrc%5Etfw">2018年11月23日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- TwitterLink -->

- 自分の Node.js のレベル感

  まったく書いたことがない。知識としては、「イベントループ・CPU のコア数でスケール出来ない・コードは非同期処理がいっぱい」、というイメージを持っているくらいのレベル。

- 自分の JavaScript のレベル感

  仕事で jQuery を少し触った程度。最近では ES6 らへんをある程度学んで、このサイト自体を Gatsby ( React+GraphQL ) で作ってテーマに対してコンポーネントとプラグインとかを変えれるくらいのレベル。Next/Nuxt・Vue・TypeScript は触ったことがほぼ無い。

この記事はセッションのサマリと自分の所感などのまとめてだが、いかんせん初学者なので間違っている点があれば~~まさかり~~連絡ください！すぐに直しますのでご容赦を。

## 📌 まとめのまとめ

【追記：2018-11-24 19:21】

全部書き終えたのだが気付いたら全部で 8000 文字近い記事になってしまった・・・😱。なので、目次と個人的な 3 選のピックアップした。どれも良かったのでできれば全部見てもらいたいがそこまで時間をかけられない方なら少なくともまずは**3 選だけでも目を通しておくことと良い**と思う。

> ️❤️：３選のセッション

- ️ 目次
  - [🔑 Keynote](./tokyo-node-conference-jp-2018-1#-keynote)
  - [👍 JavaScript で機械学習はじめよう by Shuhei Iitsuka](tokyo-node-conference-jp-2018-1#-javascript-で機械学習はじめよう-by-shuhei-iitsuka)
  - [👍 Node.js: The Road to Workers by Anna Henningsen](tokyo-node-conference-jp-2018-1#-nodejs-the-road-to-workers-by-anna-henningsen)
  - [👍 Diagnose your Node.js app by Daiki Arai](tokyo-node-conference-jp-2018-1#-diagnose-your-nodejs-app-by-daiki-arai)
  - [❤️ State of SEO for SPA by seya](tokyo-node-conference-jp-2018-1#️-state-of-seo-for-spa-by-seya)
  - [👍 Node.js アプリの開発をモダン化するために取り組んできたこと by Daiki Yokoi](tokyo-node-conference-jp-2018-1#-nodejsアプリの開発をモダン化するために取り組んできたこと-by-daiki-yokoi)
  - [👍 Web アプリを Native アプリにする Capacitor が広げる Web の可能性 by 榊原 昌彦](tokyo-node-conference-jp-2018-2#-webアプリをnativeアプリにする-capacitor-が広げるwebの可能性-by-榊原-昌彦)
  - [👍 実践 GraphQL for クライアント側 by 鈴木 亮太](tokyo-node-conference-jp-2018-2#-実践graphql-for-クライアント側-by-鈴木-亮太)
  - [❤️ React + Apollo Client (GraphQL) により変化するアプリケーション設計 by 宮崎 優太郎](tokyo-node-conference-jp-2018-2#️-react--apollo-client-graphql-により変化するアプリケーション設計-by-宮崎-優太郎)
  - [❤️ 貢献できる OSS の見つけ方 -完結編- by Masato Ohba](tokyo-node-conference-jp-2018-2#️-貢献できるossの見つけ方--完結編--by-masato-ohba)
  - [👍 Vue.js/Nuxt.js で 実現できた PWA の リアルタイム動画ラップ・バトル・アプリ by lulzneko](tokyo-node-conference-jp-2018-2#-vuejsnuxtjs-で-実現できた-pwa-の-リアルタイム動画ラップ・バトル・アプリ-by-lulzneko)
  - [🎉 総括](tokyo-node-conference-jp-2018-2#-総括)

## 🔑 Keynote

- 各種登壇内容の概要説明

- Node.js と JavaScript のファウンデーションが統一される。

  それに合わせて**東京 node 学園祭も今年で最後となり来年から jsconf in japan(仮)**としてカンファレンスを行う予定、とのこと。

## 👍 JavaScript で機械学習はじめよう by Shuhei Iitsuka

- https://nodefest.jp/2018/schedule.html#conference-2-1
- スライド：https://bit.ly/2FDqHss

- 概要：「JS x ML = すごい」というのを今日伝える

### 1. 基礎：機械学習

- 機械学習とは？

  - 判定ロジックを人間が考えてプログラムにするのが今までパラダイムから、大量のデータを元にロジックを機械学習が考えるパラダイム

- アルゴリズム：①k 近傍法
  - メリット：実装が単純
  - デメリット：データが増えるほど推論が大変
- アルゴリズム：② 線形モデル
  - メリット：推論速度は一定
  - デメリット：調整するパラメータが多い
- アルゴリズム：**③ ニューラルネットワーク**

  - メリット：様々な表現が可能
  - デメリット：調整するパラメータが多い

- ニューラルネットワーク

  - ニューラルネットワーク（レイヤー）を重ねる →Deep Learning
  - レイヤーごとにパラーメータが必要なので、重ねれば重ねるほど調整する作業が必要。

- 計算グラフ
  - ニューラルネットワークは「計算グラフ」で表現できる
  - 「結果」と「正解との誤差」を導き出すのが簡単に行える
- TensorFlow ライブラリ
  - ライブラリを使うと大量のパラメータを扱う負担が減る
  - 計算グラフを使用する

### 2. 実装：Tensorflow.js

- JavaScript から可能
- 学習済みモデルを PC に持ってきてを PC 上で推論を実行する

### 3. 応用

- [Emoji Scavenger Hunt](https://emojiscavengerhunt.withgoogle.com/ja/)

  例）時計を探せ → 画像で時計を探す → ゲームクリア → これを１０個

- [Gboard 物理手書きバージョン](https://landing.google.co.jp/tegaki/)

  エイプリルフールネタで準備してた

### 所感

- レベル感
  - プレゼン対象が機械学習の初学者向けかつ自分も初心者ということもあり、すごくわかりやすかった。
- TensorFlow.js というオンブラウザ機械学習
  - 「推論の速度」を高速で行えると「速度が速い」という点を強く強調されているように感じた
  - どちらかというとフロントエンドエンジニアでも手軽に ML が行えるようになるという参入障壁と心理的障壁の破壊こそが TensorFlow.js の真価なのだと思っていたので意外だった。

## 👍 Node.js: The Road to Workers by Anna Henningsen

- https://nodefest.jp/2018/schedule.html#conference-1-4
- 概要：Node version 10 から導入される Workers について
- スライド：＜見つけたら貼る＞

### 内容

- Workers
  - 1 スレッドからマルチスレッドになるための機構
  - Node.js のバージョン 10 予定

### 所感

- 英語だったのでなんとなくしかわからなかった
- Node.js と言えば「イベントループ・マルチコアでスケールしない」とイメージが強かったが Node.js の v10 から導入される Worker でそこらは解消される。また、すでに導入されているところが多いので（その２のアンケート参照）、その認識は改めた方が良いと思われる。

## 👍 Diagnose your Node.js app by Daiki Arai

- https://nodefest.jp/2018/schedule.html#conference-2-3
- 概要：Node.js 初心者の詰まりやすい箇所のナレッジ
- スライド：＜見つけたら貼る＞

### 1. 非同期

- 非同期の実行順が環境バージョンで異なる
  - → 実行順番は後方バージョンでも保証されない
  - V10/ v11 / ブラウザでバラバラ
- そのため、**順番／時間に依存しない設計**が重要になる
- Callback / Promise / async などでフロー制御をする設計
  - AsyncHook を使うと良い

### 2. エラーハンドリング

- Promise vs callback 系?

  - → 時代の遷移的に Promise に寄せていく方向がベター

- unhandledRejection
  - Controller 内でラップすることで発生を防止
- multipleResolves

### 3. debug

- Node12 系から async stack trace が強化されるかも

- 本番環境では`post-mortem debugging`手法を推奨
  - クラッシュ時のプロセスメモリーイメージから指標のみを得る手法。
  - スタックトレース異常の情報を得られる

### 所感

- Yahoo 社で今までためてきた Node.js の痛みを伴うナレッジを発表してくれた発表

- **順番・時間に依存する設計はせずフロー制御の設計をコアに置くのが Node らしい設計**、みたい
- Node 触ったことがない自分としてもこれから Node.js を触る機会があれば参考にしたいありがたい資料だが、発表内容だけ聞いても理解が及ばなかったので前提として知っていないといけない用語があったと思われるのは残念。おそらく、Node.js を触っていれば常識だろ、という用語・単語を元に実装レイヤーのレベルで説明されていたからだと思うが、自分のようにこれから触る人だと一度 Node.js を書き慣れてからや基礎知識をつけてから見る方がよいかも。

---

## ❤️ State of SEO for SPA by seya

- 概要：SPA の構築前提で SEO の土台作りの方法
- https://nodefest.jp/2018/schedule.html#conference-2-4
- スライド：https://speakerdeck.com/kazuyaseki/seo-for-spa-cfb3706f-ae1d-4c6f-a83f-96dc2452f32b
- スライド：https://qiita.com/seya/items/2688dc539af217b7b111

### 1. SEO とは

- 「SEO の土台」＝ Google bot にインデクスされること
  1. クロールされること：基本は sitemap をキチンと作ること
  2. HTML が適切に解釈されること　 → 　 ★ このセッションではここを話す
- SEO
  - Facebook OGP / Twitter Card
  - 構造化データ：(ex) AMP / Video

### 2. for SPA 課題

- Google bot
  - js を実行しない？　 → 　される。ただし・・・
    - レンダリングエンジンには chrome41 相当機能しか無い
      - アロー関数も使えない
      - Websocket は非対応
      - ユーザ同意は自動で不承認
      - etc...
  - ajax を実行しない？　 → 　される。ただし・・・
    - タイムアウトされる可能性あり。
      中の人曰く「決まった時間は無いが 5s くらいが目指すべきターゲットタイム」とのこと。
  - メタ情報は JS では返せられないので、サーバから返す時点で HTML に含まれている必要があり。
- RenderQueue とは
  - js あり／なしのページにてクロールのキューが異なる
  - js 有りだとクロールに最大は 1week かかる可能性がある
- 中の人曰く（ChromeDev）
  - 「レンダリングエンジン chorme41」「RenderQueue」の問題は将来的に解決しようとしている。

### 3. 解決策

1. Chrome41 レンダリングされるようにする

   1. Fetch as Google

      - 実行可能回数が 10 per 1 day

      - よく原因不明バグが起きる

   2. puppeteer でエミュレート

1. メタ情報だけ SSR
   - Nuxt.js の SPA mode はそうなっている
1. Dynamic Rendering ( = prerender )

   - ボットの時は prerender サービス上の headless chrome がレンダーした orCache の静的サイトを返すサービス／仕組み
   - Google IO 2018 から Dynamic Rendering という名称で推し始めてる。
     - クローキングとしてみられないので大丈夫。だとさすがに思う。
     - クローキング：ブラックハット SEO の１つでユーザと bot で描画内容を変える。
   - ★**SEO 的には DynamicRendering が万能のソリューション**

1. Static Site Generator(SSG)

   - ウェブアプリでも使える

   - 今後盛り上がりそうな予兆を感じる。Gatsby 使いたい

1. SSR
   - SSR でもタイムアウトは起こり得る

### 4. 選び方

- 大事な観点　 → 　下記が全てが Yes なら DynamicRendering にすると良い。
  1. インデックス信頼性
  2. メタ情報の対応の要否
  3. 更新頻度
- 最強のモリモリな構成は Dynamic Rendering + SSG or SSR

### 結論

- **SEO のためだけの SSR は不要**。

- **DynamicRendering はローコストハイパフォーマンス**
  - SSR はタイムアウト・RenderQueue のリスクが高い

### 所感

- SEO に観点にキレイにわかりやすく詳しく書かれている。特にここらへんを調べると過去時点の情報と 2018 年現時点での情報と食い違いがかなりあるので、それらを全て最新情報としてまとめてくれているこの記事はかなり価値があると思う。**2018 年時点の Web エンジニアの教養として知っておくべきレベルの内容**と言えるほどの内容だった。是非、オリジナルを読んでほしい。

- 「Gatsby などの SSG が今後ホットになりそうな予兆を感じる」らしく、最近自分のサイトを Gatsby で構築したところもあり自分の技術の先行投資の確からしさを感じられてちょっと安心。

## 👍 Node.js アプリの開発をモダン化するために取り組んできたこと by Daiki Yokoi

- https://nodefest.jp/2018/schedule.html#conference-5-5
- スライド：＜見つけたら貼る＞
- 概要：Nest フレームワーク・コンテナ・テストモック・Fargate について

### 1. ソース：Nodejs/Express から TypeScript/Nest に以降

- 色々ライブラリを試してみたが、それぞれのライブラリを結合する調整／コストがシンドくて統合された FW が無いか探して Nest に行き着いた。

- Nest FW
  - 導入時は 5,000star で 10,000star の勢いある Node/TypeScript FW
  - 構成
    - 複数モジュール群を束ねてツリー状にしてトップが Application
    - クラスの集まりがモジュールになる
    - クラス
      - コントローラ
      - プロバイダ
  - バリデーション：コントローラに渡ってくる前にバリデーションを行う機構
  - ガード：アクセスコントロールの機構
  - TypeORM サポート(ポピュラーな O/R Mapper)
  - アダプタを変えれば RESTful API 以外でも可能(GraphQL / Websocket, etc)

### 2. ユニットテスト

- コンテナとモックの導入

### 3. インフラ：サーバレス

- Elastic Beanstalk から Fargate の話

### 所感

- Nest のコミュニティ

  - 公式見る感じ、Angular Community がバックについているぽい。
  - 公式見る感じ、中文があるのでコミュニティが中国寄りぽい。

- Express との差異

  発表内ではこの観点で言及されていなかったが聞いている限りでは「TypeScript など 2018 年時点のイマドキな構成をした厚い FW」というイメージ

---

次に続く

- 東京 Node 学園 2018(Conference@JP)のまとめ（その１）← この記事
- [東京 Node 学園 2018(Conference@JP)のまとめ（その２）](./tokyo-node-conference-jp-2018-2)

---
