---
title: '【2021 年】今年、学んだ技術の振り返り｜ Rust と RTK'
createdAt: '2021-12-22 00:00'
updatedAt: '2021-12-22 00:00'
category: '技術'
tags:
  - Alfred
  - Rust
  - React
  - Redux
  - Hooks
  - ReactNative
slug: learned-tech-2021
word:
  - nothing
---

# 【2021 年】今年、学んだ技術の振り返り｜ Rust と RTK

ども、Nash です。今年は留学してました。

さて、この記事では「今年学んだ技術について振り返って整理した記事」です。

では見ていきましょう。

## React Native によるアプリ開発

仕事とプライベートで１つずつ、計 2 つのアプリ開発をしていました。

仕事では、不動産テック系のモバイルアプリ開発です。開発内容として、アプリケーションレイヤーとしての React・Redux 周りを触ることが多かったです。
正直、ReactNative らしいことはそこまで多くはしていないですね。後述する、RTK 周りや Hooks などの内容が

プライベートでは、こちらのアプリを１つ作ってみました。

- [‎「毎日一行日記」を App Store で](https://apps.apple.com/jp/app/%E6%AF%8E%E6%97%A5%E4%B8%80%E8%A1%8C%E6%97%A5%E8%A8%98/id1589704109)

モチベーションとして、「デプロイ周りについてもっと理解を深めたい」という思いから自分のアプリを作成しました。マネタイズとかはあまり考えてません。

## Next.js + Ruby on Rails に Web サービス開発

プライベートで開発した渡航プランニングの Web サービスを開発しました。

[個人開発プロジェクトがスポンサーマネタイズされて稼ぐまでの話【Plangoab】](/plangoab-sponsored)

技術スタックとして、Next.js + RTK + Ruby on Rails です。

新しく学んだ技術という色は薄く、今まで使ってきた技術スタックの色が強いですね。

[GitHub - snamiki1212/plangoab: Immigration schedule planner with Next.js, Redux, and FullCalendar.js](https://github.com/snamiki1212/plangoab)

しいていえば、RoR は仕事で使ってきましたが 0→1 で立ち上げるケースでの開発がはじめてでした。

## Svelte ＋ GlitchEffect

機会がありポートフォリオサイトを作ることになりました。
普通に作るのはあまりにつまらないので色気を出して Svelte を使ってます。

[Svelte でポートフォリオサイトを作った話](/portfolio-v-2)

また、CSS アニメーションとして GlitchEffect も利用しています。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ようやっとカッコいいNosiyなCSSアニメーションになって満足<a href="https://t.co/EXZMxdjaAs">https://t.co/EXZMxdjaAs</a> <a href="https://t.co/n5iMK4X8VS">pic.twitter.com/n5iMK4X8VS</a></p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1360360750867353601?ref_src=twsrc%5Etfw">February 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ジャギーでかっこいいアニメーションですが、それなりにしんどかったので使いどころは考えものですね。

## Rust のお勉強

Rust については、「１〜２ヶ月くらい学んで、またしばらく無勉強」を２〜３回くらい今年は繰り返していました。なんだか去年もそんな感じで波のある学習をしてる気がするなー。

学んだ教材はここらへんです。

- [The Rust Programming Language](https://doc.rust-jp.rs/book-ja/)
- [GitHub - snamiki1212/example-rustlings](https://github.com/snamiki1212/example-rustlings)

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://t.co/dZetg6LWlb">https://t.co/dZetg6LWlb</a><br><br>Rustのexerciseやってみてる</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1365500612633268226?ref_src=twsrc%5Etfw">February 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ここらへんでだいたい理解したのでまずは簡単な Alfred 用のツールを作りました。

- [GitHub - snamiki1212/alfred-url2md-rust](https://github.com/snamiki1212/alfred-url2md-rust)

ここまでで Rust の座学的な理解は落ち着いたのでプロジェクトを作ろうかなーということでなにか作ることにして、RealWorld プロジェクトを作ることにしました。

## Rust による RealWorld プロジェクト

Rust + ActixWeb にて、RealWorld のプロジェクトをスクラッチで書きました。

- [GitHub - snamiki1212/realworld-rust-actix-web](https://github.com/snamiki1212/realworld-rust-actix-web)

### RealWorld プロジェクトとは

任意の技術で Medium クローンの Web サービスを開発する OSS プロジェクトです。

- [GitHub - gothinkster/realworld: "The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more 🏅](https://github.com/gothinkster/realworld)

なにかの技術を PoC で作成するときによくあるのが HelloWorld や ToDo アプリですが、これらだとコードボリュームが少なすぎてプロダクションで起きるであろう問題が顕在化しません。

RealWorld プロジェクトでは、フロントエンドとバックエンドでそれぞれ明確に仕様が決められていてこれに従うことで Medium クローンが作成でき、実際のプロダクションレベルのコードを書いたときに起き得るであろう問題や気付きを得られるであろう、というものです。

### なんで作ったの

もともと「Rust で何かを作りたい」と思って候補を考えていたところ、RealWorld プロジェクトにて ActixWeb のリポジトリが登録されていなかったため、自分が作成すれば登録してもらえそうだなーという思いからはじめました。

ただ、作り始めてから気づいたのですが、すでに ActixWeb の RealWorld プロジェクトがあるのを見つけました。とはいえ、すでにメンテされないことを明示化されているので、自分のプロジェクトを作る意義はまぁありますね。

- [GitHub-fairingrey/actix-realworld-example-app](https://github.com/fairingrey/actix-realworld-example-app)

### 今後どうするの

今の進捗として、80~90％まで完成しています。ですが、ここらへんで心が折れてしまって開発が止まってしまっています。

また技術スタックとして、ActixWeb ＋ Diesel で作ったのですが正直 ORM でハマることが多すぎるので、sqlx に変えようかと考えてます。

なので、いろいろ落ち着いてからここらへんの技術スタックを変更しつつ進めようかなーと思っているところです。

## RTK / RTK Query

今年は２つのプロジェクトにて RTK Query を導入しました。

RTK Query とは、Redux Toolkit のキャッシング＋ステートマネジメントの機能です。

- [Redux Toolkit | Redux Toolkit](https://redux-toolkit.js.org/)

特に、「全部で 40 個近くある features をすべて RTK/Thunk 化する」というタスクがあり、かなりの数を書き直したので RTK・RTK Query を使う分にはドキュメントを見ないでもかなりサラサラ書けるくらいになりました。

[RTK Query を実際にプロジェクトで使ってみた](/rtk-query/)

## Hooks でリファクタリングする心得

React の Hooks でコンポーネントをリファクタリングするタスクが今年はそれなりにありました。
というのも、FatComponent と遭遇することが多かったからですね。

ですが、そのおかげで「Hooks でどうリファクタリングしていくか」自分なりに整理できましたので記事に残してました。

[Hooks でリファクタリング｜ FatComponent の倒し方](/refactor-fat-component)

## Redux をリファクタリングする心得

同じく Redux をリファクタリングする機会があり、どうリファクタリングをするかを自分なりにまとめられたので、記事にしてます。（TODO：あとで書く）

TODO：Redux をリファクタリング｜段階的に RTK 化する

## アルゴリズム

今年は時間を取って、データ構造とアルゴリズムについて学びなおしました。

具体的にやったことをまとめるので、記事にします（TODO：あとで書く）

TODO：アルゴリズムとデータ構造を学びなおした話

## Swift ＋ UIKit でモバイル開発とアルゴリズム

Swift ＋ UIKit によるモバイル開発とアルゴリズム課題をしていました。

動機として、留学先の CICCC のモバイルクラスで出された課題を作成していたからです。
だいたいリポジトリが 30 個分くらいの書き捨てのアプリケーションとアルゴリズムを作成しました。

- [snamiki1212 (Nash) · GitHub: language=swift](https://github.com/snamiki1212?tab=repositories&q=&type=&language=swift)

Swift を使った学習しての気付きとしては、こんな感じです。

- Swift は、モダン言語はなだけあって素晴らしい
- モバイル開発は、Imperative な UIKit が主流でしんどい
- 今後は、Declaritive な SwiftUI になるのが今は過渡期
- つまり、今は両方学ばないといけない。

「iOS エンジニアを目指そうかなー」と少し思っていたのですが、モバイルエンジニアになるにしては時期があまりに悪いのでやめました。
モバイル開発に慣れる２〜３年後には UIKit が SwiftUI に置き換わるので、再学習コストがかなり高いからです。

文句言ってますが、Swift はマジで良い言語でした。

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Swiftを学んでるけど言語仕様がモダンでめちゃくちゃ気にいって本気でMobileエンジニアに転向しようかと思ったけど、UIレイヤーが命令的UIKitから宣言的SwiftUIへの過渡期で今はUIKitを学んで頑張らないといけないのに数年後にはSwiftUIになるので参入時期的にはやや微妙だということがわかってきた</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1385033866172243970?ref_src=twsrc%5Etfw">April 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!--  -->

それと、SwiftUI だとコード量が少ないのですが、UI Kit だと正しく書いてもかなりしんどい印象です。

<!--  -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Swift+UIKitで簡単なToDoアプリを１つ作れたのでコード見返してるけど命令的UIなのとUIKitの命名思想的にAPI名が長いこともあってシンプルなToDo機能しかないのにコード量が多すぎる。。。ToDoでこのボリュームだと普通のアプリケーションをUIKitで開発するとコード量どんだけ多くなるんだ、これ</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1393011760630665216?ref_src=twsrc%5Etfw">May 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!--  -->

なので、正直 Swift を学んだのはサンクコストだった気はしていますがまぁ気にしないでいきます。

ちなみに、こんな感じの気付きもありました。

<!--  -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">フロントエンドのTypeScriptやReact GUIを見てると負債感のあるJSやHTML/CSSをラッピングしてどうにかしようとしてるのに対して、iOSはObjective-CやUIKitを根本からリプレイスしてSwiftやSwiftUIに差し替えようとしてて戦略の違いをすごい感じる。</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1415382247096537089?ref_src=twsrc%5Etfw">July 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!--  -->

## Objective-C を学んだ

留学先の学校の課題で Objective-C も出されたのでなんとなく学びました。

10 個くらい書き捨てのリポジトリを作ってますね。

- https://github.com/snamiki1212?tab=repositories&q=&type=&language=objective-c&sort=

やや古い言語なのでまったく期待してなかったのですが思った以上に学ぶのが面白かったのです。とはいえ、これもサンクコスト感が強いですね。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Objective-Cの基本構文を学んでるけどほぼCな言語感ながらsmalltalkの要素を含んでて特にこのsmalltalk的なシンタックスが初めてなので第一印象が意外と面白いと感じてる。やや古い言語なので絶対おもろくないと思ってた。</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1412119223778746386?ref_src=twsrc%5Etfw">July 5, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

興味としては SwiftUI をやりたかったですが、「実査のプロジェクトで Objective-C で書かれてるレガシーなコードはかなり多いので」という理由で Objective-C でした。

ぐう値が出ないくらいの現実主義な方針ですね。

### おわりに

今年、学んだことをいろいろ書き出してみました。

年末に一気に書くとしんどいので、それぞれ作るごとにきちんと記事にしたり整理してあげるべきですね、ほんとに。

来年もガンガン学んでいきます。
