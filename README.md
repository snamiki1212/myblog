<!-- Header -->
<div align="center">
<img src="https://user-images.githubusercontent.com/26793088/127581364-127a0134-0dc4-4298-9fe5-72188842a6ad.png" alt="header" />
</div>
<!-- /Header -->

<!-- Badges -->

![Build(& Deploy to Netlify)](https://github.com/snamiki1212/myblog/workflows/Build%20&%20Deploy%20to%20Netlify/badge.svg)
![Twitter Follow](https://img.shields.io/twitter/follow/snamiki1212?style=social)
[![StackShare](http://img.shields.io/badge/Stackshare-teckstaks-0690fa.svg?style=flat)](https://stackshare.io/snamiki1212/lunash)

<!-- /Badges -->

## Overview

Nash's Blog Repository created with [gatsby-starter-lunash](https://github.com/snamiki1212/gatsby-starter-lunash).

## Usage: Installation

```zsh
$ git clone <this-repo>
$ git remote add origin  <this-repo>
$ git remote add starter <this-original-starter-repo> # https://github.com/snamiki1212/gatsby-starter-lunash

# package
$ yarn global add gatsby-cli
$ yarn
$ yarn start
```

## Usage: Git

```zsh
# if you want to follow updated-version starter
$ git fetch starter/master
$ git merge starter/master --no-ff --no-commit
```

## Directory

```sh
/myblog
  /contents        # ブログ記事
  /data            # constantな値
  /gatsby-node     # 静的ファイルへのBuild時のGatsby処理
  /src             # アプリケーション
  /static          # 静的ファイル

  # build result -------------
  /node_modules     # packages
  /public           # gatsbyにて生成
  /.cache           # gatsbyにて生成
  /types            # TSの型。gatsby-plugin-tsにて生成。

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

<table>
  <tr>
    <td>Directory</td>
    <td>Content</td>
  </tr>
  <tr>
    <td><code>/gatsby-node</code></td>
    <td>TypeScript をネイティブにサポートしていないので、TS ファイルを require している。</td>
  </tr>
  <tr>
    <td><code>/src/components</code></td>
    <td>AtomicDesign でディレクトリとコンポーネントを配置</td>
  </tr>
  <tr>
    <td><code>/src/pages</code></td>
    <td>gatsbyJS の規約で /pages 配下にあるページは動的に生成される。</td>
  </tr>
</table>

## Memo:

- `[class=affi-custom-button]`
  - アフィ用のボタン CSS
- GraphQL
  - Fragment: GraphQL にて複数の要素を１つの塊として定義したもの。
  - `markdownRemark` > frontmatter > cover > childImageSharp > fluid 配下にて、`GatsbyImageSharpFluid`Fragment が効かないので、Fragment が指す内容を直接取得。allMarkdownRemark の配下では Fragment が取得できてるので Plugin の問題かも？

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

## Note

- このリポジトリは [GitHub - snamiki1212/gatsby-starter-lunash](https://github.com/snamiki1212/gatsby-starter-lunash) をベースに作成していて常に更新を取り込みながら git 管理している。
- このリポジトリでは下記のことについてのみ関心を持っている
  - ブログ記事
  - デプロイ周り(github-actions)
  - このブログの config
  - この README
- 上記以外の内容（gatsby-node、component）などもこの repo で管理しているが、それらは starter/master にて管理しているので、latest をこの repo の master に merge する運用にしてる。

## LICENSE

Don't use this code.

Instead, use this template -> [GitHub - snamiki1212/gatsby-starter-lunash: Lunash (gatsby-starter)](https://github.com/snamiki1212/gatsby-starter-lunash).
