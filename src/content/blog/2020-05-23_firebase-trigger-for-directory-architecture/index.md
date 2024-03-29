---
layout: /src/layouts/PostLayout.astro
title: "CloudFunctionsのトリガーに対するディレクトリ・フォルダ・ファイルの設計"
createdAt: "2020-05-23 10:00"
updatedAt: "2020-05-23 10:00"
category: "技術"
tags:
  - Firebase
  - CloudFunctions
slug: firebase-trigger-for-directory-architecture
word:
  - nothing
---

# CloudFunctions のトリガーに対するディレクトリ・フォルダ・ファイルの設計

こんにちは、最近、CloudFunction を 0->1 で導入することになった Nash です。

この記事では、「Firebase CloduFunctions のトリガーについてのディレクトリ設計」のまとめです。

<!-- tweet -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">CloudFunctionトリガーを0⇒1で入れてるのでディレクトリ設計してみたけど、以前の現場ではFirestoreのパスに対して実行されるファイルが「ディレクトリ構造」で表現されてて、それだとネストが深くてツラかったので、今回は1階層にしてFirestoreのパスを全部「ファイル名」で表現してみる</p>&mdash; Nash⚡️ReactNative書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1263800367801757697?ref_src=twsrc%5Etfw">May 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- tweet -->

考えた結果は下記の 3 案になります。

- 案 1）ディレクトリ構造で表現
- 案 2）ファイル名で表現
- 案 3）フォルダ名で表現

では、見ていきます。

（ちなみに、便宜上は Firestore について言及してますが、Realtimedatabase でも可能です）

## はじめに

### tl;dr

先に結論です。

- 案 1）で作りがちですが、個人的にはネストが深くてすぐに可読性が落ちるので微妙な設計かと思ってます。
- 案 2）は小〜中規模のプロジェクトで、案 3）は中〜大規模のプロジェクトで合うように思います。

### Firestore のストレージパスとトリガーファイル

3 つの案について見る前に、ディレクトリ設計をする理由などについて簡単におさらいします。

Firebase で提供されている Firestore と CloudFunction のトリガーを組み合わせると、

- 任意の Firestore のストレージパスに対して CRUD されたことを発火点に、任意のトリガー関数を実行する

ということが出来ます。

そのため、下記についてのマッピングを考えます。

- A）発火元のストレージパス
- B）実行されるトリガーのファイル・ディレクトリ

それぞれが紐づくわけですが、B）の設計についてこの記事では考えます。

では、各案を見ていきます。

## 案 1）ディレクトリ構造で表現

一番、一般的なやり方かと思います。

`version/v1/users/index.ts` のようにディレクトリ配下にトリガーファンクションのファイルを管理します。

こんな感じ。

<!-- image1 -->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580012502/in/dateposted-public/" title="2020-05-23_0000_firebase-trigger-for-directory-architecture__01_dir"><img src="https://live.staticflickr.com/65535/52580012502_119d6a43d9.jpg" width="500" height="279" alt="2020-05-23_0000_firebase-trigger-for-directory-architecture__01_dir"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<!-- //image1 -->

### メリット

- 直感的にわかりやすい
- `helper.ts`などを近くに起きやすい

### デメリット

- ネストが深くなる
  - Firestore の構造が複雑になり対応するトリガーも増加すると、合わせてこのディレクトリ構造のネストも深くなります。
- 規約違反な書き方・置き方をしていても漏れやすい
  - ディレクトリが多くなってごちゃごちゃすると、どのファイルがどのストレージパスとマッピングしているか？で間違いが出てきたりします。

### 所感

普通に設計するとこの構造になるかと思うのですが、上に挙げたデメリットの負の部分が大きいと思っているので、個人的には案 2）か案 3）が良いかと思ってます。

## 2）ファイル名で表現

最近、試していて個人的に気に入ってます。

`version.v1.users.{user_id}.ts` のようなファイル名でトリガーファンクションのファイルを管理します。

こんな感じです。

<!-- image2 -->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580739969/in/dateposted-public/" title="2020-05-23_0000_firebase-trigger-for-directory-architecture__02_file"><img src="https://live.staticflickr.com/65535/52580739969_f56a92cd2a.jpg" width="500" height="160" alt="2020-05-23_0000_firebase-trigger-for-directory-architecture__02_file"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<!-- //image2 -->

メリデメは下記かと思います。

### メリット

- ネストがない。ファイル名で深さを表現するので常にネストなしになります
- 1 つのストレージパスに対して、絶対に 1 つのファイルになる。なので間違って変なところにトリガーを書くことがなくなる。

### デメリット

- 「ファイル名で表現」ということに抵抗があるメンバーがいるかも。。。（とはいえ、Next.js とか Nest.js でも割と使われてる方法なので、それを引き合いに出せば説得できるんじゃないかな）
- 「あるストレージパスの配下だけで使う helper.ts」みたいのを定義できないです。
  - helper は、`/triggers`の外のパスに出して`/src/helper.ts`とかに置いてここを参照するような感じになるかと思います。

### 所感

1 つのストレージパスに対して複数のファイルを置くことができないので、大規模になると辛そうですが、小〜中規模ならメリットのほうが大きいと思ってます。むしろこの置き方のほうが制限ができるのでカオスになる可能性がなくなりますしね。

ちなみに、ファイル名による規約化も簡単にできるので規約化しちゃうコードを書くのもありかもです。

## 案 3）フォルダ名で表現

`version.v1.users.{user_id}/index.ts` のようにフォルダ名でトリガーファンクションのファイルを管理します。

こんな感じです。

<!-- image3 -->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/snamiki1212/52580476706/in/dateposted-public/" title="2020-05-23_0000_firebase-trigger-for-directory-architecture__03_folder"><img src="https://live.staticflickr.com/65535/52580476706_c77cd64b42.jpg" width="500" height="148" alt="2020-05-23_0000_firebase-trigger-for-directory-architecture__03_folder"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<!-- //image3 -->

メリデメで列挙すると下記かと思います。

### メリット

- ネストが 1 層だけでこれ以上は深くならない
- 1 つのストレージパスに対して、絶対に 1 つのフォルダになる。なので間違って変なところにトリガーを書くことがなくなる。

### デメリット

- 案 2）と同じく、やや直感的ではない命名なのでチーム内で嫌がる人もいるかも。。。
- ネストが 1 層あるので、ファイルの確認のために 1 回オープンしないといけないです。ネストが深くなることはないですが、エディタとかで見るときに絶妙に見づらいですし、意識しないと見にいけないです。

### 所感

比較で考えると、「ファイル名で表現する案 2」と比較して、1 層多くディレクトリを切るので複数ファイルを格納することができるようになります。

なので、

- onCreate/onRead/onUpdate/onDelete が Fat になってしまうのでファイル単位に分けたい
- 近くに`helper.ts`を置きたい

みたいなことができるようになるので、中〜大規模のときに向いてるのかな、と思います。

### おわりに

いろいろ設計を考えてみました。案 1）で実際に開発していた経験はあるのですが、案 2）・案 3）ではあまりゴリゴリ開発した経験がないので、ここに書かれている以外の隠れた問題があるかもしれないです。

あと、案 2）のファイルで設計する構造のときに規約化するロジックもまとめたのでこちらでどうぞ。

[CloudFunctions のトリガーのファイルを規約化する - Qiita](https://qiita.com/snamiki1212/items/d908fe23257bc909e5ff)
