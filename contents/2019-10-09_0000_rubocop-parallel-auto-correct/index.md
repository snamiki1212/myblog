---
title: 'rubocopでparallelとauto-correctを同時をあわせて行う'
cover: 'cover.jpg'
createdAt: '2019-10-09 00:00'
category: 'Tech'
tags:
  - Tech
slug: rubocop-parallel-auto-correct
---

# rubocopでparallelとauto-correctを同時をあわせて行う

tl;dr

- オフィシャルな機能では、ない(2019/10/9時点)
- ワンライナーだと下記で実行できる

```shell
options="--rails --config .rubocop_todo.yml"; \
bundle exec rubocop --parallel --format files $options \
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
```

## 解説

1~3行あるので、それぞれ解説。ざっくり結論だと、

- 【1行目】「設定を定義」
- 【2行目】「rubocop1回目をparallelで実施」
- 【3行目】「rubocop2回目をauto-correctで実施（2行目でHitしたファイルだけを対象に実施）」

以上。

### 1行目

```shell
# ↓
options="--rails --config .rubocop_todo.yml"; \
# ↑
bundle exec rubocop --parallel --format files $options \
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
```

2,3行目で行うrubocopでの共通optionをここで定義しているだけです。
DRYに書きたかったので、変数に入れてます。
自分のプロジェクトでのrubocopでの設定ごとにここは書き換える必要がありますね。

### 2行目

```shell
options="--rails --config .rubocop_todo.yml"; \
# ↓
bundle exec rubocop --parallel --format files $options \
# ↑
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
```

- `--parallel` を入れることで並列に処理してくれます。
- `--format files` を入れることで、rubocopでLint Error になったファイル名だけを出力してくれます
  →これを次の3行目で使います

### 3行目

```shell
options="--rails --config .rubocop_todo.yml"; \
bundle exec rubocop --parallel --format files $options \
# ↓
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
# ↑
```

- 2行目の結果を対象に、rubocopのauto-correct を実行します。
- `bash <2行目> | bundle exec rubcop --auto-correct` でも 2行目の結果を3行目に渡せられるのですが、2行目が空だった場合、ファイル指定なしで3行目が実行される＝全ファイルを対象に実行されてしまうので、`xargs+Iオプション`を使ってます。これで、2行目が空だった場合は、3行目が実行されないです。
- `xargs -I REPLACER` で`REPLACER`の文言をKeyにして、後続処理コマンドの文字列を置換してくれます。
  - 上では、「`XXX_REPLACE` 」が 「2行目のrubocopでHistしたファイル名」に置き換わります。
- 大抵、docker 上で実行するので、zsh ではなくて手堅く bash にしてます

## 備考1: 公式

`--parallel + --auto-correct` の機能について、[PR&Issue](https://github.com/rubocop-hq/rubocop/pull/7187) がrubocopにあがってたけど、コア機能に複雑性が増す＋処理速度の向上がそこまでではない、という理由でCloseされてます。

## 備考2: 別案 `autowow`

別案でGemもあります。

≫ https://medium.com/c-hive/how-to-rubocop-parallel-auto-correct-8d4b68a22d8b

ただ、手軽なワンライナーで十分、というかワンライナーすら必要ないくらいかと思っているので、試していないです。

