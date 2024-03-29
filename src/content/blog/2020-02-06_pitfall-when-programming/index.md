---
layout: /src/layouts/PostLayout.astro
title: "プログラミングでハマったとき見る記事【行動／原因／メンタルケア】"
createdAt: "2020-02-06 14:00"
updatedAt: "2020-02-06 14:00"
category: "技術"
tags:
  - プログラミング
slug: pitfall-when-programming
word:
  - "プログラミング ハマったとき"
  - "プログラミング ハマる"
---

# プログラミングでハマったとき見る記事【行動／原因／メンタルケア】

こんにちは、Nash です。最近はプログラミングでハマると 30 分くらい息抜きにブログ書いてます。

この記事は自分のメモ＋エンジニア向けに、ハマったときの

- ①【行動】すること
- ②【原因】理解しておくこと
- ③【対処】メンタルケア

についての記事です。

では、見ていきます。

## ハマった時にすること【行動】

自分のブログではないですが、行動として、下記の内容はかなり良い内容だと思うので、まずはこちら参照です。

▼ [プログラミングの初心者を抜け出すための習慣 | Social Change!](https://kuranuki.sonicgarden.jp/2018/01/practice-of-programming.html)

```
1. エラーが出ても慌てず、メッセージを読もう
2. ネットの情報を鵜呑みにしない
3. 公式ドキュメントから読もう
4. 当てずっぽうで試していかない
5. 未知のものは、まっさらな環境で試そう
6. ライブラリを見つける力と目利きを鍛えよう
7. 大雑把に理解できる力を身に付けよう
8. 一度に大きく作ろうとせず、小さく進めよう
9. コミットする前には、動作確認しよう
10. 最初にTODOリストを作ってから、始めよう
11. 頭から順に書き始めずに、構造化しよう
12. 頭で理解しきれないなら、絵にしてみよう
13. メンテナンスの前に、コードを読み込もう
```

では、ここに載ってなかったり分をかいていきます。

1. 問題から離れる
2. ラバーダッキング
3. 書き出す
4. オンラインで QA する

### 問題から離れる

ハマったときは問題に張り付きすぎている可能性が高いので１回問題から離れます。

具体的には、30 分〜1 時間くらい別のことをする感じです。

下記とか。

- 散歩する
- ブログ書く
- ランチ行く

経験的に、「30 分くらい別のことをやって、またハマった問題に戻ってくると、**5 分くらいで解決する**」みたいなケースが自分も多いです。

理由は後述するのですが、ハマる問題  の原因が前提条件のご認識で、このアクションを取ると「前提条件の再確認」が出来るからだと思っています。

### ラバーダッキング

リアルメンバーに相談＋雑談ベースでハマってる内容について会話します。

カフェ作業でリアルメンバーが居なかったり、友達がいないボッチさんでも大丈夫です。
**脳内友達に説明すれば OK なので**。

ラバーダッキングについての詳細は、「ラバーダッキング やりかた」とかでググってください。

### 書き出す

ラバーダッキングや「絵を書く」に、似てますね。

「今の状態になるまでやったこと」を書き出すことで

- ハマっていたことの証明（履歴）
- やった内容の共有

が、箇条書きに出てくる感じです。

最近はフルリモートで働いているので、ラバーダッキングを併用しつつ「書き出す」もやっています。

リモートだと、進捗が悪いとオンサイトで働くよりも信頼貯蓄がゴリゴリ減る、と思っています。

なので、「作業してるのか？こいつ」みたいに思われないようにという後ろ向きな理由で、ハマっていたことの証明もある程度はこれで担保してます。あとは Issue に載せておけば、未来の自分のためにもなります。

### オンラインで QA する

オンラインのプラットフォーム上で QA します。

具体的には、下記です。

- Github で Issue を立てて QA
- Stackoverflow／teratail などに QA

実際、自分もハマって困った時にライブラリの Issue とかに QA 立ててました。

やや心理的なハードルが高いですが、中学レベルの英語ができるなら理論上は可能です。

実際、有名ライブラリの Issue とか見ると、割と糞 Issue が多くあります。我々、日本人はそもそも英語を扱えない、というハードルや簡単な質問をするという図々しさが良くも悪くもないので、あまりこのアクションを取っている人を見ることがないように感じます。

## メンタル

ここからはハマったときのメンタルについて書き出していきます。

まず経験上、**ハマると精神衛生がゴリゴリ汚染されます**。

具体的には下記です。

- 無能感：ぜんぜん進まないので自己嫌悪。
- 苛立ち：早く進みたいのに、何も進まないので。
- 恐怖　：周りから無能だと思われないか。

というわけで、ハマったときのマインドについて考えをまとめていきます。

### すぐに解決することを諦める＝急がない

むしろ「**すぐに解決することを諦めるマインド**」を持つのが良いと思っています。
このマインドによって逆に、早く問題解決することもあります。

というのも焦ったり急いだりすると、まず精神衛生はゴリゴリ汚れます。

その状態で作業を進めても

- 見落としが増える
- 勘違いして進む

などが増えやすいわけです。

精神衛生の汚れ＋見落とし＋勘違い、などが理由によって、普段なら気付くような問題にも気付かずに、さらにドツボにハマる可能性が上がります。

なので、焦ってるときほど思い切って散歩する！というマインドが欲しいところです。

### 「気付き／ひらめき」が必要なケースもある

経験的に「気付き／ひらめき」で解決するケースも結構多いです。
ハマりの種類もいろいろあるので、一概には言えないですが。

具体的には下記とか。

- モジュールが動かないと、思っていたら別のものを import していた。
- ライブラリ／FW が想定通り動かない、と思っていたら使い方を勘違いしてた。

こういうのは、**気付いたら５分くらいで解決します**。

逆に言えば、**気付かないと下手したら数日くらい必要なケース**もあります。

なので、**時間と結果が比例しない関係もある**、ということを理解するマインドが大事です。

### ９９％は、自分のミス

ここは初心者向けですが、ハマったときに問題を切り分けて原因を考えるときは、９９％は自分のミスだというマインドでやるほうが良いです。

初心者ほど下記みたいな考えに支配されます。

- 提供されてる OS／ライブラリ／FW にバグがあるのでは？
- 怪しいところは全てみたので、自分が悪くなさそう。

ですが、ほぼ９９％は自分のミスだと思うほうが良いです。

もちろん、ライブラリ／FW レベルなら、たまにバグを引き当てることもあります。

ですが、可能性としては低いし、**先に考えるべきは自分のアプリケーション側の問題**です。

なので、外部を疑う前に、自分の範囲を徹底して疑え、ということです。

## 原因の候補

### 前提条件／勘違い

経験上、ハマる問題は前提条件が間違っている／勘違いしているケースが多いです。

だからこそ、30 分くらい時間を置いたり、ラバーダッキングによって、前提条件の間違い／勘違いを再考できるわけです。

### 理解が浅い

例えば、「ライブラリの API でハマった」みたいなケース考えます。

今使っているライブラリが

- 何のために入っているか
- そのライブラリで何を実現しているか

くらいは、先に理解しておくべきです。

「とりあえず動けば OK」くらいの感覚だったり、Qiita の記事を見て動かす、みたいな感じで理解が浅いケースだと、前提知識が足りなさすぎてハマっているケースもあります。

このケースは下記みたいなケースで、「とにかく早くに成果を出していかないと」という焦りで良くありました。

- 新しい現場
- 新しい技術スタック
- 新しいポジション

短期的・表面的に課題解決をしても、どこかのタイミングで時間をとってライブラリ・FW について一通りの理解は深めたほうが、長期的には時間的にも精神的にも楽になるように思います。

### おわりに

自分がハマった時に対する記事でした。

今後もハマるたびにこの記事は更新していこうかと思いますが、更新されてほしくもない次第です。ハマりたくないので。

この記事がどなたかの助けになれば幸いです。
