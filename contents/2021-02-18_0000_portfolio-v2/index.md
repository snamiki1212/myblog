---
title: 'Svelteでポートフォリオサイトを作った話'
createdAt: '2021-02-18 22:00'
updatedAt: '2021-02-18 22:00'
category: '技術'
tags:
  - Svelte
slug: portfolio-v-2
word:
  - nothing
---

# Svelte でポートフォリオサイトを作った話

こんにちは、北米でお勉強してる Nash です。

この記事は「**ポートフォリオサイトを Svelte で作ったので、その過程で得た気づきのまとめ**」についての記事です。

では見ていく。

## どんなポートフォリオサイト作ったの？

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ポートフォリオサイト作った<br>Svelte使ったり、Glitch Effectなアニメーションで遊んでる<a href="https://t.co/DYNZpjeBnG">https://t.co/DYNZpjeBnG</a></p>&mdash; Nash⚡️北米にいる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1362630449693003776?ref_src=twsrc%5Etfw">February 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- /Twitter -->

要素として下記な感じなのを作った。

|          |                                                                       |
| -------- | --------------------------------------------------------------------- |
| 技術     | Svelte、SCSS、TypeScript                                              |
| デザイン | サイバーパンク、原色 CYM（シアン、イエロー、マゼンタ）、Glitch Effect |

## なんでポートフォリオ作ったの？

今、北米で学生してるけど、その課題で「なんか作れ」ってなったのが理由。

仕事とは違って好き勝手にできるプロジェクトなので、新しいことを盛り込んでみた。
挑戦してみたこととして下記の２つ。

- 技術：Svelte
- アニメーション：Glitch Effect

２つについて掘り下げていく。

## Svelte の技術選定まで

前回の課題では「WebComponent を使う」をチャレンジにしてて、そのときは[超軽量な FW ライクなオレオレライブラリ](https://github.com/snamiki1212/example-web-components)を作って、それを使って LP を作ってた。

ただ、今回はきちんとした OSS のライブラリで作りたいなーと思ってたので技術選定から始めた。前回の課題の流れで、最初は WebComponent の文脈で探し始めて白羽の矢が経ったのが lit-element だった。

### lit-element：所感

「[lit-element](https://lit-element.polymer-project.org/) って何？」の回答として「WebComponent のためのライブラリ・FW」になると思う。もう少し噛み砕くと、ネイティブな WebComponent の API を使わないで lit-element のいい感じの API を使えば楽に早く WebComponent を作れるよ、ってところ。ちなみに Google が作成してる。

まずは、ひととおりドキュメントを読んで、[雑に素振りを手元](https://github.com/snamiki1212/example-lit-element)でしてみた。

使ってみた感触だが、下記の２つのシンタックスが融合してる感じ。

- React のクラスコンポーネント
- Angular 的なデコレーター

（Angluar そんなに詳しくないのでちょっと違うかも）

正直、書き心地は普通〜微妙な感じで、特にエコシステムが弱い印象。実際、SCSS のプラグイン・バンドラー周りがうまく動いてくれなくてハマってたところで、他の技術を見てみようかなってことで Svelte に出会う。

### Svelte：所感

すでに lit-element で時間を溶かしてたし、この後に説明する Glitch Effect でも時間を溶かしてたので、Svelte はチュートリアルを何も読まずにいきなり書き始めた。

書き心地はかなり良好で確かにこれは[State of JS 202 で話題になる](https://2020.stateofjs.com/en-US/)レベルだなーという印象。

- Vue のシンタックスとほぼ同じ、それ以上に記述量が減ってるし直感的になってる。
- なにより Vue みたいに API が多くないので覚えることも少なく、学習曲線もゆるやか

他に Svelte の特徴をつらつら書くと下記みたいな感じだった。

- VirtualDOM なし＋ DeclaretiveUI
- React/Vue/Angula 違って Svelte はコンパイラ。ビルド時に HTML/CSS/JS を吐き出す。なので、根本の仕組みが大きく違う。
- 双方向バインディング、イベントディスパッチャー（まんま Vue）
- Svelte 自体がグローバルステート周りの API まで用意してる
- Svelte チュートリアルの２ステップ目に a11y の内容を絡めて入れてるあたり時代を感じる

特に Reactivity について言及しておく。

### Svelte：Reactivity

Reactivity について、自分の所感とイメージを書いておく。ちょっと理解がまだ甘いので説明がずれてたり間違ってるかもだけどご容赦を。

React とかは、ローカルステートなどが変更されると基本的にそのコンポーネントが作り直されて、すべての値も更新されるが Svelte だと逆に更新する対象を明示しておかない更新されないし、関数も実行されない。そのため、「どの値・関数・コンポーネントをメモ化させておくか」をロジックに書かないといけない。具体的には、`useCallback`/`useMemo`/`React.memo`など。

逆に Svelte では「どの値・関数を更新させるか」をロジックに書くイメージ。ここで JS の Label 構文を使う。Label 構文とか、はじめて知った。

```svelte
<script>
	let counter = 0;
	const handleClick = () => counter++;

  // これがLabel記法。SvelteじゃなくてJSの標準機能。
  // 依存してるcounterが更新されると、これも再実行される
	$: console.log('counter is ', counter)
</script>

<button on:click={handleClick}>
	{counter}
</button>
```

当たり前だけど、どっちのほうが優れてるってわけではないしトレードオフの色が強い。明示的に Reactivity を宣言すること VirtualDOM による Reconcilliation がなくなるのでその分のコストがなくなり Svelte が爆速になってる。

---

ということで、Svelte 使ったけど作ったサイトが LP だったので浅いところしか使わなかったので、感想も浅いですね。。。

いずれにしても、DX は軒並み良かったので今後も小さい LP などを作る機会があればこっちで書いていくかも。

## GlitchEffect

UI 周りのチャレンジとしては、以前からやってみたかった GlitchEffect を使ってみた。

「Glitch Effect ってなに？」の質問に対する回答は「下記みたいな Noisty でギザギザなサイバーパンク感のあるアニメーション」が答え。

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ようやっとカッコいいNosiyなCSSアニメーションになって満足<a href="https://t.co/EXZMxdjaAs">https://t.co/EXZMxdjaAs</a> <a href="https://t.co/n5iMK4X8VS">pic.twitter.com/n5iMK4X8VS</a></p>&mdash; Nash⚡️北米にいる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1360360750867353601?ref_src=twsrc%5Etfw">February 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- /Twitter -->

### Glitch Effect のお勉強

やりかた・仕組みを知らなかったのでまずは関連記事をいろいろ読むところから。ためになったのは下記の記事とコード。

- [ Glitch Effect on Text / Images / SVG | CSS-Tricks ](https://css-tricks.com/glitch-effect-text-images-svg/)
- [CSS でグリッチっぽい表現をやる - Qiita](https://qiita.com/SnO2WMaN/items/e0582b64c41f31fc92cb)
- [Codepen-example](https://codepen.io/fearOfCode/details/FsGtu)

簡単に説明するとだいたい下記のようなイメージ

1. ３つのテキストを重ねて表示
2. それぞれ 1~2px ずつ左右にずらす
3. 左右にずらしたテキストに対して、横にスライスして、スライスされたパーツを部分的に見せたりする

文章で簡潔に説明が難しいんで詳細は上述のリンクに任せる。ちなみに、これ以外にも細かいいろいろなアニメーションも混じってる。

### Glitch Effect を使って

[いろいろ手元で素振りをしてみて](https://github.com/snamiki1212/example-glitch-effect)、結局は[Codepen にあるイケてるやつ](https://codepen.io/fearOfCode/details/FsGtu)を SCSS にして持ってきた。Stylus を SCSS に変えるのと、block 要素をどうにか inline-block な感じにしたりで GlitchEffect じゃないところでハマった気もするけど、とにかく自分のポートフォリオの持ってこれたので満足。

基本的に Glitch Effect って、Noisy でダークな印象が強いので「仕事じゃ、こんなアニメーション普通は使えないよな」って思ってたけど、Pixiv のイベントサイトでポップなトーンに Glitich のスライス幅を太めに使っててドチャクソかっこよいのを見つけたので、どこかで LP を作る必要があるときに自分も混ぜていきたいという気持ちになった。

[PIXIV TECH FES.](https://conference.pixiv.co.jp/2020/tech-fes)

## おわりに

ポートフォリオサイトを作ったお話でした。

コードはここにあるんで、良さげだったら Star してくれると喜びます。

[GitHub - snamiki1212/v2: Portfolio v2](https://github.com/snamiki1212/v2)

<!-- Twitter -->
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ポートフォリオサイト作った<br>Svelte使ったり、Glitch Effectなアニメーションで遊んでる<a href="https://t.co/DYNZpjeBnG">https://t.co/DYNZpjeBnG</a></p>&mdash; Nash⚡️北米にいる (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1362630449693003776?ref_src=twsrc%5Etfw">February 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<!-- /Twitter -->
