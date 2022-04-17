---
title: 'ReactのContextAPIでの正規化をReduxと比較'
createdAt: '2019-12-14 00:00'
updatedAt: '2019-12-14 00:00'
category: '技術'
tags:
  - React
  - Redux
  - ReactHooks
slug: compare-normalized-context-redux
---

# React の ContextAPI での正規化を Redux と比較

こんにちは。Nash です。趣味は ClassComponent を FunctionalComponent に変えることです。

この記事は、State 設計を正規化するときの、React の ContextAPI の Redux 比較結果のまとめです。

結論は、selector レイヤーがなくなり、そこで担っていた範囲が、useMemo で実現されてます。

（ただ、自分の実装例をベースにしたものなので、実装方法次第になるかもしれないので、必ずこの限りではないかと思います。）

では見ていきます。

## そもそも正規化って？

フロント側で持っている状態（State）を、RDBMS よろしくなデータ構造にすることです。

アプリケーションがグロースしていくと、フロント側で持つステートが大きくなるため、きちんと正規化してあげないと、状態管理が辛くなります。

辛さのイメージとしては「バックエンド側の RDBMS が正規化されてない、ってやばくね？」みたいな感じになっていきます。

正規化についての詳細は、こちらに記事としてまとめてあります。

[Redux の State 設計の正規化の記事まとめ](./investigate-redux-state-architecture)

## Todo アプリを作ってみる

Redux と Context のケースで比較するために、とりあえず定番の TODO アプリを、ざっと作ってみました。

- https://github.com/snamiki1212/example-react-state-normalized

このアプリは、

- State の部分は、Redux と Context の２つのパターンで実現している
- Presentetional レイヤー、つまり`/components`のコンポーネントは全く同じものを使っている

というものです。

### Redux と ContextAPI の比較

結論、「差分検知」と「deserialize した結果のキャッシュ」が、Redux だと selector レイヤーだったのが、Context だと useMemo で実現されるようになります。

表で表すとこんな感じです。

| 比較内容             | Redux          | Context             |
| -------------------- | -------------- | ------------------- |
| deserialize レイヤー | createSelector | useMemo             |
| State の変更検知     | useSelector    | useMemo の第 2 引数 |

「deserialize レイヤー」が指しているのは、enttiy/domain の結果を deserialize してキャッシュしておく場所のことです。

### コードベースで比較

というわけで、差大きい上記の部分についてのみコードベースでも比較してみます。
上記のリポジトリのコードを適当に持ってきて、見やすくしました。

まず、Redux のケースはこんな感じです。

```ts
// Reduxのケース
const selectDomains = (state) => state.TodoDomain.ids;
const selectEntities = (state) => state.TodoEntity.list;
const selectTodo = createSelector(
  // ②Stateの変更検知
  selectDomains,
  selectEntities,
  (ids, entities) => {
    // ①deserialize
    return ids.map((id) => entities[id]);
  }
);

// 使うとき
const deserialized = useSelector(selectTodo);
```

処理の流れとして

- 2 つの Select を定義しておいて、
- 2 つの Select から得た結果をキャッシュする Selector を合成し、
- useSelector 経由で呼び出す

という流れです。

次に、Context のケースだとこんな感じです。

```ts
// Contextのケース
const deserialized = React.useMemo(() => {
  // ①deserialize
  return ids.map((id) => entities[id]);
}, [
  // ②stateの変更検知
  ids,
  entities,
]);
```

２つの値から得た結果をキャッシュする、という処理だけになります。

Context 側のケースだと、そもそも State が複数に分割されているので、Redux のように Select する必要がないこともあり、かなりコードがスッキリしていますね。

というのも、selector の本分は「State の中からデータを選択する」です。理由は、Redux の場合は単一ステータスなので、ステータスが大きくなるので、この考えが必要になります。ですが、Context の場合はそもそも単一ではなくて複数ステータスです。なので、適切にステータスが分割されているので、そもそも Select してくるということ自体が必要ないわけです。

いずれにしても、「Select がそもそも不要」「Select レイヤーで実現していたことを useMemo にて実現する」という形で、ContextAPI では実装されます。

## 導入コストは？

ちょうど、２つの案件にて、「ContextAPI でのステートの正規化」「Redux でのステートの正規化」を同じタイミングで行っていたので、導入コストについても言及しておきます。

Redux・Context の両方に言えることですが、「既存のステート設計を、正規化したステート設計にする」となると、どちらにしても**導入コストはそれなりにかかります**。

実現方法が「selector を使わない」「useMemo を使う」など少し違うが、両方のパターンとも「ステート設計を再設計している」わけです。つまり、修正作業内容は、「ステートへの CRUD 処理を全て書き直し＋書き増し」という形になります。

そのため、Context だから簡単、Redux だから大変、みたいなこともありません。淡々と頑張りましょう。

### 所感

そもそも、「State 設計を正規化する」という概念自体を知らないところから道筋が始まったので「ContextAPI で複雑化した State を、どうすればよいんだろう？⇒ReduxWay の正規化に準拠して改修する」というところに行き着くまでに苦労しました。

「Redux の正規化」については記事がそれなりに見つかりますが、Context については歴史が浅いので「使い方どうやるの？」系の記事ばかりで、こういった観点での記事があまり見つけらなかったこともあります。

この記事がどなたかの助けになれば幸いです。
