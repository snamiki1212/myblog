![logo](https://user-images.githubusercontent.com/26793088/71515007-85c29d80-28e4-11ea-970c-7c0d8f2093bd.png)

| This repository is My blog's. | https://snamiki1212.com                                                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build Status                 | ![Build(& Deploy to Netlify)](https://github.com/snamiki1212/myblog/workflows/Build%20&%20Deploy%20to%20Netlify/badge.svg)
| Deploy Status                 | ![Netlify](https://github.com/snamiki1212/myblog/workflows/Netlify/badge.svg?branch=master)
| Twitter                       | ![Twitter Follow](https://img.shields.io/twitter/follow/snamiki1212?style=social)                                                                                |
| Tech Stack                    | [![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/snamiki1212/lunash)                                          |

## Usage:

```zsh
$ yarn global add gatsby-cli
$ yarn
$ yarn start
``` 

## Directory

```sh
/myblog
  /contents    # ブログ記事
  /data        # constantな値
  /gatsby-node # 静的ファイルへのBuild時のGatsby処理
  /scripts     # シェル系
  /src         # アプリケーション
  /static      # 静的ファイル
  /types       # TSの型

  # build result -------------
  /public
  /node_modules
  /.cache

  # etc -------------
  /.github
  /.vscode
  /__mock__ # jestでのテスト時のasset用のmockとか
```

## Workflow

```
CODE PUSH
 |
 V
[Github Actions]
 | |- Build
 | |- Deploy To Netlify
 |
 V
[Netlify]
 | |- Hosting
 |
 V
DONE
```

## Memo: Directory

dir | Explain
---|---
`/gatsby-node` | TypeScript をネイティブにサポートしていないので、TS ファイルを require している。
`/src/components` | AtomicDesign でディレクトリとコンポーネントを配置
`/src/pages` | gatsbyJS の規約で /pages 配下にあるページは動的に生成される。

## Memo: etc

- `[class=affi-custom-button]`

  - アフィ用のボタン CSS

- [PR Scheduler](https://www.prscheduler.com/docs)
  - 記事の投稿用のスケジューラとして使う。
  - `@prscheduler 13/10/2019T10:10` と PR に対してコメントすれば OK
  - `<dat>/<month>/<year>`
  - UTC タイムなので、[これ](http://www.timebie.com/timezone/universaljapan.php)とかで計算。
  - 例: `@prscheduler 15/01/2020T00:00` ⇒ 日本時間 09:00
- GraphQL
  - Fragment: GraphQLにて複数の要素を１つの塊として定義したもの。
  - `markdownRemark` > frontmatter > cover > childImageSharp > fluid 配下にて、`GatsbyImageSharpFluid`Fragmentが効かないので、Fragmentが指す内容を直接取得。allMarkdownRemarkの配下ではFragmentが取得できてるのでPluginの問題かも？

## MEMO: Images

- 画像

  - [2019 年間ベスト！Web 制作を変える便利オンラインツール厳選 85 個 - PhotoshopVIP](http://photoshopvip.net/119896)

  - クレジット不要な画像集

    - [商用利用も安心！無料イラストが見つかるフリー素材サイト 36 個まとめ【保存版】 - PhotoshopVIP](http://photoshopvip.net/115273#tip2)
    - [パリの美術館所蔵の 10 万点以上のアート作品画像が無料取得、商用利用が可能に - KAI-YOU.net](https://kai-you.net/article/70889)
    - [無料で美麗な絵画やカオスなポスターなどがダウンロードし放題、編集や商用利用も可能な「Artvee」が登場 - GIGAZINE](https://gigazine.net/news/20200612-artvee-public-domain-art/)
    - [無料かつロイヤリティフリーなアニメーションつきベクター画像をダウンロード可能な素材サイト「Pixel True」 - GIGAZINE](https://gigazine.net/news/20200806-pixeltrue/)

  - カラーパレット系
    - [【2020 年版】もう配色デザインには迷わない！すごい無料カラーパレットツール 59 個まとめ - PhotoshopVIP](http://photoshopvip.net/72189)



## TODO:

- ~FIX: undisplay suggestion article images~
- ~Refactor: gatsby-node/ts~
- Test for markdown2react util
- Type by GraphQL
- AMP
- CSS: optimize post css
- CI: cache
- CI: speed test
- CI: RSS checker