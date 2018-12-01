---
title: "ReactでQiitaのアプリケーションを作った話"
cover: "201812020004_cover.png"
date: "2018-12-02 00:04"
category: "service"
tags:
    - service
slug: create-qiita-viewer-with-react
---

# ReactでQiitaのアプリケーションを作った話

完全に勉強用のためだけにアプリケーションを作ったのでその学びのまとめ。


## 作ったもの

[Qiita Viewer with React](https://snamiki1212.github.io/qiita-viewer-with-react/)というものを作成した。

これは[Qiitaの記事一覧を返すAPI](https://qiita.com/api/v2/docs#get-apiv2items)を叩いてその結果を表示するだけのアプリケーションでサービスとしての価値は皆無。


![qiita-viewer-with-react](./qiita.gif)

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

Promiseの使い方、fetchAPIの使い方、Reactでの値の更新方法、flexの考え方、などを学べた。

UdemyでReactの触りは理解していたしこのサイト自体もReact(Gatsby)で作成した時にデザインをちょろちょろ変えたのでなんとなく出来るかなーと思っていたけど色々ハマった。Reactもだがそれ意外のところでも色々と詰まったので、やはり手を動かして学ぶのは良い。
