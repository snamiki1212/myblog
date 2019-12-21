![logo](https://user-images.githubusercontent.com/26793088/68081525-8b56b680-fe52-11e9-8170-f88e345359da.png)


This repository is My blog's. | https://snamiki1212.com 
--|--
Deploy Status | [![Netlify Status](https://api.netlify.com/api/v1/badges/fce06c01-d793-4026-8a48-ef4946156434/deploy-status)](https://app.netlify.com/sites/snamiki1212/deploys)
Twitter | ![Twitter Follow](https://img.shields.io/twitter/follow/snamiki1212?style=social)
Tech Stack | [![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/snamiki1212/lunash)

## Director

```sh
/myblog
  /contents # ブログ記事
  /types    # TSの型
  /static   # 静的ファイル
  /scripts  # シェル系
  /data     # constantな値
  /src      # アプリケーション

  # build結果
  /public
  /node_modules
  /.cache

  # config
  /.github
  /.vscode
```
## Memo

- `gatsby-node.js`
  - TypeScript をネイティブにサポートしていないので、TSファイルをrequire している。
  - `/gatsbyjs` にて TSファイルで定義している。

- `src/components`
  - AtomicDesign でディレクトリとコンポーネントを配置

-  `src/pages`
  - gatsbyJS の規約で /pages 配下にあるページは動的に生成される。

## TODO

- General
  - [ ] AMP を入れる
  - [x] SASS を除去する
  - [x] prism を整理する
  - [x] gatsbyjs の設定周りを整理する
  - [ ] TypeScript フレンドリーにする（特にGatsbyJSとPropsの値）
  - [x] /src 配下のディレクトリ構造を整理する
    - [x] /layout を消したい
    - [ ] ~/pages を消したい~
    - [ ] ~/templates を消したい~
- CSS
  - [x] code style
  - [x] more clickable bottom-link
  - [x] block-quote
  - [x] optimize twitter card of link image
  - [x] use .env at Google analytics ID
  - [ ] optimize post css
- CI
  - [ ] speed test
  - [ ] validate RSS format at https://validator.w3.org/feed/check.cgi?url=https%3A%2F%2Fsnamiki1212.com%2Frss.xml
- Page
  - [ ] About me at top page
  - [ ] Link to .md at this repository
- Feature
  - [ ] Search (MEMO: https://blog.leko.jp/post/implement-site-search-with-algolia/)
