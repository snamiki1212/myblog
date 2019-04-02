---
title: "Netlify + Netlify CMS + GatsbyJS ( React + GraphQL )でブログ作ったときにハマった点"
cover: "201901032107_cover.png"
date: "2019-01-03 21:07"
category: "Tech"
tags:
    - tech
slug: create-blog-with-netlify-netlifycms-gatsbyjs
---

# Netlify + Netlify CMS + GatsbyJS ( React + GraphQL )でブログ作ったときにハマった点

掲題のJAM Stackの構成で作成した。構築の上でハマったところが何個かあったのでまとめておく。

## 🚀Netlify・Netlify CMS・GatsbyJSとは

そもそも、前提としてそれぞれの用語についての簡単な説明をしていく。

### [JAMStack](https://jamstack.org/)

アーキテクチャの１つ。JavaScript + APIs + Markupで構成されたシステム。

### [Netlify](https://www.netlify.com/)

ホスティングサービスの１つ。もし昔の自分にNetlifyを説明するなら　「静的サイト用heroku + CirclCIみたいなイケてるCIがall-in-oneで提供されているホスティングサービス」というイメージが一番しっくりくる。

### [Netlify CMS](https://www.netlifycms.org/)

CMSの１つ。特徴はOSSでcommunity-drivenなので健全なheadless CMS。contentfulと迷ったけど、まずは　Netlifyと親和性が高いNetlifyCMSにすることにした。こなれてきたら他のHeadlessCMSも使ってみようかな、と気軽にCMSを変えられるのもHeadlessCMSならではの良さ。ただ、結局CMSはほとんど使ってない。

### [GatsbyJS](https://www.gatsbyjs.org/)

静的サイトジェネレータの１つ。GraphQL + Reactが使われているのが特徴。WordPressと比較するとReactですべて書かれている分、メンテ性がかなり高い。が、逆にReact知らない人からすると学習コストもかなり高い。

## 💻Netlify・Netlify CMS・GatsbyJSでの構築

[Docs](https://www.netlify.com/docs/)とかのの通りに行えば良いので省略。

## 🤔Netlify・Netlify CMS・GatsbyJSで構築での問題・ハマったところ

ドキュメントの通り進めれば基本的に問題なく構築はできる。

構築の上でカスタムしていく上で問題や詰まったポイントがあったので備忘用に残す。

ちなみに下記のテーマをベースにブログを作り始めた。

» [Vagr9K/gatsby-material-starter: A high performance blog starter with Material design in mind for GatsbyJS.](https://github.com/Vagr9K/gatsby-material-starter)

### 【問題①】RSSが機能しない

結論：使っていたテーマのバグ。用意されているconfigをそのまま使うとRSSがinvalidなデータ構造になってしまうので修正が必要。

RSSを設定して記事をポストしてもリーダーがRSSを取得しないため、

- RSSリーダーのせい？
- RSSの内容のせい？
- そもそも根本的に何か必要なところが抜けている？

みたいに苦しんだ。

何はともあれ切り分けのために下記の解析ツールから使うべきだった。

» [W3C Feed Validation Service, for Atom and RSS](https://validator.w3.org/feed/)

この解析サイトでRSSのデータ構造的がinvalid / validかを判断してくれる。
その結果、「successful!!」とはならず、「invalidなデータがあるよ〜」となっていた。
原因は、author タグがitemタグの外に定義されているのでinvalidなデータになっていたところ。

このテーマのフォーク元の方に[雑な感じでPR出しておいた](https://github.com/Vagr9K/gatsby-advanced-starter/pull/49)が、少なくとも自分の環境では直っているのでこれで解決。
→ Fixしてもらえました(2019/04/02)

ちなみに、RSSが準備されているように見えて実は動かない状態、となっているわけだが、PRを出した先はGatsbyJSのトップページに載っているくらい勢いのあるものだった。
「先端の技術スタックを選んだ際は、こういうのとも戦わないと行けないんだよなー」というケースとぶつかれたのは良かった。ハマった時は辛かったが。



### 【問題②】記事の予約投稿ができない問題

結論：予約する必要が無いので特に解決しなかった。

ただ、解決方法や案は色々調べたり考えたのでまとめておく。実装したわけではなく机上の空論になっている可能性もあるかもしれないのであしからず。

＜対応案＞

1. フロントのロジックで非表示にして`watchable_at`の時間を過ぎたら表示する

    - 事前にデプロイしておきフロントのロジックで表示させない方法。セキュアな要件もないしこれで良いかなー、と思ったが、デプロイ時に行われるGatsbyJS buildの時点でRSSが生成されてしまうので没案。そもそも、脳筋なやり方なので微妙ですね。

2. ZapierのスケジューラとWebhookでNetlifyのビルドを行う

   - 【原案】[Auto trigger deploys on Netlify](https://flaviocopes.com/netlify-auto-deploy/)
   - 【概要】事前に記事はgithub上にあげておく。Zapierで定期スケジュールを仕込む。Zapierの定期スケジュールでNetlifyのビルドが実行される。
   - 【問題】時間単位でのデプロイとなるため、記事単位でのデプロイが出来ない？と思われる（詳細は調べてないので本当に出来るかも微妙）。

3. ServerlessによるスケジューラをキックにPRのマージでデプロイを行う  

    - [netlify/www-post-scheduler: This is a serverless function to auto publish blog posts](https://github.com/netlify/www-post-scheduler)
    - 【概要】Serverlessを使ってスケジューラシステムを構築→指定した時間にPRがmergeされる。
    - 【所感】PR単位での投稿が可能なのは良い。また、Netlifyのリポジトリになってるの公式の見解としてこの方法を推奨している模様。ただ、個人的には予約投稿のためだけにserverless＋AWSはオーバースペックな気がする。せっかくEntlify＋Gatsbyで管理するサーバもない状況なのにスケジューラを建てなくはない。ちなみに、仕組みはdynamoDBにてスケジュール持ち情報を持ち、Lambdaで実行、というシンプルな仕組みみたい。

4. Herokuにてスケジューラを構築してNetlifyのビルドを実行する

   - 【原案】[NetlifyとHerokuで予約投稿機能を実現する | WEB EGG](https://blog.leko.jp/post/automate-build-netlify-with-heroku/)
   - 【概要】Herokuを使ってcron作成してスケジューラを実現。
   - 【問題】せっかくNetlifyを使って管理するサーバを減らしたのに専用のサーバ立てるのは嫌なので没。

5. 記事に公開日を指定してGatsbyのビルド時にチェックかつNetlifyのビルドを定期的に行う

   - 【原案】[Scheduling Hugo posts on Netlify • Jerrie Pelser's Blog](https://www.jerriepelser.com/blog/scheduling-hugo-posts-on-netlify/)
   - 【概要】記事毎にビルド対象時刻をハンドリングできるGatsbyのpluginを作成+Zapierで定期ビルド
   - 【所感】Hugoでは`publish_date`を過ぎていない記事はbuildされないみたいなので、同様にGatsbyJSでも作る。その上で、Zapierで定期的にNetlifyのビルドを実行する。そうなると、例えば、1hごとにビルドを実行→公開時間を過ぎていればその記事がビルド対象に含まれてビルド→公開、という流れになる。ビルド間隔が定期的＋事前にコードプッシュしておけば自動的にリリースされる仕組み＋実装コストが（たぶん）低い＋管理コストが低い、という観点からこの方法が一番良さそうだった。

### 【問題③】excerptが正常に表示されない

結論：non-latin language用の対応しないといけない。

excerptとは、「抜粋」で例えばブログ記事の一覧を表示したときそれぞれのプログ記事の先頭行数分を抜粋して表示するようなもの。このexcerptの表示だが正常に表示されなかった。ただ、その対応についてtrouble shootingに書いてあるので「GraphQLのqueryをexcerpt からexcerpt(truncate: true)にするように」とのこと。欲を言えばデフォルトで設定しておいてほしいが・・・。調べればわかるものだったので許容範囲。

» [gatsby-transformer-remark | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)


### 【問題④】Twitter-cardに画像が正常に表示されない

結論：使っていたテーマが壊れているので改修が必要

Twitter-cardとは、TwitterでURLを貼った時にTwitter上で表示されるURL画像などの情報セット。Twitter-cardの画像が正常に反映されなくて見てみたら使っているテーマが画像Urlを正しく表現出来ていないのが原因だった。すでに自分のブログ用に色々コミットした後だったので元のテーマへのPRは出していないので、直した時のコミットリンクを残しておくので同じようにハマった人は参考にどうぞ。

- [Fix twitter-card image · snamiki1212/myblog@be8c756](https://github.com/snamiki1212/myblog/commit/be8c7566270da0eb8af2e89352231b142f0ce502)

## 🙅‍♂Netlify+GatsbyJSをおすすめしないケース

この技術スタックでの開発をおすすめしないケース

- 非エンジニアが構築するブログ

  - 素直にWordPressでの自前実装かMedium/note/はてぶ...etcなどのサービスを使うべき。背伸びをしてもWordPressまでにしておくべき。GatsbyJSのコミュニティ・技術が成熟していないものを非エンジニアが選定するのは「難易度が高い〜」のレベルではなく、もはや構築・メンテができないと思う。

- 記事を書くことに焦点を絞りたい人

  - Netlifyの提供されているSterter-kitをポチポチだけなら、かなり早くできる。ただ、そのあとにこだわり出すとそれなりに時間がかかる。ただし、要領が良い人やメンターが居る人やReactチョットデキる人なら、かなり簡単に導入できると思うので、この技術スタックでも良いと思う。

- WordPressエンジニア

  - 「ブログ構築」ということでWordPressの延長かと思っていたが、技術スタックがWordPressからの延長ではなく完全にイマドキのフロントエンドの延長だった。そのためWordPressエンジニアがガチで始めると学習コストが高すぎると思う。WordPressエンジニアのキャリア傾向的にも攻めた技術よりも枯れた技術を狙う傾向があると思うので相性は微妙な気もするのでおすすめはしない。

## 🙆‍♀️Netlify+GatsbyJSをおすすめするケース

- WordPressで消耗しているReact系ができるフロントエンド

  - WordPressだとWordPress特有の動きからメンテが辛くなるケースがあると思う。だが、GatsbyJSではReactで構築されている。そのため、Reactがわかる人ならメンテコストはかなり低い。

## 🤔所感

React勉強とブログ構築を行いたかったのでNetlify+GatsbyJSでの構築を行った。

やはりモダンな技術スタックだけあって、DeveloperExperienceも尋常ではないレベルで良くサクサク実装できた。

WordPressで苦しんでいる人はぜひ乗り換えを検討しても良いと思う。
