---
title: '【書評】リーダブルコードの次に読む本として『現場で役立つシステム設計の原則 〜変更を楽で安全にするオブジェクト指向の実践技法』'
cover: 'cover.png'
createdAt: '2020-06-15 00:00'
updatedAt: '2020-06-05 00:00'
category: 'Tech'
tags:
  - 書評
slug: review-book-as-principles-of-the-system-architecture
word:
  - nothing
---

# 【書評】リーダブルコードの次に読む本として『現場で役立つシステム設計の原則 〜変更を楽で安全にするオブジェクト指向の実践技法』

こんにちは、Nash です。

最近、先輩に DDD の文脈で下記の本をおすすめされたので読んでみました。

ということで、**この記事は『現場で役立つシステム設計の原則 〜変更を楽で安全にするオブジェクト指向の実践技法』のレビューの記事**になります。

では、見ていきます。


<!-- アフィ -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:90px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB073GSDBGT%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51QSqJm2ZOL._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB073GSDBGT%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">現場で役立つシステム設計の原則 ～変更を楽で安全にするオブジェクト指向の実践技法</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,072<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/6/15 01:00時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">


## 目次

```
第1章　小さくまとめてわかりやすくする

第2章　場合分けのロジックを整理する

第3章　業務ロジックをわかりやすく整理する

第4章　ドメインモデルの考え方で設計する

第5章　アプリケーション機能を組み立てる

第6章　データベースの設計とドメインオブジェクト

第7章　画面とドメインオブジェクトの設計を連動させる

第8章　アプリケーション間の連携

第9章　オブジェクト指向の開発プロセス

第10章　オブジェクト指向設計の学び方と教え方

```

## おすすめ読者

この本を読んでみた結果の**個人的なおすすめ読者**としては下記のような人かと思いました。

- リーダブルコードの次の本を探している人

- DDD を知りたい人の入門本を探している人

- 実際のドメインをコードに落とし込むところで苦戦してる人

ここらへんの理由については、本の概要などを踏まえて記述していきます。

## 本の概要

いきなりですが、個人的にはタイトルが本の実態を表していないように感じます（まぁ、出版業界の事情とかがありそうなので仕方ないですが）。

この本の実態の内容は、**「OOP ＋ DDD のエッセンスを実際のアプリケーションに落とし込むに至る説明」って感じの本**です。

そのため、技術一辺倒ではなくて、実際にアプリケーションに落とし込むための考え方なども出てきます。また、OOP などの解説もあり広めに解説をしているので、DDD についてはコアな観点に絞られて解説がされている印象です。

## 良かった点

### 「なぜ」こういう設計・コードなのかが書かれてる

OOP についての実際のコードはもちろんだけど、「なんでこうするべきなんだっけ？」の**理由に強くフォーカスされている説明**なので、「そうそう、OOP ってこうあるべきだよね」という理解が進む。

OOP だけでなくて、DDD などでも全体的に「なぜ」のところに強くフォーカスされているので納得感をもって本を読める。

### DDD の入門としてあり

DDD の中でも**大事な観点などが実コードを交えて説明される**ので、入門として良さそう。

注意点として、アプリケーションサービス・ドメインサービスとかの説明がなかったので、DDD のすべてを網羅した説明ではないと思う。

逆に DDD におけるコア・重要なポイントに絞られている説明なので、DDD の触りを手軽に知りたい人には良さそう。

ただ、個人的には単純に DDD を知りたいなら、今まで読んだ中では[ボトムアップドメイン駆動設計の記事](https://nrslib.com/bottomup-ddd/)で学ぶのがおすすめですが。（これ、気付いたら書籍化されてるじゃん！今度、買って読もう。）

### 技術だけの話でない

全体的に技術寄りのトピックではある。ただ、「ドメインをどうやってシステムに落とし込むか？」という、**ソフトスキル的な範囲も書かれていて**、実際に開発する場面でも大事な観点が盛り込まれている。

## 気になった点

### 説明が冗長でわかりにくい

説明が**やや婉曲でわかりにくいよう**に感じる点もいくつかあった。というのも、上から読んでもスラスラ頭に入ってこないところが多いので。

すべてを細かく正確な日本語で説明しすぎてるのかなー、という印象。

頭にスラスラ入らないところは、何度か読めば理解はできるけど、ストレスはある。

### 理想論すぎて現場で役に立つかが怪しい

使われるアーキテクチャが尖りすぎているので、現場でこの設計で GO サインが出ないんじゃないかな、と思う。

というのも、

- DDD
- イベントソーシング
- CQRS

などを使うことを推奨していて解説がされているが、自分の知っている限りのシステム開発ではこれらの設計ってややアブノーマルな印象。

もちろん、べき論というか理想論では、それぞれ採用すべきだとも思っているけれども
- 開発難易度が高かったり
- 有識者が少ない
- 学習コストが高い
- ナレッジが少ない
などなどの理由でこれらを採用するのは一般的なチームでは少し難しそうだと思う。

そういう意味合いで、**この本のナレッジが「現場で役に立つ」か？というと正直疑問**です。

## 学んだこと・思ったこと

個人的にこの本で学んだポイントとか、思ったポイントのまとめです。

- OOP(or DDD）において「状態に依存する処理をする場合、使う側が状態を事前に確認する」が基本事項になる、とのこと。これは知らなかった。
- ３層アーキテクチャと DDD の併用では、アプリケーションレイヤーがドメインレイヤーとつながって処理を依頼する。
- ドメインレイヤーでの処理が複数になりシナリオ化したら、シナリオレイヤーみたいのを作って一連の処理をまとめるのも良い。「アプリケーションレイヤー ⇒ シナリオレイヤー ⇒ ドメインレイヤー」の流れになる。なので、シナリオレイヤーは複数のドメインをまとめる。
- decorator も全部ドメインオブジェクトに入れる。「データが見つかりませんでした」「x 件が見つかりました」などの判断ロジックだけでなくて、そのテキスト自体もドメインモデルで管理するべき。ビューとモデルの分離の原則に違反しているが、それよりも関心を１つにまとめるほうがよいから、とのこと。まじか。

- 「(p183)イベントソーシングですべてのデータを管理しろ」は、少しオーバーな気もするけど。。。必要な場面があるのは理解できるけど、今までも何個も Web サービスに携わってきたけどそこまでやってるところないよな。。。
- 「(p184)テーブルにカラムを新しく追加するとき、既存のテーブルを使わないで新しく専用のテーブルを作る」は、やりすぎ、というかテーブル設計が余計に汚くならないのかな？著者の主張としては、「NOT NULL 制約が解禁されるくらいなら、新しくテーブル作れ」なのだけど、さすがにやりすぎでは？とも思ってします。。。

### 総括

OOP、DDD、CQRS、イベントソーシングなどの解説が広くされているし、ドメインをアプリケーションに落とし込むところなんかも解説されているので、薄く広くの知識を理由や背景を踏まえて説明してくれるので、リーダブルコードの次に読む本を迷ってるなら、選択肢の１つとして上げられる本かと思った。

ただ、DDD においていくつも本を読んだ上で先輩がおすすめしてきた本、とのことだったので期待していたけど、個人的には[ボトムアップドメイン駆動設計 │ nrslib](https://nrslib.com/bottomup-ddd/)のほうが、「DDD の理解」という１点ではしやすかったので、やや残念。

<!-- アフィ -->
<table cellpadding="0" cellspacing="0" border="0" style=" border:1px solid #ccc; width:90px;"><tr style="border-style:none;"><td style="vertical-align:top; border-style:none; padding:10px 10px 0pt; width:60px;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB073GSDBGT%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow"><img border="0" alt="" src="https://m.media-amazon.com/images/I/51QSqJm2ZOL._SS80_.jpg" /></a></td></tr><tr style="border-style:none;"><td style="font-size:12px; vertical-align:middle; border-style:none; padding:10px;"><p style="padding:0; margin:0;"><a href="https://px.a8.net/svt/ejp?a8mat=35M24I+EC6U9E+249K+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB073GSDBGT%2F%3Ftag%3Da8-affi-302041-22" rel="nofollow">現場で役立つシステム設計の原則 ～変更を楽で安全にするオブジェクト指向の実践技法</a></p><p style="color:#cc0000; font-weight:bold; margin-top:10px;">新品価格<br/>￥3,072<span style="font-weight:normal;">から</span><br/><span style="font-size:10px; font-weight:normal;">(2020/6/15 01:00時点)</span></p></td></tr></table>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=35M24I+EC6U9E+249K+BWGDT" alt="">