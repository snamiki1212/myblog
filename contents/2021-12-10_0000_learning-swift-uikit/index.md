---
title: 'React 好きの Fullstack エンジニアが Swift/UIKit を学んだ話'
createdAt: '2021-12-10 00:00'
updatedAt: '2021-12-30 00:00'
category: '技術'
tags:
  - Swift
  - UIKit
slug: learning-swift-uikit
word:
  - nothing
---

# React 好きの Fullstack エンジニアが Swift/UIKit を学んだ話

ども、Nash です。

この記事は「**React 好きな Fullstack エンジニアが Swift ＋ UIKit を学んだその感想**」についてまとめた記事です。

では見ていきます。

## React 好きエンジニア、Swift で開発する

背景として、バンクーバーにある CICCC という学校に留学しており Mobile Development の授業にて Swift+UIkit による開発課題に直面しました。

いままで、仕事でもプライベートでも 触ったことがないですが、数ヶ月ほど Swift + UIKit を学んだので気付き・感想などをまとめていきます。

ちなみに、SwiftUI は開発で使っていないので、知識としてして理解しているレベルです。

### （注釈）

あくまで数ヶ月の学習で得た知識かつプロダクションでコードを書いたわけではないエンジニアの感想なので、その前提の上で読んでいただければです。

## Swift 言語、めちゃ良い

まずなにより Swift 言語、すごいよかったです。

機能的には、Optional、Type セーフ、Generics、GC なし、メモリ管理は AutomaticReferenceCounting、async/await などなど。ほぼ死角がなくなった感じがあります。

問題点を上げるとすれば、モダン言語なのに継承を持ってしまっている点。すでに Rust や Go は継承を提供していなくて、なぜならメリットよりもデメリットのほうが多いという判断なので。良し悪しというよりも哲学の問題かとも思うが、この点は個人的にはネガティブなポイントとして考えています。とはいえ、指摘するのはこれくらい。

Swift 言語がすごいよくて、これでアプリケーションレイヤーを開発すごいしたい思いになりました。

## 手続き型な UIKit が未だに支配的

Imperative な UIKit が未だに支配的で、この点は正直かなりネガティブポイントです。

まず、Swift によるモバイル開発で、UI Framework を選択する必要があります。
2021 年の現時点では未だに UIKit が支配的で、UIKit の特徴として手続き型 UI なので Web における jQuery にやや近いポジションです。

一応、UIKit も無理くり宣言型 UI みたいな挙動をしてくれる API である DiffableTable とかも用意されているんですが、すごい書きにくいしどちらにしてもコードボリュームがかなり多いです。

<!--  -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Swift+UIKitで簡単なToDoアプリを１つ作れたのでコード見返してるけど命令的UIなのとUIKitの命名思想的にAPI名が長いこともあってシンプルなToDo機能しかないのにコード量が多すぎる。。。ToDoでこのボリュームだと普通のアプリケーションをUIKitで開発するとコード量どんだけ多くなるんだ、これ</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1393011760630665216?ref_src=twsrc%5Etfw">May 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!--  -->

### Web と比較すると古く感じる

Web フロント開発をしていた人からすると、正直 UI レイヤーが React・Vue・Anguler などの宣言的 UI が全盛期の中、その１つ前のパラダイムの手続き型 UI を使ってるのでかなりシンドいです。

特に最近の React に至っては、Hooks の登場によりさらに API が洗練されてきていて、具体的には useEffect 系の didMount・willUnmount な callback を 1 つの関数で表現してる点などをみると、もはや React に比べると 2 世代近い古いパラダイムでの開発を余儀なくされる印象でした。

宣言型 UI として、SwiftUI もあるがまだプロダクションで使えるレベルではないです。これを書いてる 2021 年の時点で各ネット記事などを見て判断する限りおそらく 2~3 年後には使えるレベルになるかと思いますが、それまでは UIKit で開発しないといけません。

### 2021 年に Swift のモバイルエンジニアになるのは時期が悪い

「iOS エンジニアを目指そうかなー」と少し思っていたのですが、モバイルエンジニアになるにしては時期があまりに悪いのでやめました。

というのも、現在の UI コンポーネントは UIKit が支配的です。ただ、数年後には SwiftUI に置き換えることはほぼ確定です。

そうなると、モバイル開発に慣れる２〜３年後には UIKit が SwiftUI に置き換わるので、再学習コストがかなり高いからです。

つまり、過渡期なので２つとも学習しないといけなくて学習コストが高いからです。

## 情報ノイズの過多

開発手法、バージョン差異、UI フレームワークの３つの観点で、別の書き方になることがあるため調べ物の情報のノイズがすごい多い印象です。

### 開発手法

まず開発手法について２つの書き方があります。

- Storyboard
- Programmatically

GUI ベースによる開発の Storyboard と、コードベースによる Programmatically な開発です。

それぞれの実装方法が異なるし、ググるときにどっちの方法なのか？をチェックしないといけないし、特に一番最初のころはコードをだけ見てもどっちケースを指しているのか明示されてなくて判断できるだけの知力もなくので、情報にノイズがかなり多いです。

### バージョン差異

バージョン差異について、UIKit のバージョンによって書き方が大きく変わります。例えば、Stackvoverflow を見るとわかるが、こんな感じでそれぞれの回答が別々に存在します。

- Swift 2 の場合
- Swift 3 の場合
- Swift 4 の場合
- Swift 5 の場合
- Objective-C の場合

自分が知りたい内容に対する答えが各バージョンで大きく異なる。なので、後方サポートがされてなさすぎて、常にバージョンを強く意識しないといけません。

### 実装方法

実装方法について、UI レイヤーによっても書き方が大きく違います。

- 手続き型：UIKit
- 宣言型：SwiftUI

2021 年の現時点で、UIKit が支配的ですが今後は SwiftUI へリプレイスされることが予想されます。つまり現時点では過渡期です。おそらく、この過渡期は今後数年は続くものと見られています。

特に、SwiftUI はパラダイムが異なるので書き方がまったくことなるので、それぞれ別の実装方法を調べないといけなくなります。

## IDE がバグりやすい

Storyboard をメインで開発していたときによく起きるのが、IDE の XCode がよくバグります。

そのため、正しくコードを書いてるのにその結果が反映されなかったりします。

大抵は XCode をリスタートすれば正しく動くようになりますが、序盤は自分のコードが正しいのか XCode がバグっているのかの判断も出来ないので XCode のバグのせいで結構な時間を溶かすこともあります。

## Style システムはモダンだけどやっぱしんどい

スタイルシステムはモダンで使いやすいが、バージョン差異がありしんどいです。

2021 年時点、Style システムは AutoLayout を用いて UI レイアウトの配置を決めるのが一般的かと思います。Web における、CSS に比べて遥かに書きやすく書いたコードが思ったとおりにレイアウトをされるので正直、この観点でははるかに Swift に軍配があがります。

というか CSS が魔境すぎです。フロントエンジニアとして数年やってても未だにわけわからん動きをされることが多い。

ただ、じゃあ AutoLayout は完璧か？というとそうでもなかったです。根本となる思想は良いのですが、細かな挙動を管理するための Style の API が各 UI コンポーネントによって違ったりバージョンによっても挙動が変わります。というわけで、なんだかんだでこっちもカオスになることが多かったです。

## Style の記述をロジックと分離しにくい

Style とロジックを分離にしくいです。

Web の場合は CSS という単位でデザイン・レイアウトは別ファイルにしたり、CSS in JS だとしてもある程度は分離が行えます。

ただ UIKit で書いてる限りだと、レイアウトもロジックの中に書かれることが多く、どうしてもコード全体で見たときに雑多になって見通しが悪くなりがちです。

## 技術のライフサイクル戦略が大きく違う

iOS では一歩遅れて技術を取り入れている印象です。

そのため、モダンにしては他のモダンな技術よりも一手遅いケースがあります。具体的には手続き型 UI がいまだ支配的だったりする点ですね。

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">フロントエンドのTypeScriptやReact GUIを見てると負債感のあるJSやHTML/CSSをラッピングしてどうにかしようとしてるのに対して、iOSはObjective-CやUIKitを根本からリプレイスしてSwiftやSwiftUIに差し替えようとしてて戦略の違いをすごい感じる。</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1415382247096537089?ref_src=twsrc%5Etfw">July 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!--  -->

## おわりに

「言語はすごい良いけど、それ以外に問題あり」という印象でした。

モバイルエンジニアにキャリアチェンジしてもいいと思うくらい Swift は良かったんですが、技術的な観点で時期があまり良くないのでやめました。

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Swiftを学んでるけど言語仕様がモダンでめちゃくちゃ気にいって本気でMobileエンジニアに転向しようかと思ったけど、UIレイヤーが命令的UIKitから宣言的SwiftUIへの過渡期で今はUIKitを学んで頑張らないといけないのに数年後にはSwiftUIになるので参入時期的にはやや微妙だということがわかってきた</p>&mdash; Nash⚡️北米でコード書いてる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1385033866172243970?ref_src=twsrc%5Etfw">April 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!--  -->

Swift+SwiftUI がもっと支配的になってからどこかのタイミングでもうちょいお勉強してもいいかなーと思います。

### まとめ

- 言語としての Swift はすごいいい
- 調べ物の情報ノイズが多い。後方サポートが弱くバージョンごとのやり方があり、しかもそもそも開発手法が複数あるのでなにかを調べるときのノイズがかなり多く、かつナレッジも溜まりにくい。
- UI のパラダイムが古い。React に比べて 1 世代古いパラダイムで開発をしないといけない。