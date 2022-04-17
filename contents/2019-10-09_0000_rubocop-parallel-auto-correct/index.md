---
title: '【Ruby】rubocopでparallelとauto-correctを同時をあわせて行う'
createdAt: '2019-10-09 00:00'
updatedAt: '2019-10-09 00:00'
category: '技術'
tags:
  - Ruby
slug: rubocop-parallel-auto-correct
---

# rubocop で parallel と auto-correct を同時をあわせて行う

tl;dr

- オフィシャルな機能では、ない(2019/10/9 時点)
- ワンライナーだと下記で実行できる

```shell
options="--rails --config .rubocop_todo.yml"; \
bundle exec rubocop --parallel --format files $options \
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
```

## 解説

1~3 行あるので、それぞれ解説。ざっくり結論だと、

- 【1 行目】「設定を定義」
- 【2 行目】「rubocop1 回目を parallel で実施」
- 【3 行目】「rubocop2 回目を auto-correct で実施（2 行目で Hit したファイルだけを対象に実施）」

以上。

### 1 行目

```shell
# ↓
options="--rails --config .rubocop_todo.yml"; \
# ↑
bundle exec rubocop --parallel --format files $options \
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
```

2,3 行目で行う rubocop での共通 option をここで定義しているだけです。
DRY に書きたかったので、変数に入れてます。
自分のプロジェクトでの rubocop での設定ごとにここは書き換える必要がありますね。

### 2 行目

```shell
options="--rails --config .rubocop_todo.yml"; \
# ↓
bundle exec rubocop --parallel --format files $options \
# ↑
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
```

- `--parallel` を入れることで並列に処理してくれます。
- `--format files` を入れることで、rubocop で Lint Error になったファイル名だけを出力してくれます
  → これを次の 3 行目で使います

### 3 行目

```shell
options="--rails --config .rubocop_todo.yml"; \
bundle exec rubocop --parallel --format files $options \
# ↓
| xargs -I XXX_REPLACE bash -c 'bundle exec rubocop --auto-correct --display-cop-names ${options} XXX_REPLACE'
# ↑
```

- 2 行目の結果を対象に、rubocop の auto-correct を実行します。
- `bash <2行目> | bundle exec rubcop --auto-correct` でも 2 行目の結果を 3 行目に渡せられるのですが、2 行目が空だった場合、ファイル指定なしで 3 行目が実行される＝全ファイルを対象に実行されてしまうので、`xargs+Iオプション`を使ってます。これで、2 行目が空だった場合は、3 行目が実行されないです。
- `xargs -I REPLACER` で`REPLACER`の文言を Key にして、後続処理コマンドの文字列を置換してくれます。
  - 上では、「`XXX_REPLACE` 」が 「2 行目の rubocop で Hist したファイル名」に置き換わります。
- 大抵、docker 上で実行するので、zsh ではなくて手堅く bash にしてます

## 備考 1: 公式

`--parallel + --auto-correct` の機能について、[PR&Issue](https://github.com/rubocop-hq/rubocop/pull/7187) が rubocop にあがってたけど、コア機能に複雑性が増す＋処理速度の向上がそこまでではない、という理由で Close されてます。

## 備考 2: 別案 `autowow`

別案で Gem もあります。

≫ https://medium.com/c-hive/how-to-rubocop-parallel-auto-correct-8d4b68a22d8b

ただ、手軽なワンライナーで十分、というかワンライナーすら必要ないくらいかと思っているので、試していないです。
