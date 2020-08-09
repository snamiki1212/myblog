![logo](https://user-images.githubusercontent.com/26793088/71515007-85c29d80-28e4-11ea-970c-7c0d8f2093bd.png)

| This repository is My blog's. | https://snamiki1212.com                                                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deploy Status                 | ![Netlify](https://github.com/snamiki1212/myblog/workflows/Netlify/badge.svg?branch=master)
| Twitter                       | ![Twitter Follow](https://img.shields.io/twitter/follow/snamiki1212?style=social)                                                                                |
| Tech Stack                    | [![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/snamiki1212/lunash)                                          |

## Usage:

```zsh
$ yarn global add gatsby-cli
```

## Directory

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

- `/gatsby-node.js`

  - TypeScript をネイティブにサポートしていないので、TS ファイルを require している。
  - `/gatsbyjs` にて TS ファイルで定義している。

- `/src/components`

  - AtomicDesign でディレクトリとコンポーネントを配置

- `/src/pages`
- gatsbyJS の規約で /pages 配下にあるページは動的に生成される。

- `[class=affi-custom-button]`

  - アフィ用のボタン CSS

- [PR Scheduler](https://www.prscheduler.com/docs)
  - 記事の投稿用のスケジューラとして使う。
  - `@prscheduler 13/10/2019T10:10` と PR に対してコメントすれば OK
  - `<dat>/<month>/<year>`
  - UTC タイムなので、[これ](http://www.timebie.com/timezone/universaljapan.php)とかで計算。
  - 例: `@prscheduler 15/01/2020T00:00` ⇒ 日本時間 09:00

- `package.json`
  - `rehype-react`: ver4系でないとうまく動かない。ver6系だとunifiedを組み合わせないといけない。ver5系はまだチェックしてない。

## Img

-  いろいろ

  - [2019 年間ベスト！Web 制作を変える便利オンラインツール厳選 85 個 - PhotoshopVIP](http://photoshopvip.net/119896)

  - クレジット不要な画像集

    - [商用利用も安心！無料イラストが見つかるフリー素材サイト 36 個まとめ【保存版】 - PhotoshopVIP](http://photoshopvip.net/115273#tip2)
    - [パリの美術館所蔵の 10 万点以上のアート作品画像が無料取得、商用利用が可能に - KAI-YOU.net](https://kai-you.net/article/70889)
    - [無料で美麗な絵画やカオスなポスターなどがダウンロードし放題、編集や商用利用も可能な「Artvee」が登場 - GIGAZINE](https://gigazine.net/news/20200612-artvee-public-domain-art/)
    - [無料かつロイヤリティフリーなアニメーションつきベクター画像をダウンロード可能な素材サイト「Pixel True」 - GIGAZINE](https://gigazine.net/news/20200806-pixeltrue/)

  - カラーパレット系
    - [【2020 年版】もう配色デザインには迷わない！すごい無料カラーパレットツール 59 個まとめ - PhotoshopVIP](http://photoshopvip.net/72189)

## Workflow

```
 |
 V
[Github Actions]
 |- Build
 |- Deploy To Netlify
 V
[Netlify]
 |- Hosting
 V
 finish!
```

## TODO

- General
  - [ ] AMP を入れる
  - [x] SASS を除去する
  - [x] prism を整理する
  - [x] gatsbyjs の設定周りを整理する
  - [ ] TypeScript フレンドリーにする（特に GatsbyJS と Props の値）
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
