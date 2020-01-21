---
title: 'Typora+GoogleSyncのレビュー｜無料軽量Markdownエディタ+クラウド同期'
cover: 'cover.png'
createdAt: '2020-01-04 09:00'
updatedAt: '2020-01-04 09:00'
category: 'Tech'
tags:
  - Typora
  - Markdown
slug: review-typora-google-sync
word:
  - 'nothing'
---

# Typora+GoogleSyncのレビュー｜無料軽量Markdownエディタ+クラウド同期

こんにちは、Nash です。

この記事は「Typora ＋ GoogleSync/GoogleDrive を使ってみた結果のレビュー記事」です

結論は下記。

- 無料縛りならオススメ。
- そうでないなら、素直に Bear／DropboxPapper／Inkdrop などを使うほうが良い。

下記の流れで勧めます。

- Typora について
- GoogleSync について

では、見ていきます。

## Typora の説明

![typoraのトップ画像](cover.png)

Typora は、無料の軽量 MarkdownEditor です。

### pros

- 無料

- 軽量

- 書き心地がメチャクチャいい

- テーマを取ってこれる。

リアルタイムにマークダウンが変換されるタイプのエディタですね。なにより、書き心地がほんと良いです。キーバインドも癖のあるものがないし、速度も速いんで。

### cons

- 検索、ファイルの使いやすさがシンプルだけど、ちょっと微妙。

- 微妙なバグが出る（自分だけ？よく踏む。
- クラウド保存対応が iCloud/Dropbox。

検索とサイドバーについても思想をシンプルに寄せているように感じるのですが、その分、機能的に使いにくいかなー、とは個人的には思います。もうすこしリッチな機能にしてほしいかも。

あと、微妙なバグが出たりしますが、ほとんどクリティカルではないです。

一番の問題はクラウド保存対応だったので、ここだけ個別にカスタムしてます。

## クラウド保存 ⇒GoogleSync/GoogleDrive

クラウドストレージについてです。

iCloud にはあまり仕事用のデータを入れたくないし、Dropbox だと無料枠の保存容量が少ないので、 GoogleSync 経由で GoogleDrive を使いました。

GoogleSync とは、Google から提供されている Cloud 同期アプリケーションでローカルの該当ディレクトリを指定しておけばファイル更新に合わせて自動的にクラウド同期してくれます。

なので、

- GoogleSync が `/tmp` を監視。

- Typora で `/tmp/test.md` を作成 or 編集で、保存。
- GoogleSync が、`/tmp` 配下を GoogleDirve へアップロード同期（バックグラウンド）。

みたいな感じで運用してました。

次は、Typora+GoogleSync のメリデメです。

### pros

- ほぼ完全に容量無料。GoogleDrive は無料枠の容量が多いから。特に、マークダウン＝テキストファイルだからなおさら。
- ロックインしてないので、Typora／GoogleDrive から辞めたくなっても簡単に抜けれる。
- GoogleSync がバックグラウンドで同期してくれるので、特に意識しないで管理可能。

GoogleSyncを意識しないで運用できるのは楽でした。GoogleSync使ってるの忘れるくらいですから。

### cos

- GoogleDrive で Markdown ファイルが標準的なアプリでは開けない対象外の拡張子ファイル。
- なので、閲覧／編集が GoogleDrive 経由だと難しい。
- 無理ではない。GoogleDrive から更に 3rdParty アプリ経由で開ける。(ex)StackEdit
- 3rdParty のアプリのクオリティがそこそこなので DX が微妙。
- 3rdParty を経由するワンステップが必要なので DX が悪い。
- スマホ経由で見るのも 3rdParty アプリが必要。
- こっちもクオリティがそこそこなので、やっぱり DX が悪い。

特に、GoogleDrive／スマホでマークダウンを見るときの体験がすこぶる悪いです。

出来なくはないですが、体験が悪いから避けるようになります。

### まとめ

Typora+GoogleSync の組み合わせおすすめする人です。

- 完全に無料で Typora ＋クラウドストレージを使いたい人。
- スマホで編集・閲覧をあまりしない人。（DX が悪いです）

スマホでも使うなら、素直に金積んで解決したほうが良かったです。

### おわりに

今回は無料で構築するところに重点したので、こういう構成になりました。

ただ、スマホでも書きたい問題がやっぱり大きいので別のやりかたも見てみます。

具体的に、次は Notion を考えてるので、これを試してみます。

以上です。
