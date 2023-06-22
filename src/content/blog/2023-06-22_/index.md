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

## RustのプロジェクトでMVCからClean Architectureにリアーキテクチャした話

ども、Nashです。

この記事は、自分が作成しているRustのプロジェクトをMVCからClean Architectureにリアーキテクトした話です。

そこまで重い内容と学びとかはないですが、せっかくなので記事として残しておきます。

では、見ていきます。

## リアーキテクトする背景

過去にRustの学習のため、RealWorldのプロジェクトをRustで作成していました。

[Rust+ActixWeb+DieselでRealworldプロジェクトを登録した話](/rust-actix-web-diesel-realworld/)

[GitHub - snamiki1212/realworld-v1-rust-actix-web-diesel: RealWorld with Rust + ActixWeb + Diesel on Clean Architecture](https://github.com/snamiki1212/realworld-v1-rust-actix-web-diesel)

作成時のモチベーションとしては、とりあえず手を動かしてRustを使いつつプロジェクトとして形にすることを優先していましが、アーキテクチャについてはシンプルなMVCを基本にしていて途中からかなり汚くなってしまっていた状態です。

個人のプロジェクトなので「まぁそんなもんだよね」という気持ちもあったのですがつい先日カジュ面していたら「あ、そのリポジトリを昔に見たことあります」と言われたり、本当に少しずつですがスターやフォークされていたりと、意外と人に見られているなーと思うようになりました。

というわけで、イケてない設計で放置してたのも気持ち悪かったのでよい機会だったのでリアーキテクトすることにしました。

## クリーンアーキテクチャとRustを学ぶ

リアーキテクトする先としてクリーンアーキテクチャをベースにするのが良さそうだなーと思っていたので、いくつかの解説記事を見て理解を深めます。また、言語レベルでもどう実現すればいいのかの目処も建てたいので「Rustでクリーンアーキテクチャ」という文脈でも合わせて調べました。

ここで、自分が読んだ情報をまとめておきます。

- [クリーンアーキテクチャ完全に理解した · GitHub](https://gist.github.com/mpppk/609d592f25cab9312654b39f1b357c60)

- [Rust の DI を考える –– Part 2: Rust における DI の手法の整理 - paild tech blog](https://techblog.paild.co.jp/entry/2023/06/12/170637)
- [GitHub - MSC29/clean-architecture-rust: A Clean Archtiecture template for a Rest API in rust](https://github.com/MSC29/clean-architecture-rust/tree/main)
- [GitHub - Sairyss/domain-driven-hexagon: Learn Domain-Driven Design, software architecture, design patterns, best practices. Code examples included](https://github.com/Sairyss/domain-driven-hexagon)

正直、まだクリーンアキテクチャを完全に理解してるわけではないですが「まぁだいたいこんな感じで実装すればいいんかな」となったのでひとまず作ってみます。手を動かすの大事。

## リアーキテクト前の状態

そもそものリアーキテクト前の状態ですが、シンプルなMVCパターンで構築していました。

[![](https://mermaid.ink/img/pako:eNqVUk1PwzAM_StRToA2eq_QJLZynJDYkXLwEm8EtUlx3CE07b_TJC2rqk2Imz_es9-zfJTKaZS59PjZolVYGNgT1KUVAhQ7EqvKoOWQN0BslGnAslgbrSv8AkIBfpQ9bGmR1b9pdjclrpxlclWFFIjnLBJfdwjcEr5l0Jh78lPyBulgVFzZhxOaT9UL1GJZ2lBLdsR8sRipzgUF-z7aHFkLqLPEXMzjhLODaf_Re7O3gp14SfPE8_YDFQeVNyOZ_bZO5u2Fib21ft3gOXSKZSyGcrH8A_sf3V18QGJhbJTuG2c9XtWe2lfEp_uGgyaYnMkaqQajuyc7BkIp-R1rLGXehRp30FZcytKeOmjbaGB80qb7PJnvoPI4k9Cy23xbJXOmFgdQ_6hDESNnnZ45_vTpB2sR_2U?type=png)](https://mermaid.live/edit#pako:eNqVUk1PwzAM_StRToA2eq_QJLZynJDYkXLwEm8EtUlx3CE07b_TJC2rqk2Imz_es9-zfJTKaZS59PjZolVYGNgT1KUVAhQ7EqvKoOWQN0BslGnAslgbrSv8AkIBfpQ9bGmR1b9pdjclrpxlclWFFIjnLBJfdwjcEr5l0Jh78lPyBulgVFzZhxOaT9UL1GJZ2lBLdsR8sRipzgUF-z7aHFkLqLPEXMzjhLODaf_Re7O3gp14SfPE8_YDFQeVNyOZ_bZO5u2Fib21ft3gOXSKZSyGcrH8A_sf3V18QGJhbJTuG2c9XtWe2lfEp_uGgyaYnMkaqQajuyc7BkIp-R1rLGXehRp30FZcytKeOmjbaGB80qb7PJnvoPI4k9Cy23xbJXOmFgdQ_6hDESNnnZ45_vTpB2sR_2U)



ただ、ややファットモデルになってきたので雑にServiceというレイヤーを作ってしまってここにもロジックを集めてしまったのが問題でした。ModelとServiceそれぞれでクエリを実行していたり相互に依存していたり、と混沌としはじめていた状態です。

[Release v1.0.0 · snamiki1212/realworld-v1-rust-actix-web-diesel · GitHub](https://github.com/snamiki1212/realworld-v1-rust-actix-web-diesel/releases/tag/v1.0.0)


## リアーキテクト後の状態

Clean Architectureにリアーキテクトした結果がこのとおりです。

[![](https://mermaid.ink/img/pako:eNqNk99rgzAQx_-VECi0rOq7jD509rEwXPdU-5DquQbUuORcKaX_-xLj71GmIFzuvvnk7pK701gkQH2aZuIaX5hEcgiigujvLeNQ4HIZUWtFdLWykVBUCMeI7nmSZHBlEsiLdZLXs9yY31My9lhZeonkPyCVd887sVoTacSPiJ6ao0SBUmQZSE3tF39gKTCsNMA7NtbJizu1cqXqiO9apXOugZ09h1e24hHuU0HMlKm5seagKisdgUIoheIo5E2z-sUcnGzVfIzcFcjR4KwxBwVGOcEE2-MyYMjOOuWV9lnvYkEOoiQoyFYginz4NIjjhPBdgULH2dj7H7wPYpz9XU4vug43zRz1uA70nZm2rQ7bSofl1-5gO0jb5msy1wW0JRLHfbLd_edU92m6JtI9scnr09EQVCkKBUZm-0bXNAeZM57oububHRHFC-QQUV-bCaSsyvS4RcVDS6syYQi7xORB_ZRlCtaUVSg-bkVMfZQVtKKAsy_J8k4F9aa9HfB6zh-_085WkQ?type=png)](https://mermaid.live/edit#pako:eNqNk99rgzAQx_-VECi0rOq7jD509rEwXPdU-5DquQbUuORcKaX_-xLj71GmIFzuvvnk7pK701gkQH2aZuIaX5hEcgiigujvLeNQ4HIZUWtFdLWykVBUCMeI7nmSZHBlEsiLdZLXs9yY31My9lhZeonkPyCVd887sVoTacSPiJ6ao0SBUmQZSE3tF39gKTCsNMA7NtbJizu1cqXqiO9apXOugZ09h1e24hHuU0HMlKm5seagKisdgUIoheIo5E2z-sUcnGzVfIzcFcjR4KwxBwVGOcEE2-MyYMjOOuWV9lnvYkEOoiQoyFYginz4NIjjhPBdgULH2dj7H7wPYpz9XU4vug43zRz1uA70nZm2rQ7bSofl1-5gO0jb5msy1wW0JRLHfbLd_edU92m6JtI9scnr09EQVCkKBUZm-0bXNAeZM57oububHRHFC-QQUV-bCaSsyvS4RcVDS6syYQi7xORB_ZRlCtaUVSg-bkVMfZQVtKKAsy_J8k4F9aa9HfB6zh-_085WkQ)

基本的にDI・DIPをベースに処理フローは下記のとおりです。

### Middleware + Routes

Requestに対して前処理であるMiddlewareを実行後にRoutingします。MiddlewareはCORSやAuthなどがあり、RoutingしてControllerに処理を渡します。

### Controller

受け取ったRequestやURL Pathなどをパースするレイヤーです。後続の処理であるUsecaseに渡します。

### Usecase

複数のRepositoryを呼び出して、その結果をPresenterに渡すレイヤーです。ここでいうリポジトリとは複数のテーブル、全文検索、キャッシュなどデータが格納されているもので、これらから取得したデータをPresenterに渡します。このプロジェクトにおけるリポジトリはデータベースのみなので、処理はかなりシンプルです。

### Repository + Entity

このプロジェクトではデータベースが唯一のリポジトリなのですが、例えばデータベース、全文検索などへのアクセスをする処理です。

### Presenter

Usecaseによって呼び出されるResponseの整形を行うレイヤーです。このアプリではJSONを返すだけなので、View層もシンプルですが場合によってはHTMLを返したりすることもあるかと思います。

[Release v2.0.0 · snamiki1212/realworld-v1-rust-actix-web-diesel · GitHub](https://github.com/snamiki1212/realworld-v1-rust-actix-web-diesel/releases/tag/v2.0.0)


## 所感

やや見切り発車で始めましたが無事にリアーキテクトできてよかったです。特にRustがまだ全然なれていないので「エラー文見てもよくわからん」みたいなケースもまだ多いので最悪頓挫するかと思ってました。

そのため、今回のリアーキテクトは簡単なところから段階的に始めていて。

- 構造を変更する
- DI Containerを作る
- Interface化する

というような流れで行いました。特にDI Containerについては実装方法がいくつかあるようで、どの方法で実装するかは途中で手を動かしながら決めたような形です。


### おわりに

リアーキテクトした話でした。構造もきれいになったので人に見られても大丈夫という点と、汚い状態で放置していたという懸念が解消されて精神衛生的がすこぶる良くなりました。

まだクエリビルダ周りについてリファクタの余地がありそうなのですが、時間のあるときに徐々に手を入れてあげようかなーと思います。
