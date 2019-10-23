---
title: 'ContextからReduxへ移すに辺り、ReduxのState設計について調べた内容のまとめ'
cover: 'cover.png'
date: '2019-10-23 00:00'
category: 'Tech'
tags:
  - React
  - Redux
  - Hooks
slug: investigate-redux-state-architecture
---

# ContextからReduxへ移すに辺り、ReduxのState設計について調べた内容のまとめ

この記事は、Reduxのstate設計について調べた内容になります。

背景として、自分の携わっているサービスにて、ContextAPIを使ってグローバルステートを管理していた。
が、サービスのグロースにてデータ構造的に無理が生じ始めたので、State整理に伴って、これを機にReduxへの切り替えを行った。
そのときに、調べたことをまとめる。

## 公式ドキュメントを調べる

![cover-1-public](1.jpg)

何はともあれ、公式のドキュメントを調べる。ドキュメントを呼んだ結果をだいたいまとめた。

### 公式Doc: [Normalizing State Shape · Redux](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)

- データは正規化させる。
  - データ構造をネストさせない。
  - IDで参照させる。
  - リストよりも、オブジェクトでID参照させる。
- グルーピングして正規化させる
  - Storeを、/entites、/ui、/domain、で分割する
  - 公式Docだと、文章がメインで具体例が少なすぎてわかりにくいが、「それぞれにどんな役割か？」は、後述の「スタートアップテック」さんのスライドがわかりやすかった。
- 正規化にてデータ群を、リストからIDをKeyにしたオブジェクトに変換させる。
  - これと合わせて、IDだけを保持したリストの`all_ids`を保持しておく
  - all_idsが存在する理由は順序を保存したいため。
  - REF: https://stackoverflow.com/questions/42238802/redux-many-to-many-relationship/42257112?noredirect=1#comment71675068_42257112


```ts
// Userを例に正規化
// 正規化前
[
  {id: qwer, name: tanaka},
  {id: asdf, name: sato  },
]

// 正規化後
{
  qwer: {
    id: qwer,
    name: tanaka
  },
  asdf: {
    id: asdf,
    name: sato
  },
  allIDs: ['qwer', 'asdf']
  ...
}
```

### 公式Doc: [Basic Reducer Structure · Redux](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure)

- Domain, App, UI の３つのStateに大きく分ける。
  - Domain: entites的なやつ。 Rawなデータ
  - App: アプリの振る舞いに依存するもの。SelectedやLoadingなど。
  - UI: Presentetional層で表示に特化したもの。
- 「stareの形」のことをshapeと呼ぶ。
- 「スライス」＝「Storeにおけるサブツリー」のこと。

## State設計にまつわる記事を読む

![cover-2-private](2.jpg)

他にも記事をいろいろ探して読んでみた。

### スライド: [reduxのstate設計の話 - スタートアップテック](https://www.slideshare.net/ayatas0623/reduxstate-129830690)

- DomainStateとUIStateでStateを分ける（画面かドメイン）。それぞれの分け方でメリデメがあるので整理。
- 大きく、/entites、/domains、/uiの３つのツリーの種類に分けてる。
- entitesへの正規化では、idをkeyにしたオブジェクト化をしてる。またリレーションデータは実データではなくて、リレーショナルにIDで参照。

### スライド: [ReduxのState設計のお話 - Retty](https://www.slideshare.net/ssuser7a5814/reduxstate)

- APIのReponseとStateとの観点で、Stateを考える話。
- シンプルなアプリなら `[Responseデータ] -> [State]` でよいが、複雑なアプリ・データでは愚直に1vs1対応をすると非正規化が発生する。
- RDS的にデータを保持させるのがベターとの判断。
- 「Element層」というのを作ってAPIの変化に対応。`[API] → |FRONTEND| → [Response] → [Element] → [View]`

### [Redux Architecture Guidelinesを読んでの所感](https://medium.com/@mah_lab/redux-architecture-guidelinesを読んでの所感-b64f6817bc4b)

- redux/action設計についての基本的な考え。
- オブジェクトの入れ子を避ける
- UI用データをStateに保存しないで、Rawデータを入れる



### [Twitter公式サイトのRedux Store設計を少しだけ読み解いてみる](https://qiita.com/oi5u/items/4e2c5bc1d546be1b1c5d)

- TwitterのState設計を見て、設計を考察。
- normalizerというライブラリでResを正規化。https://github.com/paularmstrong/normalizr
- /entitesの配下にてResponseRawデータ管理。
- /entities配下にて、loading管理をしている。

### [Dissecting Twitter’s Redux Store - Statuscode - Medium](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1)

- /entities/tweets/entities に、１つ１つのツイートのRawデータ
- /homeTimelines/timeline に、タイムラインのデータを格納

### [React/Reduxの設計に関する参考記事まとめ - dackdive&#39;s blog](https://dackdive.hateblo.jp/entry/2017/04/24/133955)

- この記事みたいなの。自分が見つけられなかった記事がいろいろあったので、助かった。


## あとがき

![cover-last](cover.png)

### まとめ

- 正規化をする。リストからオブジェクトにしてアクセッサビリティを担保する。DRYを重視して、リレーショナルに設計する
- 公式ではloadingステートはAppStateだが、TwitterではEntities配下にあったりするので、ベストプラクティスがまだ確立されてないようにも思える。ある程度は選択して決める

### 所管

ContextからReduxへのリプレイスでState周りを色々調べたが、「そもそもContextでのState設計をよりきちんと行えればReduxへのリプレイスせずとも良かったのでは？」というのが一通り開発が終わってからの印象。

- ReduxWayを進める派

<blockquote class="twitter-tweet" data-conversation="none"><p lang="ja" dir="ltr">個人的に Context と Redux の併用は、Redux の思想である Single Source of Truth に反するのでやるべきではないと考えてます。UIに関する状態のみを State Hook で持たせ、あとは Redux で一貫して管理というのが初心者も混乱せずいいと思ってます。</p>&mdash; 大岡由佳『りあクト!🔥Firebase編』Boothで好評販売中! (@oukayuka) <a href="https://twitter.com/oukayuka/status/1123849193653714945?ref_src=twsrc%5Etfw">May 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- ContextWayを進める派

<blockquote class="twitter-tweet" data-conversation="none"><p lang="ja" dir="ltr">hooks時代のreactは基本的にanti single global stateのようで、local states+contextsが基本だと思います。reduxの出番はactionによるseparation of concernsが必要になる大規模アプリに限定されると思います。reduxの用途は無くなりませんが、これまではoveruseされたという解釈です。</p>&mdash; Daishi Kato (@dai_shi) <a href="https://twitter.com/dai_shi/status/1123859947643654144?ref_src=twsrc%5Etfw">May 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


ReduxWayによるState設計は、ひとまずのベストプラクティスが確立されているように思える。が、ReactHooksについては、登場したばかりで情報が少ないので、設計指針がわからなかった。

「ローカルで表現できるものはuseStateで、グローバルにしないと表現が厳しいものはContextに、」を指針に、でサービスのグロースに伴って増築を繰り返したら、Contextがゴチャツキ出していたので、そのタイミングでReduxへのリプレイスを行ったが、そうではなくContextのStateを再設計・整理するべきだったのかもしれない。それこそ、Reduxみたいにentities・domains・uiみたいに責務を分割させたり？とか。

とはいえ、Reduxにする選択をしても、今ではreact-reduxにuseDispatch / useSelectorがあるのでconnect/mapStateToProps/ mapDispatchToPropsが必要なく、記述量もだいぶ少なく済む。

枯れた技術のReduxか、新しい技術のHooksか、でメリデメがあるので、どう設計するのか？はある程度は決めの問題もありそうかな、という印象でした。

機会があれば次はContextによるState設計について調べたいですね。
