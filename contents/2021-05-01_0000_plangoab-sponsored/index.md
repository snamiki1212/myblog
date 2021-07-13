---
title: '個人開発プロジェクトがスポンサーマネタイズされて稼ぐまでの話【Plangoab】'
createdAt: '2021-05-01 00:00'
updatedAt: '2021-05-01 00:00'
category: '技術'
tags:
  - plangoab
slug: plangoab-sponsored
word:
  - nothing
---

# 個人開発プロジェクトがスポンサーマネタイズされて稼ぐまでの話【Plangoab】

ども、海外での就活のために個人プロジェクトを作っている Nash です。

この記事は下記についての記事です。

- **個人開発プロジェクトがスポンサーから支援されたので、作り始めから実運用が開始されるまでについての話のまとめ**

では見ていきましょう。

## はじめに

自分が個人開発しているサービスの『Plangoab』が下記の企業によってスポンサーされました。

- Frog：カナダのクリエイターコミュニティ
- COS：カナダの留学エージェント

### Plangoab とは

海外留学・移住スケジュールプランナーを行う Web アプリケーションです。

生年月日をもとに、様々な渡航プランを生成してくれます。

詳細はこちらにて解説しています。

[『Plangoab』海外留学・移住スケジュールプランナー](./plangoab-readme)

### なぜ個人開発をはじめたのか

海外就活のために個人プロジェクトが技術証明として必要になったからです。

海外での就職時では、日本以上に自分自身の技術力を自分自身で証明しなければなりません。特に英語での面接なので言語の壁もあるため、面接前の時点でできるかぎりポイントを稼ぎたいところ。

その点、ポートフォリオの個人プロジェクトはもっとも有効な手段の１つで、英語力が弱くても技術力を示しやすく開発全般の総合力を可視化しやすいです。

## サービスのアイデア

Plangoab というサービスのアイデアはいくつかの考えをもとに作っています。

- この〜〜という作業を、もっと楽にしたい。
- この〜〜というタスクは、もっと改善の余地がある。
- 「自己満足」より、「使われるサービス」。

1 つずつ見ていきます。

### 自分が「ほしかった」ものを作る

『自分がほしいと思うものを作れ』という格言は個人開発においてよく言われるケースかと思います。Plangoab もほぼ同じ考えから生まれて『自分が「ほしかった」ものを作る』というものです。

具体的には、自分がカナダへの渡航を考えた際に留学プランを手書きで作っていたのですが、「この作業をもっと楽にしたい」という思いがありました。

### カイゼンの余地を感じたやりとり

カナダ渡航について、自分が海外就職についての相談を Frog・COS へしたのですが、そのときのミーティング時のスケジュール・タスクの扱い方が下記のようなものでした。

- １）スケジュールの日程計算は手動
- ２）テキスト・口頭ベースでのやりとり

このときは、自分としても内容を可視化したかったのでガントチャートを「手書き」で作って、以降のミーティングなどに持参していました。このガントチャートですが、Frog・COS 両者からの反応もよく、また自分としてもスケジュールを可視化することでよりイメージがしやすくなりました。

これを更にソフトウェア化すれば下記のようにカイゼンできそうだと考えて、今回のサービスを作成しています。

- １）スケジュールの日程計算を自動化
- ２）可視化および csv 保存可能

### 自己満足よりも使われるサービス

あと、せっかくポートフォリオプロジェクトとして作るのだから、ただのポートフォリオではなくて使われるサービスを作りたい、という考えもありました。

とはいえ、to C 向けのサービスを運用して「使われるサービス」にまで持っていくのはかなりハードルが高いことを理解していたので「使う人数は少数でもいいので少なくとも知り合いやコミュニティには使ってもらえるだろう」というスポットで選んでいるところもあります。

## スポンサーしてもらうまでの背景

初期はマネタイズは考えていなかったのですが、開発が進んでいくにつれて Plangoab を気に入ってもらいスポンサーの話になりました。

### 開発のはじまり

まだコードを一行も書いてない状態から「Plangoab というサービスを作りたいので相談したい！」と Frog に連絡してやりとりをはじめました。

その後、アジャイル開発でだいたい１〜２週間の周期で開発〜ミーティングをしていました。開発はすべて自分が行って、プロダクトに対して Frog から意見を貰う形です。

### スポンサーの話

Frog が行う留学相談で Plangoab を使うと便利そうというレベルにまでプロダクトの機能が充実していった段階でスポンサーとしてフィーをいただける可能性についてもらいました。

また更に開発が進むにつれて、プロダクト開発のミーティングに留学エージェントの COS も入ってきて 3 者でのやりとりになってきました。

### スポンサーフィーの発生

2021-5 から Frog・COS にて正式に Plangoab を業務で利用することになり、それに合わせてスポンサーフィーを受け取る流れになりました。

実際に入金されたので、これでおいしいもの食べます。

## 時系列：「作成開始〜リリース」

### 2021-01-14

- カナダのキャリアアドバイザーに就活相談。個人プロジェクトを作れ、って言われる
- もともと作るものは決めていて事前相談もしていたので、すぐに Frog へ連絡。
- いったん MVP を作成する運びとなる

### 2021-01-23

- MVP を作成したので、これをもとに Frog と初回のミーティング

### 2021-02

- 「開発してミーティング」という流れを１〜２週間に１回くらいの頻度で行う

### 2021-03

- （作業してない）

### 2021-04

- ミーティングに COS も加わる
- 再度、「開発してミーテイング」で進む
- Frog・COS の２社よりスポンサーの話をいただく

### 2021-05

- 正式利用が開始
- この月からスポンサーのフィーが発生

### 作業期間

作業期間は 2021-1 月中半〜2021-4 月末の 3.5 ヶ月。

ただし、2021-3 月は稼働していなかったので、実質は 2.5 ヶ月くらい。

### 作業時間

また、作業時間もフルタイム開発ではないので、きちんと計測したわけではないがフルタイム換算だと約 1 ヶ月半かかった実作業時間になるかと思う。

仮説検証してたら最初に考えてた内容からどんどん変わったので、まぁこれくらいかかるよねって印象です。

---

## 教訓・学び

ここからは Plangoab の開発を通して、自分が得た学びについて書いていきます。

### ポートフォリオプロジェクトのビジネス化による気持ちの揺らぎ

Plangoab はもともとはただのポートフォリオで海外留学・移住をする人の手助けになればよいなーという気持ちをもとに作ってるサービスです。

ただ、個人開発だったサービスが逆にマネタイズ出来てしまったがために、考え方によっては「ポートフォリオの OSS 個人開発によるフィー」ではなくて「事業会社からの受託開発」とも捉えられるようになってしましました。

これをビジネスとして捉えるかポートフォリオとして捉えるかで成功・失敗が 180 度ぐらっと変わってきます

ビジネスと考えると下記のような状態です。

- 稼働時間はフルタイムで約 1 ヶ月半くらい
- スポンサーフィーを考えても今のところ大赤字

ポートフォリオとして考えると下記のような状態です。

- OSS プロジェクトとして運用

- スポンサーされてマネタイズまで出来ている

つまり「ビジネスとして考えると失敗だけどポートフォリオプロジェクトとして考えると成功」と見れるわけです。

まぁ、ビジネス的に失敗と言いましたが「時間的コスト」という一点だけに絞った話なので、実際は他にも副次的なメリットがいろいろあるので筋が悪い主張ですが。とはいえ、こういう側面で見ることもできるよね、という気持ちの揺らぎが出てきたりしたのも事実です。

なので、ポートフォリオのプロジェクトがマネタイズ出来た場合は、あくまでビジネスではなくてポートフォリオのプロジェクトであることを忘れずにマネタイズできてラッキーくらいの気持ちで望んだほうが精神衛生的には良いですね。

### サービス名は呼びやすさを重視すべきだった

Plangoab という名称は「Plan for going abroad」らへんの略称にしているのだけども、由来とかどうでも良くてなによりも「呼びやすさ」にフォーカスするべきだった。

日本人からもなんと読むの？って聞かれるし、カナダの現地の人からもなんて読むの？ってなって、しまいにはいろんな人になんて読むの？って聞かれすぎて自分でも呼び方がわからなくなってしまってる。。。

なのでグローバルスタンダードで通じる呼びやすさの命名にすればよかった。

### 値付けは価値から逆算

「スポンサー金額はいくらにする？」をミーティングで会話してるときに値付けの考え方の１つを学んだので残しておく。

事業会社に業務改善サービスを導入するメリットはたいていこの２つのどちらかだと思う。

- 利益を上げること
- 損失を下げること

方向が違うだけでどちらも「コストが浮く」わけで、次に「どれだけコストが浮くか？」を考える。

仮にツールを導入すると月当たり 10 万円のコストが浮くなら、単純計算だと値段が 10 万円までなら導入するメリットがあるし、10 万円を超えるなら導入してもデメリットしかない。

逆に言えば 99,999 円までならこのツールに値段をつけても買われる可能性があることになる。（まぁ、現実的にはありえないけど）

今までフリーランスとして活動していても事業における値段設定はなかなか難しく感じていたので、良い気付きを得られた。

## 今後の課題・動き

Plangoab の開発について、今後の自分の動きや考えについて整理しておく。
いま時点では下記のような点を考えている。

- 実運用で使ってもらいフィードバックをもらう
- バグ修正は速攻で対応する
- 追加開発に対してどう対応するか考え中

Plangoab はあくまでポートフォリオのためのプロジェクトだと考えて作成していることもあり、どこまで自分の時間をかけていくかがちょっとまだ悩んでいる。ただ、少なくともバグだけは確実に対応していくつもりなのだが、追加開発はそもそもどこまで求められるかにもよるので、そのときになってから考える。

### おわりに

「個人開発プロジェクトがスポンサーマネタイズされた」という話でした。

Plangoab のリリースがされたけれどもこれで終わりではないので、今後もうまくカイゼンできればとおもってます。