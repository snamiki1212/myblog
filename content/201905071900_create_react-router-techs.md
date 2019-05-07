---
title: 'react-routerを使ってサンプルアプリを作った'
cover: '201905071900_cover.jpg'
date: '2019-05-07 19:00'
category: 'Tech'
tags:
  - tech
  - react
  - 'react-router'
  - typescript
slug: create-react-router-techs
---

# react-router を使ってサンプルアプリを作った

react-router を使ってサンプルアプリを作ったので、その過程をまとめ。

[Github](https://github.com/snamiki1212/react-router-techs) / [アプリ](https://snamiki1212.github.io/react-router-techs/)

![react-router-sample-app](201905071900_1.gif)

## 使った技術群

新しく学んだのは`react-router`のみ

他には下記を使用。

- React
- TypeScript
- gh-pages：デプロイ・ホスティング

## 学んだこと

- リクエストせずにページ遷移を実現する HistoryAPI をコア機能としていて、SPA はすべて作られている。
- すべてのコンポーネント HistoryAPI が使えるように、`<BrowserRouter>`でラッピングする。

- a タグでページ遷移を書くと、そのページ自体の JS 再読込してしまうので、Link モジュールを使って擬似的なページ遷移を行う。

- SPA における Routing は、url に応じて紐づく component を表示することで実現する。

## 所感

考え方自体は MVC における Routing と同じだった。そのため、概念的に新しく理解することは無い。なので、モジュールが提供している API 群の使い方を覚えることがメインだったので、学習コストは低そう。また、実務を通じて必要な機能はドキュメントを参照しながら、学習を継続するのが、効率が良さそう。
