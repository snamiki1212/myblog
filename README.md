[![Netlify Status](https://api.netlify.com/api/v1/badges/fce06c01-d793-4026-8a48-ef4946156434/deploy-status)](https://app.netlify.com/sites/snamiki1212/deploys)

![Twitter Follow](https://img.shields.io/twitter/follow/snamiki1212?style=social)

📝 My blog → https://snamiki1212.com 

## Tech

- Architecture
  - Gatsbyjs / React / TypeScript
  - No Class Components, Only Functional Components
  - Atomic Design

- stack
  - CSS: styled-components
  - CSS: material-UI
  - ICON: fontawesome

### `gatsby-node.js`

- TypeScript をネイティブにサポートしていないので、TSファイルをrequire している。
- `/gatsbyjs` にて TSファイルで定義している。

### `/src/components`

- AtomicDesign でディレクトリとコンポーネントを配置

## Usage

Create `.env.development` from `.env` and secure-data.

## TODO

- General
  - [ ] AMP を入れる
  - [ ] SASS を除去する
  - [x] prism を整理する
  - [ ] gatsbyjs の設定周りを整理する
  - [ ] TypeScript フレンドリーにする（特にGatsbyJSとPropsの値）
  - [ ] /src 配下のディレクトリ構造を整理する
    - [ ] /layout を消したい
    - [ ] /pages を消したい
    - [ ] /templates を消したい
- CSS
  - [ ] Re-create Thema like as medium
  - [x] code style
  - [x] more clickable bottom-link
  - [x] block-quote
  - [ ] optimize twitter card of link image
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
