---
title: 'Redux の State 設計の正規化の記事まとめ'
cover: 'cover.png'
date: '2019-10-23 00:00'
updated_at: '2019-12-14 00:00'
category: 'Tech'
tags:
  - React
  - Redux
  - Hooks
slug: investigate-redux-state-architecture
---

# Redux の State 設計の正規化の記事まとめ

この記事は、Redux の state 設計の正規化について調べた内容です。

背景として、自分の携わっているサービスにて、ContextAPI を使ってグローバルステートを管理していた。
が、サービスのグロースにてデータ構造的に無理が生じ始めたので、State 整理に伴って、これを機に Redux への切り替えを行おうと思った。

そのときに、調べたことをまとめる。

結論だが、「ContextAPI だと限界」というよりも、「State 設計を正しく行えていなかったので限界」が正解で、ContextAPI でも Redux でも、きちんと正規化してあげれば良かった。ということもあり、Redux を入れることは没になった。

## 公式ドキュメントを調べる

![cover-1-public](1.jpg)

何はともあれ、公式のドキュメントを調べる。ドキュメントを呼んだ結果をだいたいまとめた。

### 公式 Doc: [Normalizing State Shape · Redux](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)

「データは正規化させる」ここで言う正規化は、RDB におけると正規化と同じ文脈。結局、フロント側で持っている State が大きくなって管理が大変なら、RDS と同じようなデータ構造を持ちましょう、ということだ。

「データ構造をネストさせない」JSON でデータを持つわけだが、やろうと思えば多段ネストが行える。が、便利さの裏返しで、管理がシンドくなるので、極力ネストが浅い構造にする。

「ID で参照」RelationaDatabase よろしくなデータ構造にする。後述で追記。

「リストで持たずにオブジェクトで保持する」これでアクセスのしやすさが向上する。具体的には、リストだと

```js
list.find(x => x.id === id);
```

のようにデータを見つけないといけないが、オブジェクトなら、

```js
obj[id];
```

みたいにデータを見つけられる。ただ、データ群の順序情報が破棄されるので、`/entites`でのみ、この形は使い、`/domain`でリストで保持して順序を保存しておく。

「グルーピングする」Store の一番上位層を `/entites`、`/ui`、`/domain`、で分割して、それぞれのデータ内容はそれぞれの配下に格納する。公式 Doc だと、文章がメインで具体例が少なすぎてわかりにくいが、「それぞれにどんな役割か？」は、後述の「スタートアップテック」さんのスライドがわかりやすかった。

---

正規化すると、データ構造がどうなるか？を具体的に見てみる。

```ts
// 正規化前
[{id: 1, name: tanaka}, {id: 2, name: sato}];
```

正規化前は、１つのデータ構造で、下記の２つの情報を持っている。

1. 各 User の情報
2. 各 User の順番

これを正規化すると、

```ts
// 正規化後
{
  qwer: {
    id: 1,
    name: tanaka
  },
  asdf: {
    id: 2,
    name: sato
  },
  allIDs: [1, 2]
  ...
}

```

となり、1 と 2 の情報が分離される。ここで、entity が 1 の情報で、domain が 2 の情報となる。

### 公式 Doc: [Basic Reducer Structure · Redux](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure)

- Domain, App, UI の３つの State に大きく分ける。
  - Domain: entites 的なやつ。 Raw なデータ
  - App: アプリの振る舞いに依存するもの。Selected や Loading など。
  - UI: Presentetional 層で表示に特化したもの。
- 「stare の形」のことを shape と呼ぶ。
- 「スライス」＝「Store におけるサブツリー」のことを指す

## State 設計にまつわる記事を読む

![cover-2-private](2.jpg)

他にも記事をいろいろ探して読んでみた。

### スライド: [redux の state 設計の話 - スタートアップテック](https://www.slideshare.net/ayatas0623/reduxstate-129830690)

- DomainState と UIState で State を分ける（画面かドメイン）。それぞれの分け方でメリデメがあるので整理。
- 大きく、/entites、/domains、/ui の３つのツリーの種類に分けてる。
- entites への正規化では、id を key にしたオブジェクト化をしてる。またリレーションデータは実データではなくて、リレーショナルに ID で参照。

### スライド: [Redux の State 設計のお話 - Retty](https://www.slideshare.net/ssuser7a5814/reduxstate)

- API の Reponse と State との観点で、State を考える話。
- シンプルなアプリなら `[Responseデータ] -> [State]` でよいが、複雑なアプリ・データでは愚直に 1vs1 対応をすると非正規化が発生する。
- RDS 的にデータを保持させるのがベターとの判断。
- 「Element 層」というのを作って API の変化に対応。`[API] → |FRONTEND| → [Response] → [Element] → [View]`

### [Redux Architecture Guidelines を読んでの所感](https://medium.com/@mah_lab/redux-architecture-guidelinesを読んでの所感-b64f6817bc4b)

- redux/action 設計についての基本的な考え。
- オブジェクトの入れ子を避ける
- UI 用データを State に保存しないで、Raw データを入れる

### [Twitter 公式サイトの Redux Store 設計を少しだけ読み解いてみる](https://qiita.com/oi5u/items/4e2c5bc1d546be1b1c5d)

- Twitter の State 設計を見て、設計を考察。
- normalizer というライブラリで Res を正規化。https://github.com/paularmstrong/normalizr
- /entites の配下にて ResponseRaw データ管理。
- /entities 配下にて、loading 管理をしている。

### [Dissecting Twitter’s Redux Store - Statuscode - Medium](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1)

- /entities/tweets/entities に、１つ１つのツイートの Raw データ
- /homeTimelines/timeline に、タイムラインのデータを格納

### [React/Redux の設計に関する参考記事まとめ - dackdive&#39;s blog](https://dackdive.hateblo.jp/entry/2017/04/24/133955)

- この記事みたいなの。自分が見つけられなかった記事がいろいろあったので、助かった。

## あとがき

![cover-last](cover.png)

### まとめ

- 正規化をする。リストからオブジェクトにしてアクセッサビリティを担保する。DRY を重視して、リレーショナルに設計する
- 公式では loading ステートは AppState だが、Twitter では Entities 配下にあったりするので、ある程度は選択して決める

### 所感

Context から Redux へのリプレイスで State 周りを色々調べたが、「そもそも Context での State 設計をよりきちんと行えれば Redux へのリプレイスせずとも良かったのでは？」というのが一通り開発が終わってからの印象。

- ReduxWay を進める派

<blockquote class="twitter-tweet" data-conversation="none"><p lang="ja" dir="ltr">個人的に Context と Redux の併用は、Redux の思想である Single Source of Truth に反するのでやるべきではないと考えてます。UIに関する状態のみを State Hook で持たせ、あとは Redux で一貫して管理というのが初心者も混乱せずいいと思ってます。</p>&mdash; 大岡由佳『りあクト!🔥Firebase編』Boothで好評販売中! (@oukayuka) <a href="https://twitter.com/oukayuka/status/1123849193653714945?ref_src=twsrc%5Etfw">May 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
- ContextWayを進める派

<blockquote class="twitter-tweet" data-conversation="none"><p lang="ja" dir="ltr">hooks時代のreactは基本的にanti single global stateのようで、local states+contextsが基本だと思います。reduxの出番はactionによるseparation of concernsが必要になる大規模アプリに限定されると思います。reduxの用途は無くなりませんが、これまではoveruseされたという解釈です。</p>&mdash; Daishi Kato (@dai_shi) <a href="https://twitter.com/dai_shi/status/1123859947643654144?ref_src=twsrc%5Etfw">May 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ReduxWay による State 設計は、ひとまずのベストプラクティスが確立されているように思える。が、ReactHooks については、登場したばかりで情報が少ないので、設計指針がわからなかった。

「ローカルで表現できるものは useState で、グローバルにしないと表現が厳しいものは Context に、」を指針に、でサービスのグロースに伴って増築を繰り返したら、Context がゴチャツキ出していたので、そのタイミングで Redux へのリプレイスを行ったが、そうではなく Context の State を再設計・整理するべきだったのかもしれない。それこそ、Redux みたいに entities・domains・ui みたいに責務を分割させたり？とか。

とはいえ、Redux にする選択をしても、今では react-redux に useDispatch / useSelector があるので connect/mapStateToProps/ mapDispatchToProps が必要なく、記述量もだいぶ少なく済むし、devTool も優秀だ。

枯れた技術の Redux か、新しい技術の Hooks か、でメリデメがあるので、どう設計するのか？はある程度は決めの問題もありそうかな、という印象でした。

機会があれば次は Context による State 設計について調べたいですね。
