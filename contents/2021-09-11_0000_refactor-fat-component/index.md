---
title: 'FatなReactコンポーネントをどうHooksでリファクタリングしていくか'
createdAt: '2021-09-11 00:00'
updatedAt: '2021-10-02 00:00'
category: '技術'
tags:
  - React
slug: refactor-fat-component
word:
  - nothing
---

# Fat な React コンポーネントをどう Hooks でリファクタリングしていくか

この記事は「 **Fat Component をどういう勘所でリファクタしていくか** 」についての記事です。

またこの記事では、コンポーネントとは Web フロントエンドにおけるコンポーネントかつ React についての話をしています。

## はじめに

仕事で React で開発をしていますが、特に最近 Fat Component に遭遇することが多く、1000 行を超えるコンポーネントに遭遇しては白目を向いてました。

スパゲッティ化したコンポーネントをリファクタをしていく過程で、自分なりに手順や勘所などの考えがある程度まとまってきたのでここに残しておきます。

## リファクタリング

リファクタリングなので、振る舞い・ロジックは変えないようにコードを整理していきます。

「リファクタをする」という背景として、「すでに前任者が書いていたコードがスパゲッティでテストコードもない」というケースが多いです。そのため、**リファクタの最初のステップではブラックボックスをブラックボックスのまま切り出すこと**を考えます。なので、リファクタした結果が最高の状態になっているよりも簡単・安全を優先します。

### 注入よりも依存

具体的には、自分がリファクタをするときは最初に切り出された関数は注入よりも依存を優先させているのでテスタビリティがかなり低い状態です。トレードオフとして、リファクタが簡単かつ安全に行えると思っているので最初のリファクタのステップとして自分はこのような選択をしています。

ビッグデプロイのように 1 回の PR で大きく変更せずにリファクタも細かく少しずつ安全を優先して変えていくほうが、結果としてロジックが壊れてバグが発生したりロジックが破綻して Revert しないといけなくなるような手戻りが少ないのが経験則です。

---

では、どういう勘所でリファクタリングしていくか見ていきます。
また、ここでは Redux を使っている前提のプロジェクトについて書いていきます。

### ロジックの順番は変えないようする

コンポーネントのロジック部分について、順番を変えないようにします。

「ロジックの部分」と言っているのは下記のブロックです。

```tsx
const Component = () => {
  /**
   ** ロジックの部分と読んでいるのは
   ** ここらへんの記述
   **/
  return <div>.....</div>;
};
```

Fat なコンポーネントに遭遇するとこのロジックの部分が 500~1000 行くらいになっていることもザラにあり、ロジックを整理したい気持ちも沸きますが我慢します。カスタムフック同士が依存関係になっていて呼び出し順番がロジックの挙動に影響を与えるケースがあるからです。

ここのステップは後回しにまたは安全であることが保証されているところから手をつけます。

### 最初は useSelector の整理から

個人的なおすすめとして useSelector の整理が安全かつ簡単なので、ここから始めるのがよいかと思います。

具体的には下記の 2 つを行います。

1. Selector の関数は外に出す
2. ロジックの一番上のほうに useSelector はすべて持ってきてまとめる

```diff-tsx
 // 1. selector 関数を外に出す
+ const selectUser = state => state.features.user

 const Component = () => {
  // 2. useSelector は一番上に持ってきちゃう
+  const user = useSelector(selectUser)

   // ...
   // ...
-  const user = useSelector(state => state.features.user)
   // ...
   // ...

   return(<div>...</div>)
 }
```

１）にて、selector の関数を外に出します。Redux 設計で duck パターンを採用していたりすると、selector 自体を/redux 配下のどこかでまとめて管理している可能性もあるのでそれはプロジェクトのルールに従いましょう。すでに selector が別の箇所で定義されているなら、このタイミングで差し替えても良いですが、個人的には後回しにしてます。

２）にて、useSelector はロジックの最初のほうにまとめます。前提として useSelector は副作用がない getter なので、呼び出し順序を変えてもロジックの挙動に問題を与えることはありません。なので、useSelector はまとめて すべて一番上に持っていくとコード全体の見通しがややキレイになります。

このコードサンプルだとわかりにくいですが 5~10 個くらいは普通に useSelect してるコンポーネントもあり、呼び出しの位置を整理するだけでも見通しがよくなります。

useSelector のリファクタはコストとリターンが少ないながらも、安全が保証されつつスタートのアクセルを踏みやすいのでここから始めてます。

### カスタムフックに切り出していく

次にカスタムフックに切り出していきます。

```diff-tsx
 import { growAction } from '...'

 const selectUser = state => state.features.user

 // useUser は redux に依存している
+const useUer = () => {
+  const dispatch = useDispatch()
+  const uesr = useSelector(selectUser)
+  const grow = () => dispatch(growAction(user.age+1))
+  return { grow }
+}

 const Component = () => {
   // ここのロジックがスッキリする
-  const dispatch = useDispatch()
-  const uesr = useSelector(selectUser)
-  const grow = () => dispatch(growAction(user.age+1))
+  const { grow } = useUser()
   return(<div>...</div>)
 }
```

ただし、この時点ではカスタムフックは Redux に依存させてしまいます。

もちろん、例えば Modal を管理するようなフックなどは Redux に依存させないで外からきちんと注入してあげるべき。ですが、今はリファクタのしやすやを優先します。仮に依存させずに注入したいなら、それは次のステップにやるべきです。最初は簡単かつ安全にリファクタできる箇所から進めていきたいので個人的には後回しにしています。

### WET に カスタムフックは作成しても良い

作成したカスタムフックは Redux に依存させているので useSelector 周りは DRY ではなく WET に書きます。また、すでに useSelector のリファクタのときに各 selector を外に出してるので、`selectUser`も再利用できます。下記のようになります。

```diff-tsx
 import { growAction } from '...'
 import { buyAction } from '...'

 const selectUser = state => state.features.user

 const useUer = () => {
   const dispatch = useDispatch()
   const uesr = useSelector(selectUser)
   const grow = () => dispatch(growAction(user.age+1))
   return { grow }
 }

 // useSelector 周りはWETに書く
+const useProduct = () => {
+  const dispatch = useDispatch()
+  const uesr = useSelector(selectUser)
+  const grow = () => dispatch(buyAction(product.id, user.id))
+  return { buy }
+}

 const Component = () => {
-  const dispatch = useDispatch()
-  const uesr = useSelector(selectUser)
-  const product = useSelector(selectUser)
-  const grow = () => dispatch(growAction(user.age+1))
-  const buy  = () => dispatch(buyAction(product.id, user.id))
+  const { grow } = useUser()
+  const { buy  } = useProduct()
   return(<div>...</div>)
 }
```

このコードのサンプルだと１つしか select していないので違和感がわかりにくいですが、これが複数の useSelector を呼び出していても WET に各カスタムフックの中で毎回すべて useSelector で呼び出します。

もしここを DRY に書くならば、それぞれのフックに user を注入する形で下記のようになります。

```diff-tsx
 // 依存ではなく注入するケース
 // ただ、個人的には最初のリファクタではこれは避ける
 const useUser = (user: User) => {
-  const uesr = useSelector(selectUser)
   // ...
 }

 const useProduct = (user: User) => {
-  const uesr = useSelector(selectUser)
   // ...
 }

 const Component = () => {
+  const uesr = useSelector(selectUser)
-  const { grow } = useUser()
-  const { buy  } = useProduct()
+  const { grow } = useUser(user)
+  const { buy  } = useProduct(user)
   // ...
 }
```

useSelector で user を取り出す箇所が より DRY になります。ただ、リファクタをするコードはかなり Fat なコンポーネントなので、このように注入を始めるとリファクタの見通しがかなり悪くなることが多いので、個人的には後回しか場合によっては意図的に行わないようにしてます。

### ファイルを整理する

カスタムフックに外に出したなら、これを更に外部のファイルに出しましょう。

前提としてプロジェクトの中で「hooks をどう扱うか」の管理方針があればそれに従います。明確な管理方針がないなら、同一のディレクトリに hooks ファイルを作成してあげるのが手軽かつ複雑度が下がりやすいので個人的には気に入ってます。

こんな感じで分割します。

```tsx
// -------------------------------------------
// hooks.tsx
import {growAction} from '...';
import {buyAction} from '...';

const selectUser = (state) => state.features.user;

const useUer = () => {
  const dispatch = useDispatch();
  const uesr = useSelector(selectUser);
  const grow = () => dispatch(growAction(user.age + 1));
  return {grow};
};

const useProduct = () => {
  const dispatch = useDispatch();
  const uesr = useSelector(selectUser);
  const grow = () => dispatch(buyAction(product.id, user.id));
  return {buy};
};

// -------------------------------------------
// component.tsx
import {useUesr, useProduct} from './hooks';
const Component = () => {
  const {grow} = useUser();
  const {buy} = useProduct();
  return <div>...</div>;
};
```

コンポーネント自体のファイルはかなり見通しがよくなりましたね。

### Presenter と Container を分離する

Presenter と Container で分離させます。

Fat になってるコンポーネントはたいていは、下記の３つの要素がごちゃまぜになってるケースが多いです。

1. Presenter：DOM 構造
2. Style：見た目
3. Container：ロジック

Hooks 自体を整理するとロジックの箇所が整理されますが、もう少し大きいレイヤーでみると各レイヤーを整理してあげるのも大事です。

特に Storybook が整備されている開発環境なら、ここのリファクタまで行ってあげると Presenter は依存がなくなるので、 storybook が簡単に作成できるようになるのでおすすめです。

### useEffect は独立させる

useEffect で出来る限り独立させた存在にしてあげます。

useEffect はその語源である side-effect の文字通りに副作用のあるフックです。そのため、他のカスタムフックと共存させると、その他のカスタムフックを DRY に呼び出そうとしたときに副作用が生まれてしまいます。出来る限りカスタムフックに副作用を持たさないほうが良いので、useEffect は独立させます。

個人的に useEffect をどう対処するかは下記のどちらかにしています。

1. カスタムフックスにしないで、そのままコンポーネントにベタ書きして残しておく。
2. useEffect を実行するだけのフックスにする

1.)のケースだと下記のようになります。

```diff-tsx
 const selectUser = (state) => state.features.user;

 const useUer = () => {
   const dispatch = useDispatch();
   const uesr = useSelector(selectUser);
   const grow = () => dispatch(growAction(user.age + 1));

   // ここにuseEffect を置くとuseUesr が副作用を持ってしまう
-  useEffect(() => {
-    //...
-    fetch(..., {user})
-    //...
-  }, [user])
   return {grow, user};
 };

 const Component = () => {
   const {grow, user} = useUser();
+  useEffect(() => {
+    //...
+    fetch(..., {user})
+    //...
+  }, [user])
   return <div>...</div>;
 };
```

なんでもかんでも１つのカスタムフックに詰め込むよりも、意図的に外に出してしまったほうが良いケースですね。

2.)のケースだと、useEffect を独立させたカスタムフックを作成します。下記のようになります。

```diff-tsx
 const selectUser = (state) => state.features.user;

 const useUer = () => {
   const dispatch = useDispatch();
   const uesr = useSelector(selectUser);
   const grow = () => dispatch(growAction(user.age + 1));
   return {grow, user};
 };

+const useFetchUser = () => {
+  const uesr = useSelector(selectUser);
+  useEffect(() => {
+    //...
+    fetch(..., {user})
+    //...
+  }, [user])
+}
 const Component = () => {
   const {grow, user} = useUser();
-   useEffect(() => {
-    //...
-    fetch(..., {user})
-    //...
-  }, [user])
+   useFetchUser()
   return <div>...</div>;
 };
```

useEffect のみを実行する`useFetchUser` を作成します。これで副作用が完全に独立しているので、もう１つのフックの useUser は副作用なしで使えて再利用性が高い状態になっていますし、コンポーネントのロジックの部分も可読性が高い状態になりましたね。

すでに何度も書いてますが、上記のサンプルコードでは useFetchUser は Redux に依存していて理想的には `useFetchUser(user: User)` で外から user のオブジェクトを注入してあげるべきですが、ここではあえてこの書き方をしています。

### deps はいじらない

useCallback / useMemo / useEffect の第 2 引数はできるかぎり触らないようにします。

よくあるのが上記の hooks の第 2 引数がおかしい状態になっていて、足りていないまたは不要な変数が定義されているケースです。

ですが、**修正したい気持ちをぐっとこらえて放置します**。これをキレイにするのはリファクタではなくてロジックへの修正になってしまう可能性があり、あからさまに足りてない・不要な変数があるなら手をいれることも考えても良いですが、ここの変更が原因でロジックが変わってしまうってことも割とよくあるので、気持ち悪いけど後回しにしたほうが安全です。

あとで修正がしやすくなるので、TODO コメントでその旨を書いてあげるのにとどめましょう。

## おわりに

いろいろ Fat なコンポーネントをリファクタしていくときの勘所を書いてみました。

根本的な思想としては「きちんと良いコンポーネント設計ができるか」という点に通じていますが、この記事ではより実践的かつ具体的な「どこから始めて、どこまでで妥協すれば良いのか」が自分なりに整理できたかと思います。

また新しい気付きなどがあればこの記事に反映していきます。
