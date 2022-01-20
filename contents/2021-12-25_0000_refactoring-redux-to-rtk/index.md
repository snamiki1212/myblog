---
title: 'Plain な Redux を段階的にRTKへリファクタリングする心得'
createdAt: '2021-12-25 00:00'
updatedAt: '2022-01-19 00:00'
category: '技術'
tags:
  - React
  - Redux
slug: refactoring-redux-to-rtk
word:
  - nothing
---

# Plain な Redux を段階的に RTK へリファクタリングする心得

どうも Nash です。

この記事は「**Plain Redux を段階的に RTK へリファクタリングする話**」の記事です。

では見ていきましょう。

## Redux のリファクタリング

### 背景

仕事で不動産テックのモバイルアプリを ReactNative で開発しているのですが、Redux のロジックについてリファクタリングすることになりました。

長年、技術的負債が溜まってきている状態で特に Redux のロジック周りがつらいことになってきていて、プロジェクトの総意で時間を取ってリファクタすることになります。

ポイントとして、ゼロから実装するのではなくてすでに動いている Redux を段階的にリファクタリングをします。

### 事前知識

リファクタリングをするにあたり Redux が提供している公式ベストプラクティスを一通り読みます。

- [Style Guide | Redux](https://redux.js.org/style-guide/style-guide)

この中で、RTK を使うことが強く推奨されています。

> Use Redux Toolkit for Writing Redux Logic​

RTK は Redux のベストプラクティスを詰め合わせたライブラリで、段階的なリファクタリングも行いやすいです。

- [Redux Toolkit | Redux Toolkit](https://redux-toolkit.js.org/)

というわけで、Plain な Redux から RTK へリファクタリングしていきます。

### プロジェクトの前提状態

今回、リファクタリングをするプロジェクトの前提状態はこんな感じです。

- Plain な action/reducer が使われている
- Plain な midleware が使われている
- RTK は部分的に使われていない

これらをリファクタリングしていきます。

## リファクタリングする

### 事前作業

バージョニングしたフォルダを作っておきます。

今回、リファクタリングをする features のモジュールが 40 個以上あり、リファクタリングが完了できるかどうかわからないです。
最悪、途中でリファクタリングが止まっても、あとからフォルダを見ても状況がわかりやすくリファクタの再開もしやすい状態にしておきたいです。

そのため、バージョニングしたフォルダを作ることにしました。

```shell
features
├── v1
└── v2
```

### 方針

ディレクトリ設計として features ベースにまとめます。

function ベースと feature ベースはこんな感じでディレクトリの区切り方です。

- function ベース：関数の種類ごとにフォルダを整理
- feature ベース：機能ごとにフォルダを整理
- REF: [Style Guide | Redux](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic)

```shell
features
├── v1             # v1 はfunctionベース
│   ├── actions
│   │   ├── article
│   │   └── user.ts
│   ├── middlewares
│   │   ├── article.ts
│   │   └── user.ts
│   └── reducers
│       ├── article.ts
│       └── user.ts
└── v2             # v2 はfeatureベース
    ├── articles
    │   ├── api.ts
    │   ├── components
    │   ├── hooks.tsx
    │   ├── slice.ts
    │   └── thunk.ts
    └── users
        ├── api.ts
        ├── hooks.tsx
        ├── slice.ts
        └── thunk.ts
```

今回リファクタするプロジェクトは、すでに feature ベースだったのでここは楽にリファクタできました。
もしも function ベースだとしたら fetures ベースになるように１つずつ根気よく v2 へ移動していきます。

また個人的な推奨として、features には Redux に関連するモジュール以外もここにすべてまとめていきます。
たとえば、`hooks`、`utils`、`converter`、`decorator`、`api` などなど。
`component`、`constants` などもまとめていいけど、プロジェクトごとの決めの問題なのでルールを決めて README などどこかに明記するのがいいかと思います。

### actionName の平仄をあわせる

ベストプラクティスに従って actionName の命名規則を決めましょう。

- camel ケース＋スラッシュ区切り
- REF: [Style Guide | Redux](https://redux.js.org/style-guide/style-guide#write-action-types-as-domaineventname)

```shell
# convention
[domain]/[eventName]

# ex
user/addItem
article/publish
```

現在のベストプラクティスでは RTK を使いますが、過去は ducks パターンが一般的に利用されていました。
ducks パターンでは、命名規則が大文字＋ Underline `(ex)USER_SAVE`なので、現在のベストプラクティスと異なるので注意です。

特に、RTK の`createAsyncThunk`で生成される actionName が camel+スラッシュで自動で生成されるので、今のプラクティスに出来る限り沿ったほうがいいです。

```tsx
// tsx
createAsyncThunk('user/updateWithStorage', async () => {...})

// action name
// => /pending, /fulfilled, /rejected が付与される
user/updateWithStorage/pending
user/updateWithStorage/fulfilled
user/updateWithStorage/rejected
```

ちなみに、今回のプロジェクトではこの命名規則をすこし拡張しています。
コンテキストとバージョンも ActionName に含めています。

```shell
- context：１つのアプリに２つのコンテキストが別れてる
- version：リファクタ前後がわかるようなバージョン

# convention
[context]/[version]/[domain]/[eventName]

# ex
rent/v2/users/saveWithStorage
```

プロジェクトによってこのようにある程度は拡張するのがいいかと思います。

また、actionNameCreater な helper 関数を作っておくと便利なので用意しておきます。ちなみに型はきちんとリテラル型になります。

```ts
//
// utils.ts
//
const createRentV2ActionName = <T extends string>(text: T) =>
  `rent/v2/${text}` as const;

//
// user/thunk.ts
//
import {createRentV2ActionName as actionName} from '~/src/utils';

const prefix = <T extends string>(eventName: T) =>
  actionName(`user/${eventName}`);

const saveWithStorageThunk =
  createAsyncThunk(prefix('saveWithStorage'), async () => {...})
// => actionName = rent/v2/user/saveWithStorage

const readFromStorageThunk =
  createAsyncThunk(prefix('readWithStorage'), async () => {...})
// => actionName = rent/v2/user/readWithStorage
```

ちなみに、これに合わせて Debugger も見やすいようにカスタマイズしたのを作ったので、チームでもこれを使うようにしています。

- [GitHub - snamiki1212/flipper-plugin-redux-debugger-colorized: Flipper plugin for Redux in React Native with colorized](https://github.com/snamiki1212/flipper-plugin-redux-debugger-colorized)

### タスク

いよいよリファクタリングしていきます。

先に middleware をリファクタリングをするほうが進めやすいケースが多かったので、個人的にはこっちからするのをおすすめでした。

- Plain middleware => thunk 化する(createAsyncThunk)
- REF: [createAsyncThunk | Redux Toolkit](https://redux-toolkit.js.org/api/createAsyncThunk)

こんな感じで thunk を書きます。

```ts
//
// features/user/thunk.ts
//
const saveWithStorageThunk = createAsyncThunk(
  'article/saveWithStorage',
  async (articleId, {dispatch}) => {
    await saveToStorage(articleId);
    dispatch(save({articleId}));
  }
);

// components
dispatch(saveWithStorageThunk());
```

これで plain mmiddleware を RTK 経由で thunk 化しました。

同じような感じで、slice を書きます。こんな感じですね。

- Plain action/reducer => slice 化する(createSlice)
- REF: [createSlice | Redux Toolkit](https://redux-toolkit.js.org/api/createSlice)

```ts
//
// features/user/slice.ts
//
const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    save: (state, {payload}) => {
      state.article.id = payload.articleId;
    },
  },
});
export default slice.reducer;
export const {save} = slice.actions;
```

これで slice もリファクタ完了です。

ちなみに、API についても理想としてはリファクタリングしたいですが基本的に後回しにしてます。

- Plain api => RTK api 化する(createApi)
- REF: [createApi | Redux Toolkit](https://redux-toolkit.js.org/rtk-query/api/createApi)

RTK Query の詳細はこちらをどうぞ

[RTK Query を実際にプロジェクトで使ってみた](/rtk-query)

### おわりに

Plain な Redux を RTK へリプレイスしたときの記事でした。

この記事を書いてる時点では、40 個のうち半分も終わってないですが地道に終わらせていきます。

年末までに終わればいいな。ではでは。
