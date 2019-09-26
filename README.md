[![Netlify Status](https://api.netlify.com/api/v1/badges/fce06c01-d793-4026-8a48-ef4946156434/deploy-status)](https://app.netlify.com/sites/snamiki1212/deploys)

![Twitter Follow](https://img.shields.io/twitter/follow/snamiki1212?style=social)

📝 My blog → https://snamiki1212.com 

## Tech

🚀 Tech Stack → [![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/snamiki1212/lunash)

### `gatsby-node.js`

- TypeScript をネイティブにサポートしていないので、TSファイルをrequire している。
- `/gatsbyjs` にて TSファイルで定義している。

### `src/components`

- AtomicDesign でディレクトリとコンポーネントを配置

### `src/pages`

gatsbyJS の規約で /pages 配下にあるページは動的に生成される。

## Usage

Create `.env.development` from `.env` and secure-data.

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
