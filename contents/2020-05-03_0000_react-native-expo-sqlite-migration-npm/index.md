---
title: 'ReactNative (Expo) + SQLite のマイグレーション npm パッケージを作った'
cover: 'cover.png'
createdAt: '2020-05-03 13:00'
updatedAt: '2020-05-03 13:00'
category: '技術'
tags:
  - ReactNative
  - Expo
  - SQLite
  - npmパッケージ
slug: react-native-expo-sqlite-migration-npm
word:
  - nothing
---

# ReactNative (Expo) + SQLite のマイグレーション npm パッケージを作った

こんにちは、Nash です。

この記事は「React Native (Expo/managed)+SQLite 用の RawSQL なマイグレーション npm パッケージを作った話」です。

実際の成果物は下記です。

- [GitHub - snamiki1212/react-native-expo-raw-sql-migrations: SQLite migration with raw SQL for expo-managed react native app🍣](https://github.com/snamiki1212/react-native-expo-raw-sql-migrations)

（気が向いたら Star してもらえると嬉しいです）

では、見ていきましょう。

## 作った npm パッケージについて

### 背景

フリーランスの仕事にて ReactNative(Expo/managed)での開発をしていて、だいたい 1 年くらい経過しました。「せっかくなので、簡単なアプリでも自分用にも作ってみよー」ということで SQLite を DB に持つアプリ開発をしていたのですが、この中で「Expo 用に SQLite で使える raw SQL なマイグレーションライブラリがない」という課題が出てきてせっかくなので自作＋公開しました。

ちなみに、rawSQL ではなくて、オレオレクエリビルダによるマイグレーションを実現する npm パッケージは存在して、最初はこのコードを参考にしてました。アプローチとしては OOP で、クラスを定義、クラスメソッドにてマイグレーションの実行を行う流れです。

- [GitHub - langleyfoxall/react-native-expo-sql-migrations](https://github.com/langleyfoxall/react-native-expo-sql-migrations)

せっかくなので、自分の npm パッケージは違うアプローチにて作成しました。

### パッケージの構造

**アプローチとして「TypeScript + React Hooks(Context)」にて実現してます。**

SQLite 用のマイグレーション npm パッケージですが、ReactNative 専用なので Context/Provider をガンガン使う感じです。

詳細の使い方などは README に書いてありますので、こちらを参考に。

- [GitHub - snamiki1212/react-native-expo-raw-sql-migrations: SQLite migration with raw SQL for expo-managed react native app🍣](https://github.com/snamiki1212/react-native-expo-raw-sql-migrations)

### パッケージ化の流れ

作ったモジュールをパッケージ化していきます。

だいたい下記のようなステップで npm パッケージ化しました。

- １）モジュール化
- ２）ローカルで検証
- ３）リモートで検証

各ステップについて説明します。

１）アプリの中でモジュールとして切り出して独立した存在にさせます。今回は、開発当初から npm パッケージ化させるつもりだったので、ほぼ工数は０です。仮に、あとからモジュールを切り出すにしても、そこまで大変ではないかと思います。

２）ローカルで検証するために、npm パッケージ用にリポジトリをローカルに作ります。１）でのモジュールをここに移動させ、アプリ側の package.json にてこのローカルリポジトリを参照させます。これで正常にアプリが動作するかを確認します。

３）リモートから npm パッケージを取ってきます。まず、ローカルの npm パッケージのリポジトリにて、build&publish します。その後、アプリ側のリポジトリにて普段のパッケージ同様に yarn add などでリモートの npm パッケージを取得します。これで正常にアプリが動作するかを確認します。

これで、npm パッケージ化が完成です。

詳細のコマンドなどは、参考文献にあるリンクを参照してください。困ってもググってもかなりの数の手順が出てきます。

## パッケージ化などによるナレッジ

今回の SQLite マイグレーション npm パッケージを作成するにあたって、得られたナレッジなどをまとめます。

### ハマったとき：小さく始める

npm パッケージ化にて、ハマりました。特に、ローカルで npm pack したものを別にリポジトリから参照して使っても`React variable error`みたいな汎用的なエラーが出てきて困りました。

というわけで、先人たちの言葉通り小さく始めることにしました。具体的には「console.log をだけを吐き出す npm パッケージ」を作って動かすところからはじめて肉付けしていきます。

特に、npm パッケージ化の作業は詰まった内容をググりにくいので、困ったら小さく始めることをおすすめします。

### ハマった点：SQLite の callback を Promise 化できない

npm パッケージの中身の話です。2 つ以上のクエリ発行にて Promise 化すると transaction.executeSql にて何も言わずに Kill されるという、不明瞭なバグ？ぽいものを踏んでかなりハマりました。

というのも、どうやらエラーもログもでないでプロセスが Kill されてるぽいです。

下記 Issue と同じ現象だと思うのですが、ただ Expo 側でこの Issue が Close/Lock されてて議論の余地がない状態です。。。これ以上調査する元気もないので原因究明を諦めました・・・。

- [SQLite: Cannot run more than 1 query using async/await transaction · Issue #1889 · expo/expo · GitHub](https://github.com/expo/expo/issues/1889)

なので、callback 地獄をやめたくて Promise/async/await 化してたコードを泣く泣く全部消し、すべて callback 化しました。おかえり callback 地獄。

### ナレッジ：Expo+Sqlite でのマイグレーションのベストプラクティス

今回自分が作成した npm パッケージは「React Native (Expo/manged)で SQLite を使ってるとき用の Raw SQL なマイグレーション npm パッケージ」です。

ですが、Expo 公式見解での SQLite のマイグレーション方法としては、「どこかに version を保存しておく+マイグレーションを実行するコードだけで十分」とのことです。

- [Sqlite table and database migrations on a Published app? · Issue #3059 · expo/expo · GitHub](https://github.com/expo/expo/issues/3059)

Back-end で開発をしていれば一般的なマイグレーションと言えばイベントソーシングなやり方だと思うんですが、Expo 公式のやり方だとより愚直にやる感じですね。スケールの観点では微妙ですが、スケールを考慮する必要はないよ！ってスタンスだと思ってます。

（以後、イベントソーシング的な方法を RailsWay と呼称しますね。多分 Rails が最初じゃないと思うけど。）

Rails Way と Expo Way を具体的にどうやって実現するかです。

- ExpoWay：先駆者が居たのでこの記事を参考にしてください[expo の sqlite で migration させる - 4 日に 1 回くらい更新するブログ](https://www.wheatandcat.me/entry/2019/07/22/074119)

- RailsWay：自分の npm パッケージ使ってください。

RailsWay と ExpoWay のメリデメです。

- ExpoWay から RailsWay へあとあとに切り替えるのは面倒そう（逆は簡単そう）

- RailsWay で始めるなら初期コストが少しかかるけど、あとあとはかなり楽そう

- だけど、そんなにマイグレーションすることないので、ExpoWay が良さそう。

今回、RailsWay でやりましたが、小さいアプリなら正直 ExpoWay が良さそうです。（まぁ、それを理解してたのですが、npm パッケージ作りたくて今回 RailsWay にしてます。）

### おわりに

Web エンジニア１年目くらいのとき、会社のテックリードの人が年に数本パッケージを公開してて、そのパッケージに star も結構ついてるのを見てかなり憧れてました。

今回、自分が作ったパッケージが誰に使われるかはわかりませんが、どんな形であれ、Example 的な npm パッケージリリースではなくて、プロダクションレベルで使えるものを publish できてかなり嬉しかったです。

ようやく自分もスタート地点に立てた感があり、夜にいい気分ワインを飲めたので、皆さんもこれを機にパッケージを publish して一緒においしいワインを飲みましょう。

### 参考文献

npm パッケージ化にて参考にした記事

- [初めての npm パッケージ公開（TypeScript） - Qiita](https://qiita.com/kik4/items/5a89b413882af629bb8a)

- [TypeScript で npm パッケージを作る - 30 歳からのプログラミング](https://numb86-tech.hatenablog.com/entry/2019/06/28/220736)

- [How to create your own react native npm package - Youstart Labs - Medium](https://medium.com/youstart-labs/how-to-create-your-own-react-native-npm-package-f185aba5468a)

- [React Component な npm のパッケージを作って TypeScript のプロジェクトで使う - Qiita](https://qiita.com/pure-adachi/items/a9a39b3ffcb5af4c5b59)

- [typescript を使って npm package 作るまでに必要そうなことをまとめてみた - Qiita](https://qiita.com/_mkazutaka/items/33c833db103f59041c06)

- [How to package your React Component for distribution via NPM](https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f)

- [Publishing A TypeScript React Component To NPM - Jonathan Chiam - Medium](https://medium.com/@jchiam/publishing-a-typescript-react-component-to-npm-d3cc15b8d0a2)
