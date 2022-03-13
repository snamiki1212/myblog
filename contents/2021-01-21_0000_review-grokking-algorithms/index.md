---
title: '読後レビュー｜『なっとく！アルゴリズム』わかりやすさに特化した入門書'
createdAt: '2021-01-21 21:00'
updatedAt: '2021-08-19 21:00'
category: '書評'
tags:
  - 書評
slug: review-grokking-algorithms
word:
  - nothing
---

# 読後レビュー｜『なっとく！アルゴリズム』わかりやすさに特化した入門書

こんにちは、Nash です。今年の目標はコンピュータサイエンスを学習し直すことです。

この記事は「**『なっとく！アルゴリズム』を読んだ結果の書評**」の記事です。

<!-- amazon -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB01N14WBX3" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/61bXMHbyv3L._SL160_.jpg" alt="" style="border: none;" /><br />なっとく！アルゴリズム</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>
<!-- //amazon -->

では見ていきます。

## この本はどんな本？

「**アルゴリズムをわかりやすく解説する**」という位置づけの本です。

実際にコードの説明に対しても「１行ごとに１つの図解で説明」みたいなレベルの丁寧さで説明されている箇所があり、ここまで丁寧な説明は技術書ではあまり見ないタイプだなーと思いながら読んでました。

ちなみに日本 Amazon のレビュー数はそこまで多くないけれども、米 Amazon では「評価数 387、星 4.7/5（2021-01-21 時点）」でほぼ全員が星５をつけてるような状態です。コメント見ても「わかりやすさ」という観点でみんな絶賛してた。わかる。

### この本から得られること

- アルゴリズムの基礎的な理解を得られる
- 挫折しないでアルゴリズムの基礎学習を終えられる

### この本は誰が書いたの？

著者の Aditya Bhargava さんは有名なイラスト付きのブログである[adit.io](https://adit.io)で運営していて、ここから書籍化した流れぽいですね。

過去に自分も Haskell でモナドを勉強してたときに[「なに、これめっちゃわかりやすいんだけど」ってなったときの記事](https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)があったので、すでにこの人の記事にお世話になってました。「このブログの人の書籍だったんか・・・」って今なってます。

## この本はだれが読むべき？

自分の読んだ感じとしては「**アルゴリズム入門を知りたいエンジニア**」がおすすめの対象読者でした。

この本の特徴として「わかりやすさ」に特化しているので、アルゴリズムのことを知らなくても詰まることなくほぼ読み切れると思います。逆にアルゴリズムはある程度はわかってるぜとか、オーダー計算くらい出来るよ、みたいな人には向かないかと感じました。

Python でのコードレベルでの説明もあるので、非エンジニアには厳しいですがエンジニアなら Python を使ったことなくても「あー、だいたいこうね」でわかるので問題なし。実際、自分もそんな感じで読んでました。

### だれが読んだの

自分がこの本を読んだときですが、基礎的なアルゴリズムは理解している時点で読みました。ただ、他の有名なアルゴリズム本を読んでみたのですが挫折したので、初心に帰って入門本を読んでいたわけです。

なので正直「あぁ、知ってる知ってる」となる内容がほぼすべてでしたが、だからこそ「この本を最初に読みたかった、、、」と感じたものです。

## 書評

では、自分が読んだ結果の評論を書いていきます。

### わかりやすさ特化の説明

厳格さよりもわかりやすさに注力しているため、アルゴリズムについての本ですがサクサクと読めます。コード１行１行に図解説明があるレベルです。

その分、逆に言うと厳格な説明はなかったりします。具体的には、すべてのアルゴリズムに対して**オーダー計算量**の言及がなかったり、「難しいからここではこのことは説明をしません。」と恐れずにスキップして説明している箇所もあります。

個人的には、この本の立ち位置が「アルゴリズム入門書」だと見てるので、この方針はかなりポジティブだと思ってます。だって、アルゴリズムを深堀りすると初心者の心を簡単に折りますから。難しすぎるねん。

### Kindle 電子書籍が固定レイアウト

自分は Kindle の電子書籍で読みましたが、注意点として固定レイアウト本です。
ただ、サンプル品が Kindle にもあるので先に問題がないかを試してみるのが良いかと思います。
ちなみに、固定レイアウトになってる理由はおそらく図解の説明が多いからなのかなーと思ってます。

### 写経しないでも理解できる説明

この本は説明の丁寧さにかなり特化していることもあり、コードが出てきてもすべて細かく説明してくれるので PC・エディタを必要としない点はありがたかったです。

なので、コードが含まれている技術書なのに移動中や外でも気軽に読めるメリットがありました。
経験上、大抵の技術書って写経しないと、腹落ちしにくいことが多いんだけど、この本はその必要があまりなかったです。

個人的には、移動中は読むことに集中して、家にいるときに時間をとってばばっと写経するくらいで十分理解が進むような説明になっています。

### 翻訳本だけど自然な日本語

この本の原典は英語なので翻訳されている本ですが、それにしては翻訳による違和感がほぼなかったです。
素晴らしい翻訳をしていただいた翻訳者に感謝ですね。

### 他のアルゴリズム本との比較

アルゴリズムの本は他にもいろいろな本がありますが、その中でもこの本は特に「わかりやすさ」に特化しているのでアルゴリズム初心者向けです。

他のアルゴリズム本として有名なのは下記のような本があるかと思います

- 蟻本
- 螺旋本
- けんちょん本

ただ、どれも入門者にはマジでおすすめしないです。「アルゴリズム　本」で検索すると、アフィブログで入門者にもこれらの本を推す記事が多いけれども、個人的にはマジで罪深いと思ってます。難しすぎるもん。挫折してアルゴリズム嫌いが増えるやろ。

<!-- 蟻 -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB00CY9256C" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/41oruV+aJIL._SL160_.jpg" alt="" style="border: none;" /><br />プログラミングコンテストチャレンジブック [第 2 版]　～問題解決のアルゴリズム活用力とコーディングテクニックを鍛える～</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>
<!--  -->

<!-- 螺旋 -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB00U5MVXZO" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/51GbST65OIL._SL160_.jpg" alt="" style="border: none;" /><br />プログラミングコンテスト攻略のためのアルゴリズムとデータ構造</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>
<!--  -->

<!--  -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4065128447" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/51OK2x1LvbL._SL160_.jpg" alt="" style="border: none;" /><br />問題解決力を鍛える!アルゴリズムとデータ構造 (KS 情報科学専門書)</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>
<!--  -->

その点、この本はわかりやすさに特化してるのでぜひとも最初に読んでほしい本です。

## おわりに

個人的にはアルゴリズム入門書として、かなりのおすすめの本でした。

### だれにおすすめか

**アルゴリズム入門を知りたいエンジニア**へおすすめです。

### この本から得られること

- アルゴリズムの基礎的な理解を得られる
- 挫折しないでアルゴリズムの基礎学習を終えられる

<!-- amazon -->
<div class="af-moshi-container">
<a href="//af.moshimo.com/af/c/click?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB01N14WBX3" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://images-fe.ssl-images-amazon.com/images/I/61bXMHbyv3L._SL160_.jpg" alt="" style="border: none;" /><br />なっとく！アルゴリズム</a><img src="//i.moshimo.com/af/i/impression?a_id=1847646&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
</div>
<!--  -->
