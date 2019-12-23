---
title: 'VueでQiitaのアプリケーションを作った話'
cover: 'cover.png'
createdAt: '2019-04-20 23:55'
updatedAt: '2019-04-20 23:55'
category: 'Tech'
tags:
  - tech
  - Vue
slug: create-qiita-viewer-with-vue
---

# Vue で Qiita のアプリケーションを作った話

👉[Qiita Viewer with Vue](https://snamiki1212.github.io/exmaple-vue-qiita-viewer/)

![demo](./1.gif)

最近、時間を作って Vue 公式ドキュメントを読んでいて「基本」のパートを読み終えたので、[Til に一通り学習内容を整理した](https://github.com/snamiki1212/til/blob/master/vue/official_basic/index.md)。合わせて簡単な復習という位置づけでアプリを作成した。

- vue-cli(3.6.3)

Nuxt.js などは使ってない。理由はまだ学習初期なので、学習範囲を広げると収集がつかなくなると思われるので。

## Vue で Qiita のアプリケーションを作った話

QiitaAPI を叩いて表示するだけの Viewer アプリ。

[以前作った QiitaViewer with React](./create-qiita-viewer-with-react)と、まったく同じ機能。
以前は React で作ったが、今回は Vue で 0 から作る。

ハマりどころは何もなかった。

## ホスティング

規模が小さいアプリなので`gh-pages`の master ブランチ `/docs` を使用。

[公式ドキュメント](https://cli.vuejs.org/config/#publicpath) を見ながら、`vue.config.js` を作成。

```
// vue.config.js
module.exports = {
  publicPath: 'qiita-viewer-with-vue',
  outputDir: 'docs'
}
```

Vue のビルド環境は整ったのでビルド実行

`yarn build`

ビルドして生成された`/docs` を master ブランチにプッシュすれば公開完了。
ホスティングされたアドレス(今回だと、<https://snamiki1212.github.io/qiita-viewer-with-vue/>)にアクセスすれば表示される。

### 所感

勉強し始めて合計 2~3 日くらいではあるが、概念理解に苦しむことはまったくなかった。

特に、React ですでにコンポーネントの概念などを理解していたので、あとは Vue で表現すれば良いだけだったので。

また、以前作った[QiitaViewer with React](./create-qiita-viewer-with-react)と、あえて全く同じ機能にすることで QiitaAPI を調べたり、見た目を考える工程をスキップできたのは良かった。

よく言われる、「React は Simple、Vue は Easy」な点は v-model を学んだときに感じてたが、このレベルのアプリではやはり React よりも Vue のほうが気軽に作成できるように感じる。
