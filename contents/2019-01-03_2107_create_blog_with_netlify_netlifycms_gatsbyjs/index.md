---
title: 'Netlify + Netlify CMS + GatsbyJS ( React + GraphQL )でブログ作ったときにハマった点'
cover: 'cover.png'
createdAt: '2019-01-03 21:07'
updatedAt: '2019-01-03 21:07'
category: 'Tech'
tags:
  - tech
  - netlify
  - gatsbyjs
slug: create-blog-with-netlify-netlifycms-gatsbyjs
---

# Netlify + Netlify CMS + GatsbyJS ( React + GraphQL )でブログ作ったときにハマった点

掲題の JAM Stack の構成で作成した。構築の上でハマったところが何個かあったのでまとめておく。

## 🚀Netlify・Netlify CMS・GatsbyJS とは

そもそも、前提としてそれぞれの用語についての簡単な説明をしていく。

### [JAMStack](https://jamstack.org/)

アーキテクチャの１つ。JavaScript + APIs + Markup で構成されたシステム。

### [Netlify](https://www.netlify.com/)

ホスティングサービスの１つ。もし昔の自分に Netlify を説明するなら　「静的サイト用 heroku + CirclCI みたいなイケてる CI が all-in-one で提供されているホスティングサービス」というイメージが一番しっくりくる。

### [Netlify CMS](https://www.netlifycms.org/)

CMS の１つ。特徴は OSS で community-driven なので健全な headless CMS。contentful と迷ったけど、まずは　 Netlify と親和性が高い NetlifyCMS にすることにした。こなれてきたら他の HeadlessCMS も使ってみようかな、と気軽に CMS を変えられるのも HeadlessCMS ならではの良さ。ただ、結局 CMS はほとんど使ってない。

### [GatsbyJS](https://www.gatsbyjs.org/)

静的サイトジェネレータの１つ。GraphQL + React が使われているのが特徴。WordPress と比較すると React ですべて書かれている分、メンテ性がかなり高い。が、逆に React 知らない人からすると学習コストもかなり高い。

## 💻Netlify・Netlify CMS・GatsbyJS での構築

[Docs](https://www.netlify.com/docs/)とかのの通りに行えば良いので省略。

## 🤔Netlify・Netlify CMS・GatsbyJS で構築での問題・ハマったところ

ドキュメントの通り進めれば基本的に問題なく構築はできる。

構築の上でカスタムしていく上で問題や詰まったポイントがあったので備忘用に残す。

ちなみに下記のテーマをベースにブログを作り始めた。

» [Vagr9K/gatsby-material-starter: A high performance blog starter with Material design in mind for GatsbyJS.](https://github.com/Vagr9K/gatsby-material-starter)

### 【問題 ①】RSS が機能しない

結論：使っていたテーマのバグ。用意されている config をそのまま使うと RSS が invalid なデータ構造になってしまうので修正が必要。

RSS を設定して記事をポストしてもリーダーが RSS を取得しないため、

- RSS リーダーのせい？
- RSS の内容のせい？
- そもそも根本的に何か必要なところが抜けている？

みたいに苦しんだ。

何はともあれ切り分けのために下記の解析ツールから使うべきだった。

» [W3C Feed Validation Service, for Atom and RSS](https://validator.w3.org/feed/)

この解析サイトで RSS のデータ構造的が invalid / valid かを判断してくれる。
その結果、「successful!!」とはならず、「invalid なデータがあるよ〜」となっていた。
原因は、author タグが item タグの外に定義されているので invalid なデータになっていたところ。

このテーマのフォーク元の方に[雑な感じで PR 出しておいた](https://github.com/Vagr9K/gatsby-advanced-starter/pull/49)が、少なくとも自分の環境では直っているのでこれで解決。
→ Fix してもらえました(2019/04/02)

ちなみに、RSS が準備されているように見えて実は動かない状態、となっているわけだが、PR を出した先は GatsbyJS のトップページに載っているくらい勢いのあるものだった。
「先端の技術スタックを選んだ際は、こういうのとも戦わないと行けないんだよなー」というケースとぶつかれたのは良かった。ハマった時は辛かったが。

### 【問題 ②】記事の予約投稿ができない問題

結論：予約する必要が無いので特に解決しなかった。

ただ、解決方法や案は色々調べたり考えたのでまとめておく。実装したわけではなく机上の空論になっている可能性もあるかもしれないのであしからず。

＜対応案＞

1. フロントのロジックで非表示にして`watchable_at`の時間を過ぎたら表示する

   - 事前にデプロイしておきフロントのロジックで表示させない方法。セキュアな要件もないしこれで良いかなー、と思ったが、デプロイ時に行われる GatsbyJS build の時点で RSS が生成されてしまうので没案。そもそも、脳筋なやり方なので微妙ですね。

2. Zapier のスケジューラと Webhook で Netlify のビルドを行う

   - 【原案】[Auto trigger deploys on Netlify](https://flaviocopes.com/netlify-auto-deploy/)
   - 【概要】事前に記事は github 上にあげておく。Zapier で定期スケジュールを仕込む。Zapier の定期スケジュールで Netlify のビルドが実行される。
   - 【問題】時間単位でのデプロイとなるため、記事単位でのデプロイが出来ない？と思われる（詳細は調べてないので本当に出来るかも微妙）。

3. Serverless によるスケジューラをキックに PR のマージでデプロイを行う

   - [netlify/www-post-scheduler: This is a serverless function to auto publish blog posts](https://github.com/netlify/www-post-scheduler)
   - 【概要】Serverless を使ってスケジューラシステムを構築 → 指定した時間に PR が merge される。
   - 【所感】PR 単位での投稿が可能なのは良い。また、Netlify のリポジトリになってるの公式の見解としてこの方法を推奨している模様。ただ、個人的には予約投稿のためだけに serverless ＋ AWS はオーバースペックな気がする。せっかく Entlify ＋ Gatsby で管理するサーバもない状況なのにスケジューラを建てなくはない。ちなみに、仕組みは dynamoDB にてスケジュール持ち情報を持ち、Lambda で実行、というシンプルな仕組みみたい。

4. Heroku にてスケジューラを構築して Netlify のビルドを実行する

   - 【原案】[Netlify と Heroku で予約投稿機能を実現する | WEB EGG](https://blog.leko.jp/post/automate-build-netlify-with-heroku/)
   - 【概要】Heroku を使って cron 作成してスケジューラを実現。
   - 【問題】せっかく Netlify を使って管理するサーバを減らしたのに専用のサーバ立てるのは嫌なので没。

5. 記事に公開日を指定して Gatsby のビルド時にチェックかつ Netlify のビルドを定期的に行う

   - 【原案】[Scheduling Hugo posts on Netlify • Jerrie Pelser's Blog](https://www.jerriepelser.com/blog/scheduling-hugo-posts-on-netlify/)
   - 【概要】記事毎にビルド対象時刻をハンドリングできる Gatsby の plugin を作成+Zapier で定期ビルド
   - 【所感】Hugo では`publish_date`を過ぎていない記事は build されないみたいなので、同様に GatsbyJS でも作る。その上で、Zapier で定期的に Netlify のビルドを実行する。そうなると、例えば、1h ごとにビルドを実行 → 公開時間を過ぎていればその記事がビルド対象に含まれてビルド → 公開、という流れになる。ビルド間隔が定期的＋事前にコードプッシュしておけば自動的にリリースされる仕組み＋実装コストが（たぶん）低い＋管理コストが低い、という観点からこの方法が一番良さそうだった。

### 【問題 ③】excerpt が正常に表示されない

結論：non-latin language 用の対応しないといけない。

excerpt とは、「抜粋」で例えばブログ記事の一覧を表示したときそれぞれのプログ記事の先頭行数分を抜粋して表示するようなもの。この excerpt の表示だが正常に表示されなかった。ただ、その対応について trouble shooting に書いてあるので「GraphQL の query を excerpt から excerpt(truncate: true)にするように」とのこと。欲を言えばデフォルトで設定しておいてほしいが・・・。調べればわかるものだったので許容範囲。

» [gatsby-transformer-remark | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)

### 【問題 ④】Twitter-card に画像が正常に表示されない

結論：使っていたテーマが壊れているので改修が必要

Twitter-card とは、Twitter で URL を貼った時に Twitter 上で表示される URL 画像などの情報セット。Twitter-card の画像が正常に反映されなくて見てみたら使っているテーマが画像 Url を正しく表現出来ていないのが原因だった。すでに自分のブログ用に色々コミットした後だったので元のテーマへの PR は出していないので、直した時のコミットリンクを残しておくので同じようにハマった人は参考にどうぞ。

- [Fix twitter-card image · snamiki1212/myblog@be8c756](https://github.com/snamiki1212/myblog/commit/be8c7566270da0eb8af2e89352231b142f0ce502)

## 🙅‍♂Netlify+GatsbyJS をおすすめしないケース

この技術スタックでの開発をおすすめしないケース

- 非エンジニアが構築するブログ

  - 素直に WordPress での自前実装か Medium/note/はてぶ...etc などのサービスを使うべき。背伸びをしても WordPress までにしておくべき。GatsbyJS のコミュニティ・技術が成熟していないものを非エンジニアが選定するのは「難易度が高い〜」のレベルではなく、もはや構築・メンテができないと思う。

- 記事を書くことに焦点を絞りたい人

  - Netlify の提供されている Sterter-kit をポチポチだけなら、かなり早くできる。ただ、そのあとにこだわり出すとそれなりに時間がかかる。ただし、要領が良い人やメンターが居る人や React チョットデキる人なら、かなり簡単に導入できると思うので、この技術スタックでも良いと思う。

- WordPress エンジニア

  - 「ブログ構築」ということで WordPress の延長かと思っていたが、技術スタックが WordPress からの延長ではなく完全にイマドキのフロントエンドの延長だった。そのため WordPress エンジニアがガチで始めると学習コストが高すぎると思う。WordPress エンジニアのキャリア傾向的にも攻めた技術よりも枯れた技術を狙う傾向があると思うので相性は微妙な気もするのでおすすめはしない。

## 🙆‍♀️Netlify+GatsbyJS をおすすめするケース

- WordPress で消耗している React 系ができるフロントエンド

  - WordPress だと WordPress 特有の動きからメンテが辛くなるケースがあると思う。だが、GatsbyJS では React で構築されている。そのため、React がわかる人ならメンテコストはかなり低い。

## 🤔 所感

React 勉強とブログ構築を行いたかったので Netlify+GatsbyJS での構築を行った。

やはりモダンな技術スタックだけあって、DeveloperExperience も尋常ではないレベルで良くサクサク実装できた。

WordPress で苦しんでいる人はぜひ乗り換えを検討しても良いと思う。
