---
layout: /src/layouts/PostLayout.astro
title: "ScyllaDB Universityでお勉強"
createdAt: "2023-07-03 17:00"
updatedAt: "2023-07-03 17:00"
category: "技術"
tags:
  - ScyllaDB
slug: learnigng-scylladb-on-university
word:
  - nothing
---

# ScyllaDB University でお勉強

ども、Nash です。

最近、ScyllaDB を学んだのでそのお勉強メモの記事になります。

## ScyllaDB 学習の背景

カジュ面をしていたときに「このポジションだと Cassandra をめちゃくちゃ使います」みたいな会社があり、自分が「あー名前は知ってます」くらいの浅い知識だったのでどんなもんか調べてみました。

んで、Cassandra について学ぼうかと調べ始めたのですが、最近 Discord が Cassandra⇒ScyllaDB にリプレイスした記事を見つけて、しかも ScyllaDB が Cassandra を完全互換性を謳っているみたいです。

[How Discord Stores Trillions of Messages](https://discord.com/blog/how-discord-stores-trillions-of-messages)

それなら、Cassandra の後継となる ScyllaDB を学べば、そもそも Cassandra の問題となってる点も理解しつつ比較して理解できるかと思って ScyllaDB を学ぶことにしました。

ちなみに、Scylla の発音はカタカナで表記するならシラーかスィラーとかが適切かと思います。スキュラという表記をしている日本語記事が多いですね。。。

[How do you say "Scylla"?](https://www.youtube.com/watch?v=7isN-b83X84&ab_channel=ScyllaDB)

## ScyllaDB University で学ぶ

さて、ScyllaDB には、ScyllaDB University という公式学習コンテンツのプラットフォームがあります。ここにコンテンツがいくつかもありますが、Learning Path が Developer、Architect、Administrator ごとに提示されているので自分のポジションに見合うポジションごとに LearningPath を選択して、それに沿ってコースを取っていけば良さそうです。

ひとまず、今回はすべてのパスで共通してる下記のコースで ScyllaDB について基礎的な知識を学びました。

- S101: ScyllaDB Essentials

https://university.scylladb.com/

## S101: ScyllaDB Essentials

このコースで学べる内容としては下記のような内容です。

- ScyllaDB Architecture
- Fundamental concepts like CL / RF
- Cluster behavior on read/write

受講した感想としては、めちゃくちゃクオリティの高い教材でしかもわかりやすいのでサクサク進めれます。英語ですが、なんとなくでほぼ読めるので特に詰まることもなかったです。

自分のメモとして、学んだ内容をここにまとめておきます。とはいえ、どう頑張っても劣化 S101 になるので興味ある人はキチンと S101 を受けることをおすすめします。

### ScyllaDB とは

ScyllaDB とは

- 分散 DB
- Cassandra と完全互換性を持つ。
- Cassandra が Java で書かれていて、ScyllaDB は C++でリライトされたもの。
- Cassandra よりもパフォーマンスが良く、理由として言語とアーキテクチャが異なるため。
- CAP 定理における AP 型。とはいえ、CAP の C は 操作・ユーザー・ストレージなどのさまざまな粒度でレベルを変更できる（Tunable Consistency）

ScyllaDB の Architecture

- Masterless Architecture
- Ring Architecture
- Data Model: Wide Column Store as key-key-value
- Structure1: Datacenter > Cluster > Keyspace > Table > Row
- Structure2: Datacenter > Cluster > Node > Shard(per thread)

ScyllaDB の特徴

- 4 Core Principles: High Scallability / High Availlability / High Performance / Low Maintanance
- No Single point of Failre
- 3 Flavers: Open Source / Enterprise / Cloud

ScyllaDB の機能

- Replication Factor(RF): データを何個レプリケーションするか。(ex) RF=3 ならデータが 3 箇所に保存されるので、2 箇所の Node が死んだり保存失敗しても 1 箇所残ってるので可用性を維持。
- Consistency Level(CL): Read/Write 時にどれだけの一貫性を満たしているかのレベル。(ex) CL=3 なら 3 箇所以上から ACK が帰ってこないと Error。
- RF TradeOff: Write Latency とトレードオフ。RF が大きいと、レプリケーション処理が多く発生するので Low Latency になる。
- CL TradeOff: Write/Read Latency と Availability とトレードオフ。CL が厳格だと、複数から Ack が帰ってくるのを待つので Low Latency なのと、条件を満たさないとオペレーション自体がエラーになるので Availability も減少する。

## 所感

自分のいまでの経験として分散系としてはアクターモデルをベースにした Erlang/OTP によるに分散プログラミングくらいでした。Erlang と ScyllaDB ではやはり違う点がいくつかある一方で近いコンセプトもいくつかありました。

例えば、Erlang では Tree Architecture ですが、ScyllaDB では Ring Architecture と構造は異なっていますが、そもそもそれらを構成している Cluster、Node、Message などは同じところから始まっているように見えます。

他にも、Erlang/OTP だと Restart Strategy をどう設計するかが大事だったりしますが、 ScyllaDB では Consistency Level や Replication Factor などをどうするかが重視されるように見えます。これは、Erlang ではクラッシュした Node をどう復帰するかが重視されていて、ScyllaDB では Write/Read 処理をどう実現していくかが重視されている現れかと思っています。

分散系という時点で同じようなアイデアは多かった一方で違いもあり、それはつまりなにが重要視されているかが違うのかという観点で面白いなーと思いながら学んでいきました。ひとまずは S101 を受講しましたが、時間を見つけてこれ以降のコースも見ていこうかと思います。

## その他

S101 の受講が完了したので Certification が発行されたのでダウンロードしつつ Linkedin に登録されました。めでたし。
