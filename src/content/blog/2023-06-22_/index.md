---
layout: /src/layouts/PostLayout.astro
title: "RustのプロジェクトでMVCからClean Architectureにリアーキテクチャした話"
createdAt: "2023-06-22 17:00"
updatedAt: "2023-06-22 17:00"
category: "技術"
tags:
  - Rust
slug: rearchitect-realworld-rust
word:
  - nothing
---


ども、Nash です。

この記事は、自分が作成している Rust のプロジェクトを MVC から Clean Architecture にリアーキテクトした話です。

そこまで重い内容と学びとかはないですが、せっかくなので記事として残しておきます。

では、見ていきます。

## リアーキテクトする背景

過去に Rust の学習のため、RealWorld のプロジェクトを Rust で作成していました。

[Rust+ActixWeb+Diesel で Realworld プロジェクトを登録した話](/rust-actix-web-diesel-realworld/)

[GitHub - snamiki1212/realworld-v1-rust-actix-web-diesel: RealWorld with Rust + ActixWeb + Diesel on Clean Architecture](https://github.com/snamiki1212/realworld-v1-rust-actix-web-diesel)

作成時のモチベーションとしては、とりあえず手を動かして Rust を使いつつプロジェクトとして形にすることを優先していましが、アーキテクチャについてはシンプルな MVC を基本にしていて途中からかなり汚くなってしまっていた状態です。

個人のプロジェクトなので「まぁそんなもんだよね」という気持ちもあったのですがつい先日カジュ面していたら「あ、そのリポジトリを昔に見たことあります」と言われたり、本当に少しずつですがスターやフォークされていたりと、意外と人に見られているなーと思うようになりました。

というわけで、イケてない設計で放置してたのも気持ち悪かったのでよい機会だったのでリアーキテクトすることにしました。

## クリーンアーキテクチャと Rust を学ぶ

リアーキテクトする先としてクリーンアーキテクチャをベースにするのが良さそうだなーと思っていたので、いくつかの解説記事を見て理解を深めます。また、言語レベルでもどう実現すればいいのかの目処も建てたいので「Rust でクリーンアーキテクチャ」という文脈でも合わせて調べました。

ここで、自分が読んだ情報をまとめておきます。

- [クリーンアーキテクチャ完全に理解した · GitHub](https://gist.github.com/mpppk/609d592f25cab9312654b39f1b357c60)

- [Rust の DI を考える –– Part 2: Rust における DI の手法の整理 - paild tech blog](https://techblog.paild.co.jp/entry/2023/06/12/170637)
- [GitHub - MSC29/clean-architecture-rust: A Clean Archtiecture template for a Rest API in rust](https://github.com/MSC29/clean-architecture-rust/tree/main)
- [GitHub - Sairyss/domain-driven-hexagon: Learn Domain-Driven Design, software architecture, design patterns, best practices. Code examples included](https://github.com/Sairyss/domain-driven-hexagon)

正直、まだクリーンアキテクチャを完全に理解してるわけではないですが「まぁだいたいこんな感じで実装すればいいんかな」となったのでひとまず作ってみます。手を動かすの大事。

## リアーキテクト前の状態

そもそものリアーキテクト前の状態ですが、シンプルな MVC パターンで構築していました。

[![](https://mermaid.ink/img/pako:eNqVUk1PwzAM_StRToA2eq_QJLZynJDYkXLwEm8EtUlx3CE07b_TJC2rqk2Imz_es9-zfJTKaZS59PjZolVYGNgT1KUVAhQ7EqvKoOWQN0BslGnAslgbrSv8AkIBfpQ9bGmR1b9pdjclrpxlclWFFIjnLBJfdwjcEr5l0Jh78lPyBulgVFzZhxOaT9UL1GJZ2lBLdsR8sRipzgUF-z7aHFkLqLPEXMzjhLODaf_Re7O3gp14SfPE8_YDFQeVNyOZ_bZO5u2Fib21ft3gOXSKZSyGcrH8A_sf3V18QGJhbJTuG2c9XtWe2lfEp_uGgyaYnMkaqQajuyc7BkIp-R1rLGXehRp30FZcytKeOmjbaGB80qb7PJnvoPI4k9Cy23xbJXOmFgdQ_6hDESNnnZ45_vTpB2sR_2U?type=png)](https://mermaid.live/edit#pako:eNqVUk1PwzAM_StRToA2eq_QJLZynJDYkXLwEm8EtUlx3CE07b_TJC2rqk2Imz_es9-zfJTKaZS59PjZolVYGNgT1KUVAhQ7EqvKoOWQN0BslGnAslgbrSv8AkIBfpQ9bGmR1b9pdjclrpxlclWFFIjnLBJfdwjcEr5l0Jh78lPyBulgVFzZhxOaT9UL1GJZ2lBLdsR8sRipzgUF-z7aHFkLqLPEXMzjhLODaf_Re7O3gp14SfPE8_YDFQeVNyOZ_bZO5u2Fib21ft3gOXSKZSyGcrH8A_sf3V18QGJhbJTuG2c9XtWe2lfEp_uGgyaYnMkaqQajuyc7BkIp-R1rLGXehRp30FZcytKeOmjbaGB80qb7PJnvoPI4k9Cy23xbJXOmFgdQ_6hDESNnnZ45_vTpB2sR_2U)

ただ、ややファットモデルになってきたので雑に Service というレイヤーを作ってしまってここにもロジックを集めてしまったのが問題でした。Model と Service それぞれでクエリを実行していたり相互に依存していたり、と混沌としはじめていた状態です。

[Release v1.0.0 · snamiki1212/realworld-v1-rust-actix-web-diesel · GitHub](https://github.com/snamiki1212/realworld-v1-rust-actix-web-diesel/releases/tag/v1.0.0)

## リアーキテクト後の状態

Clean Architecture にリアーキテクトした結果がこのとおりです。

[![](https://mermaid.ink/img/pako:eNqNk99rgzAQx_-VECi0rOq7jD509rEwXPdU-5DquQbUuORcKaX_-xLj71GmIFzuvvnk7pK701gkQH2aZuIaX5hEcgiigujvLeNQ4HIZUWtFdLWykVBUCMeI7nmSZHBlEsiLdZLXs9yY31My9lhZeonkPyCVd887sVoTacSPiJ6ao0SBUmQZSE3tF39gKTCsNMA7NtbJizu1cqXqiO9apXOugZ09h1e24hHuU0HMlKm5seagKisdgUIoheIo5E2z-sUcnGzVfIzcFcjR4KwxBwVGOcEE2-MyYMjOOuWV9lnvYkEOoiQoyFYginz4NIjjhPBdgULH2dj7H7wPYpz9XU4vug43zRz1uA70nZm2rQ7bSofl1-5gO0jb5msy1wW0JRLHfbLd_edU92m6JtI9scnr09EQVCkKBUZm-0bXNAeZM57oububHRHFC-QQUV-bCaSsyvS4RcVDS6syYQi7xORB_ZRlCtaUVSg-bkVMfZQVtKKAsy_J8k4F9aa9HfB6zh-_085WkQ?type=png)](https://mermaid.live/edit#pako:eNqNk99rgzAQx_-VECi0rOq7jD509rEwXPdU-5DquQbUuORcKaX_-xLj71GmIFzuvvnk7pK701gkQH2aZuIaX5hEcgiigujvLeNQ4HIZUWtFdLWykVBUCMeI7nmSZHBlEsiLdZLXs9yY31My9lhZeonkPyCVd887sVoTacSPiJ6ao0SBUmQZSE3tF39gKTCsNMA7NtbJizu1cqXqiO9apXOugZ09h1e24hHuU0HMlKm5seagKisdgUIoheIo5E2z-sUcnGzVfIzcFcjR4KwxBwVGOcEE2-MyYMjOOuWV9lnvYkEOoiQoyFYginz4NIjjhPBdgULH2dj7H7wPYpz9XU4vug43zRz1uA70nZm2rQ7bSofl1-5gO0jb5msy1wW0JRLHfbLd_edU92m6JtI9scnr09EQVCkKBUZm-0bXNAeZM57oububHRHFC-QQUV-bCaSsyvS4RcVDS6syYQi7xORB_ZRlCtaUVSg-bkVMfZQVtKKAsy_J8k4F9aa9HfB6zh-_085WkQ)

基本的に DI・DIP をベースに処理フローは下記のとおりです。

### Middleware + Routes

Request に対して前処理である Middleware を実行し、その後に Routing します。Middleware は CORS や Auth などがあり、Routing した結果として Controller に処理を渡します。

### Controller

受け取った Request や URL Path などをパースするレイヤーです。これらのデータを引数に後続の処理である Usecase に渡します。

### Usecase

複数の Repository を呼び出して、その結果を Presenter に渡すレイヤーです。ここでいうリポジトリとは複数のテーブル、全文検索、キャッシュなどデータが格納されているもので、これらから取得したデータを Presenter に渡します。このプロジェクトにおけるリポジトリはデータベースのみなので、処理はかなりシンプルです。

### Repository + Entity

このプロジェクトではデータベースが唯一のリポジトリなのですが、例えばデータベース、全文検索などへのアクセスをする処理です。

### Presenter

Usecase によって呼び出される Response の整形を行うレイヤーです。このアプリでは JSON を返すだけなので、View 層もシンプルですが場合によっては HTML を返したりすることもあるかと思います。

[Release v2.0.0 · snamiki1212/realworld-v1-rust-actix-web-diesel · GitHub](https://github.com/snamiki1212/realworld-v1-rust-actix-web-diesel/releases/tag/v2.0.0)

## リアーキテクトについて

今回のリアーキテクトは簡単なところから段階的に始めていて。

- 構造を変更する
- DI Container を作る
- Interface 化する

というような流れで行いました。特に DI Container については実装方法がいくつかあるようで、どの方法で実装するかは途中で手を動かしながら決めたような形です。

### 所感

やや見切り発車で始めましたが無事にリアーキテクトできてよかったです。特に Rust がまだ全然なれていないので「エラー文見てもよくわからん」みたいなケースもまだ多いので最悪頓挫するかと思ってました。。。

### おわりに

リアーキテクトした話でした。構造もきれいになったので人に見られても大丈夫という点と、汚い状態で放置していたという懸念が解消されて精神衛生的がすこぶる良くなりました。

まだクエリビルダ周りについてリファクタの余地がありそうなのですが、時間のあるときに徐々に手を入れてあげようかなーと思います。
