---
title: 'RTK Query を実際にプロジェクトで使ってみた'
createdAt: '2021-12-06 00:00'
updatedAt: '2021-12-23 00:00'
category: '技術'
tags:
  - React
slug: rtk-query
word:
  - nothing
---

# RTK Query を実際にプロジェクトで使ってみた

この記事は「Redux Toolkit の Query 機能である RTK Query を実際に２つのサービスで使ってみたので、そこで得た気づき」についての記事です。

## RTK Query とは

RTK Query とは、Redux Toolkit が提供している Cache レイヤーによる状態管理を行う機能です。

まったくこれらを知らない人への説明としては、まず React でグローバルに状態管理を行うときに使われるライブラリとして Redux があります。さらに、この Redux を実装するにあたって様々なベストプラクティスをまとめて利用可能にしたライブラリが Redux Toolkit です。そして、この Redux Toolkit が提供している１つの機構として RTK Query となります。

RTK Query では、例えば API で取得するような外部データの取得・キャッシュを行います。

類似ライブラリとしては、swr / Apollo Client / React Query などがキャッシュレイヤーによる状態管理を行うライブラリとして挙げられるかと思います。

RTK Query の長所としては、なによりもベストプラクティスを集められた RTK を利用可能なことだと思っています。

## 実際に RTK Query を使ってみた

実際に RTK Query を下記の２つのプロジェクトで使ってみました。

- 留学プランナー Web アプリ（個人開発）
- BtoC 向けのアプリ（仕事）

個人開発のコードは OSS なので下記にて確認できます。

- プロジェクト：[GitHub - snamiki1212/plangoab: Immigration schedule planner with Next.js, Redux, and FullCalendar.js](https://github.com/snamiki1212/plangoab)
- コード：[plangoab/calendarApi.ts at e0d43142cf5d084ae8ca4d81e2bdec6e25504693 · snamiki1212/plangoab · GitHub](https://github.com/snamiki1212/plangoab/blob/e0d43142cf5d084ae8ca4d81e2bdec6e25504693/src/redux/v2/services/calendarApi.ts)

## 具体的な使い方

使い方について箇条書きで書きます。

- `createApi` にて api を作成します。
- 作成する内容については引数にオブジェクトで渡します。
- endpoints に各エンドポイントを設定します`(ex) getPokemonByName`
- 設定したエンドポイント名に対応したカスタムフックスが生成されます `(ex) useGetPokemonByNameQuery`
- コンポーネント側でこのカスタムフックスを使います

```tsx
//
// api.ts
//
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Pokemon} from './types';
const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
export const {useGetPokemonByNameQuery} = pokemonApi;

//
// Component.tsx
//
export default function App() {
  const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur');
  return <div>...</div>;
}
```

RTK はドキュメントがかなり充実しているので、より詳細は[こちらのドキュメント](https://redux-toolkit.js.org/rtk-query/overview)を見てもらうのがいいかと思います。
または、具体的にプロダクトで使われてる実例としては[私が書いたコード](https://github.com/snamiki1212/plangoab/blob/e0d43142cf5d084ae8ca4d81e2bdec6e25504693/src/redux/v2/services/calendarApi.ts)を参考にするのもいいかもしれません。

## RTK Query を使ってみての気付き

### 良い点：Save & Selector のコードがまるまる不要になる

RTK Query の特徴というよりもキャッシュによる状態管理の特徴ですが、下記が不要になります。

- Save：外部から取得したデータを Redux 上に保存するコード
- Selector：Redux 上にあるデータへアクセスするコード

まず、Save については RTK が内部的に自動で行ってくれます。

そして、Selector については「常に API から取得する」ように書けばよくなります。内部的には「もしもキャッシュデータが使えるならそこから取得して、使えないなら API で fetch する」というような動きになります。

そのため、Save & Selector のコードがまるまる不要になり、コードとして常に fetch する命令を書けばいいだけです。

正直、この書き方はかなり楽な上、コードボリュームも減らすことができます。

### 良い点：Hooks ファースト

RTK Query は Hooks ファーストな思想を持っていて、createApi の返り値として動的に Hooks を生成できます。

まず、Hooks ファーストなためコードはかなり書きやすく、エラーハンドリングやデータローディングの分岐もかなり直感的に書けます。またコンポーネント単位でデータの fetch も行いやすいです。

そして動的に Hooks が生成される点ですが、下記のような感じになります。

> `fetchCalendars` を Query で定義すると、`useFetchCalendarsQuery`が生成される

```tsx
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({baseUrl: HOST_API_V1}),
  endpoints: (builder) => ({
    fetchCalendars: builder.query<any, any>({
      query: () => ({url: '/calendars'}),
    }),
  }),
});
export const {useFetchCalendarsQuery} = calendarApi;
```

ただ、この動的なカスタムフックスの生成を実現をするために TypeScript のバージョンの縛りがあるので出来れば先に上げておくのが良いかと思います。

- REF: [typescript - RTK Query createApi results in: "Property '....' does not exist on type 'Api&lt;BaseQueryFn&gt;" - Stack Overflow](https://stackoverflow.com/a/68569190)

### 気付き：without Hooks で段階移行ができる

今回の RTK Query の導入の背景として、既存のアプリケーションのリファクタとして段階的な導入が必要になります。

まず、自分の考えているリファクタの最終的な理想としては、ロジックや複数の Disptch などはまとめて１つの Hooks にまとめるイメージでした。

これと同様に、基本的な RTK Query の利用方法としては動的に生成された Hooks を使います。
これによって、data/loading/error のハンドリングを Hooks レイヤーで行えます。
問題としては、middleware レイヤーから Hooks を呼び出せられません。

そこで、RTK Query では１つ低レベルな API も用意されていて without Hooks な方法です。

[Usage Without React Hooks | Redux Toolkit](https://redux-toolkit.js.org/rtk-query/usage/usage-without-react-hooks)

このおかげで、段階的リファクタリングを行いたいと考えているプロジェクトでも割と早い段階で導入ができます。

### 問題点：Reducer をネストできない

RTK Query の問題として、Reducer をネストできない点があります。（2021/12 時点）

つまり、キャッシュで保存されるデータが Redux の State のトップレベルにしか配置できないです。

今後、top-level じゃなく nested に保存できるようになった場合でも、このデータはあくまで API から取得するものなのでローカルストレージへ persist に保存することはないので大きな影響はなくリファクタ可能かと思います。ただプロジェクトの縛りで top-level にしか置けられないなら RTK Query を使うかどうかは一考の余地がありそうです。

- REF: [reactjs - Configuring the store with RTK-Query middleware - Stack Overflow](https://stackoverflow.com/a/69453877)

### 問題点：fetch レイヤーへの影響

すでに開発しているサービスに RTK Query を新しく入れる場合、導入時に Fetch レイヤーへの影響が出る可能性がありそうです。

まず、RTK Query は状態管理だけでなく Data Fetching の領域まで責務を担います。

ですが、createApi の引数にて fetcher を渡すことができるので疎結合に扱えるので、fetch・axios・fetchBaseQuery あたりのどの fetcher を使うかを自由に取り回せられます。

```tsx
export const calendarApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: HOST_API_V1}),
  // ...
});
```

ただ、大半のプロダクションコードはこれらの fetch 機能に対してオレオレで他の処理もラッピング処理をしていることが多いです。

これらのラッピングされた Fetcher をそのまま RTK Query に使えるかは、すでにあるコードの中の Fetch 周りがどのように作られているかによります。

経験上、これらが完全な疎結合になっていて単純に入れ替えれば済むケースはかなり稀で、結局は Fetch レイヤーを RTK Query 用に作り直したりする必要が出てくることになりそうです。

そのため、既存の Fetcher から RTK Query 用の Fetcher への移行コストが発生するかもしれない、という点はある程度は計上しておくといいかと思います。

### 問題点：selector にて fetch 時の引数が必ず必要になる

RTK Query の性質上、データへのアクセスである selector を使用するときにそのデータを API 経由で fetch したときに使った引数が必要になります。

まず、selector について見てみます。

- api を createSlice で生成します
- 生成された api が selector を持っているので実行します
- これでデータへのアクセスができます

```tsx
const api = createSlice({
  ...,
  endpoints: (builder) => ({
    getPost: builder.query({
      // 引数にpostIdが必要なクエリ
      query: (postId) => ({url: `/posts/${postId}`}),
    }),
  })
})

// selectの１つ目の高階関数にて、getPostQueryの引数であるpostIdが必要になる
const result = api.endpoints.getPost.select(postId)(state)
const { data, status, error } = result
```

RTK Query を使う場合は推奨されるのは Hooks を使った方法で、その場合は selector が必要ありません。
ですが、middleware である thunk 内のロジックなどのカスタムフックスを利用できない場合かつデータへのアクセスが必要なケースもあります。
その場合は、RTK Query はより低レイヤーな API である selector が上記のように用意されています。

なぜ select 時にも fetch 時の param が必要かについてですが、RTK Query のデータ保存はデータキャッシングの仕組みで運用されています。
`/posts/${postId}`のデータを取得したい場合は postId が異なると得られるデータも異なるため、それぞれ別の領域に保存されます。
そのため、selector でも「どの postId の`/posts/${postId}`のデータを取得するか」を明示するために`select(postId)(state)`という書き方になるわけです。

つまり、 RTK Query ＋ Selector でのデータアクセスが必要な場合は fetch 時の引数をグローバルに保存しておく必要がありそうです。

## 終わりに

個人的に RTK はかなり気に入っていているパッケージの１つです。更に今回は RTK Quert というキャッシュレイヤーの機能まで追加されました。

今まで、いろいろな状態管理のライブラリを使ってきましたがプロダクションだけでなく小規模アプリでも RTK はコードボリュームも少なく、使いやすく、拡張性も高い印象です。

RTK Query が気になってる人がいればぜひおすすめです。
