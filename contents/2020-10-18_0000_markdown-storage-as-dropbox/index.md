---
title: 'マークダウン管理をGoogleDriveからDropboxに変更した話'
createdAt: '2020-10-18 15:00'
updatedAt: '2020-10-18 15:00'
category: '技術'
tags:
  - Dropbox
  - Typora
slug: markdown-storage-as-dropbox
word:
  - nothing
---

# マークダウン管理を GoogleDrive から Dropbox に変更した話

こんにちは、Nash です。
今までは、Typora ＋ GoogleSync の組み合わせにてクラウドストレージとして GoogleDrive を使っていました。

[Typora+GoogleSync のレビュー｜無料軽量 Markdown エディタ+クラウド同期](/review-typora-google-sync)

ですが、GoogleDrive でのマークダウン管理の問題が色々出てきたので Dropbox に変更したので軽く記事にしておきます。

## GoogleDrive で Markdown を取り扱うときの問題

### GoogleDrive：マークダウンをネイティブサポートしてない

これが結構クリティカルでした。**GoogleDrive 上の.md ファイルを直接開いたり編集できないです**。

そのため、3rd party のアプリ経由で Markdown のファイルを開くことになります。

ただ、下記の２点で使い勝手が悪い状態でした。

- 3rd party のアプリ経由でしか開けない
- 3rd party のアプリのクオリティが微妙

これのせいで、**出先でスマホからマークダウンを見れないことが多くてかなーりストレスが溜まってました**。

### Dropbox：マークダウンをネイティブサポートしてる

その点、Dropbox ではマークダウンをネイティブサポートしています。

- Web：表示される（しかも Pretty）
- アプリ：Edit できる

### 容量の問題

Dropbox の無料枠だと 2GB しかないので、「これだとすぐにカツカツになりそうだなー」と思って、GoogleDrive を選定していました。

ただ、よくよく考えると保存する内容がテキストファイルです。正直、2GB まで使い切るほどの容量がないので、特に問題なかったです。

### 所感

というわけで、ちゃっちゃっと GoogleDrive から Dropbox にマークダウンのバックアップストレージを変更しました。

これで特にスマホからも快適にアクセスできるのでストレスフリーになりそうです。

### 備考メモ：マークダウンの保存フロー

ちなみに、Markdown の管理自体は下記の流れで行われます。

1. PC のローカルに Markdown を保存

2. Sync ソフトが自動実行

3. クラウドに自動アップロード

特に今回、GoogleDrive から Dropbox にクラウドストレージを変更しましたが、この上記の流れは変わってないです。

Sync ソフトはそれぞれ下記の通りでした。

- GoogleDrive: GoogleSync
- Dropbox: Dropbox（そのまま）

なので、体験としてローカルにデータ保存する感覚でクラウドストレージに同期できます。
