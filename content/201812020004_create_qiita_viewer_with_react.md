---
title: 'ReactでQiitaのアプリケーションを作った話'
cover: '201812020004_cover.png'
date: '2018-12-02 00:04'
category: 'Tech'
tags:
  - tech
  - React
slug: create-qiita-viewer-with-react
---

# React で Qiita のアプリケーションを作った話

完全に勉強用のためだけにアプリケーションを作ったのでその学びのまとめ。

## 作ったもの

[Qiita Viewer with React](https://snamiki1212.github.io/qiita-viewer-with-react/)というものを作成した。

これは[Qiita の記事一覧を返す API](https://qiita.com/api/v2/docs#get-apiv2items)を叩いてその結果を表示するだけのアプリケーションでサービスとしての価値は皆無。

![qiita-viewer-with-react](./201812020004_1.gif)

<!-- TwitterLink -->
<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-lang="ja"><p lang="ja" dir="ltr">1個目<br><br>0→1での初Reactアプリ<br>Qiitaを表示するやつ作った<a href="https://t.co/ctMNFNxodc">https://t.co/ctMNFNxodc</a> <a href="https://t.co/ldNMSNE2Mj">pic.twitter.com/ldNMSNE2Mj</a></p>&mdash; Namiki🌏Webエンジニア (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1069107634622541824?ref_src=twsrc%5Etfw">2018年12月2日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- TwitterLink -->

- [Qiita Viewer with React](https://snamiki1212.github.io/qiita-viewer-with-react/)

- [Github](https://github.com/snamiki1212/qiita-viewer-with-react)

## 使ったもの

- React

  - create-react-app
  - Class Components

- SASS
- Github Pages

## 使わなかったもの

- Functional Components
- Redux
- TypeScript

## 学んだこと

- React
  - setState
- JavaScript
  - fetch API
- CSS
  - flex

## まとめ

Promise の使い方、fetchAPI の使い方、React での値の更新方法、flex の考え方、などを学べた。

Udemy で React の触りは理解していたしこのサイト自体も React(Gatsby)で作成した時にデザインをちょろちょろ変えたのでなんとなく出来るかなーと思っていたけど色々ハマった。React もだがそれ意外のところでも色々と詰まったので、やはり手を動かして学ぶのは良い。

## Reference

1. [create-react-app で SASS ファイルを使う方法 - Qiita](https://qiita.com/chieeeeno/items/1dda5c47d4f1e36408e8)
2. [Java - react render から Promise で html タグ取ってくると戻り値が Object になりエラーになってしまう｜ teratail](https://teratail.com/questions/65202)
