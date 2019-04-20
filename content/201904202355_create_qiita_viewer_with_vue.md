---
title: "VueでQiitaのアプリケーションを作った話"
cover: "201904202355_cover.png"
date: "2019-04-20 23:55"
category: "Tech"
tags:
    - tech
    - Vue
slug: create-qiita-viewer-with-vue
---

# VueでQiitaのアプリケーションを作った話

👉[Qiita Viewer with Vue](https://snamiki1212.github.io/qiita-viewer-with-vue/)

暇な時間を使って Vue 公式ドキュメントを読んでいて「基本」のパートを読み終えて[Tilに一通り学習内容を整理した](https://github.com/snamiki1212/til/blob/master/vue/official_basic/index.md)ので、簡単な総復習という位置づけで、約一日ほどでこのアプリを作成した。

- vue-cli(3.6.3)

また、Nuxt.jsなどは使ってない。理由は、まだ学習初期の時点なので、そこまで大袈裟にアプリを大きくさせて、学習範囲を広げると収集が付かなくなると思われるので。

## アプリケーション

QiitaAPI を叩いて表示するだけのViewerアプリ。

以前作った[QiitaViewer with React](./create-qiita-viewer-with-react)と、全く同機能。
これをReactではなく、Vueで0から作る。

## ホスティング

規模が小さい超簡単なポートフォリオなので`gh-pages`のmaster ブランチ `/docs` を使用。

Vue側の設定から。 [公式ドキュメント](https://cli.vuejs.org/config/#publicpath) を見ながら、`vue.config.js` を作成。

```
module.exports = {
  publicPath: 'qiita-viewer-with-vue',
  outputDir: 'docs'
}
```

これで、Vue側のビルド環境は整ったのでビルド実行

`yarn build`

ビルドして生成された`/docs` を master ブランチにPush。
ホスティングされたアドレス(<https://snamiki1212.github.io/qiita-viewer-with-vue/>)にアクセスすれば、無事公開完了。

### 所感

勉強し始めて合計2~3日くらいではあるが、Reactですでにコンポーネントの概念などを理解していたので、あとは Vue で表現すれば良いだけなので、概念理解に苦しむことはまったくなかった。

また、以前作った[QiitaViewer with React](./create-qiita-viewer-with-react)と、あえて全く同じ機能にすることで QiitaAPI を調べたり、Viewを考える工程をスキップできたのは良かった。

