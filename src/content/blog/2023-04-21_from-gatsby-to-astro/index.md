---
layout: /src/layouts/PostLayout.astro
title: "GatsbyからAstroへブログをリプレイスした話"
createdAt: "2023-04-21 02:00"
updatedAt: "2023-04-21 02:00"
category: "技術"
tags:
  - Astro
  - Gatsby
slug: from-gatsby-to-astro
word:
  - nothing
---

# Gatsby から Astro へブログをリプレイスした話

ども、Nash です。

この記事では「Gatsby から Astro へブログをリプレイスしたときの話」です。

では、見ていきます。

## リプレイスにあたって

このブログは開設当時、Gatsby で作成していました。その当時は Next はまだ SSR のみで SSG がなく、React 系で SSG を使うには Gatsby 一択でした。

ブログを作成してから継続的に更新してきたのですが、個人的に感じるいろいろな Gatsby のツラミが出てきてメンテがしんどくなり、頑張ってバージョンアップしようかと思ってたののですがこの度リプレイスすることにしました。

### リプレイスの方針

まずは今回のリプレイスの方針を、Gatsby で作成したときに感じたツラミをもとに立てます。

最初にシンプルを重視しました。前回のブログでは途中からメンテコストが跳ね上がってしまい、場合によってはブログを書くよりもブログ本体のメンテのほうがしんどい状態になっていました。なので今回はできるかぎり本体を薄くして、メンテコストを下げていきたいです。

具体的には、できる限り Type-safe にし、Plugin などの拡張も少なめで、画像などのリソースはできる限り外部サービスを使うことにします。また FW 自体も複雑性がすくないものにしたいです。

また、UI についても刷新することにしました。理由として、Gatsby で作成していたときは CSS ライブラリを使わずに Pure な CSS で実装していたのですが、まぁ辛かったからです笑。実装コストがそこそこかかる上に、自作だったためそこまで UI クオリティが高くなかったので、今回できるかぎり UI についてもライブラリに乗っかります。

### リプレイス候補

方針が決まったので、FW の候補を見ていきます。リプレイス候補としては下記がありました。

- Next.js
- Dacusaurus
- mdBook
- Astro

[Next.js](https://github.com/vercel/next.js/)について、仕事でもちょくちょく Next を触ることもあるので最初に考えた候補です。ただ、Next.js は特性としてアプリケーション寄りで、Astro のほうがコンテンツ寄りのため、この２つで考えると最終的に Astro にしました。

> Content-focus: Astro was designed to excel at making content-focused websites. An existing Next.js app might be built for high client-side interactivity and may include items that are difficult to replicate in Astro, such as dashboards.
> --- https://docs.astro.build/en/guides/migrate-to-astro/from-nextjs/#key-differences

[Dacusaurus](https://github.com/facebook/docusaurus)について、自分はコードは触らなかったのですが前職でチームで使っていたので候補にあがりました。ただ、自分のブログのリソースについてディレクトリ構成が一般的な方法と少し異なり、FW 側でその対応がする必要があったのですが、そこのカスタマイズ性が難がありそうでした。

```zsh
# 一般的なディレクトリ構成では、resourcesは他のディレクトリに分かれる
contents
├── images
│	├──img1.png
│	└──img2.jpg
└── blogs
	├──blog1.mdx
	└──blog2.mdx

# 自分のディレクトリ構成では、resourcesも同一のディレクトリに格納していた
contents
├──blog1
│	├──index.mdx
│	└──cover.png
└──blog2
	├──index.mdx
	└──cover.jpg
```

また、ブログとしてデザインの変更がどこまで行えるかが怪しいところもあり、docusaurus も候補から外れました。

[mdBook](https://github.com/rust-lang/mdBook)について、docusaurus とほぼ同じ理由で候補から外れました。Gitbook like in Rust なので、デザインとディレクトリ構成のカスタマイズ性に難がありそうです。また、Rust で書かれているため、ビルドタイムは早そうなのが魅力的ですが、UI の変更など細かい内容を Rust で書く必要がありそうです。Gatsby でブログを作っていたときの教訓として、メンテコストをできる限り小さくしたかったので、今回は候補から外しました。

### Astro にした理由

最終的に、Astro でリプレイスをすることに決めました。

決めるにあたっていくつか理由がありますが、正直ファーストインプレッションの良さや直感も強めです。とはいえ、１つずつ言語化してみていきます。

１点目として、Astro 自体が後発 FW でかつ筋が良さそうだったからです。React 界隈の文脈で見ると、先発 FW は２つあり Next と Gatsby です。

Next は、主の目的がブログなどのコンテンツ作成ではなくアプリケーション開発である点と、近年では機能がかなり多くなりかつ複雑になってきています。後方互換があるものの、バージョンアップデートの頻度も高く、かつ API がややドラスティックに変わるため、仕事で見てうる限りメンテコストがそれなりに高い印象です。

Gatsby は、SSG に特化していますが開発時の DX が全体的に良くなかったです。具体的には、すべてのリソースへのアクセスに GaraphQL を介さないといけない仕様なので１つ分多くレイヤーが挟まって学習コストが高くて直感的にデータ取得がしにくかったです。おそらくですが、個人ブログではなく中〜大規模のコンテンツ生成ではうまく機能するのではないかなーと感じますが、それ込みでも現時点だと Astro のほうが利便性が良さそうにも思います。

Astro は、コンテンツフォーカスを謳っていることもあり今回のようなブログサービスではうまくハマってくれそうでした。また、選定時に軽く触ってみた感覚としても、複雑性が上手に隠蔽されていたり、それでいて必要な機能がわかりやすくうまく提供されているようにも感じて、DX の観点で雑にいうと筋が良さそうでした。もう少し具体的に言うと、Type-safe、file-based routing、mdx support とかですかね。

２点目として、技術的に新しいものなので触っておきたいという点です。このブログを作ってる目的の１つとして、技術を試す場所としても使っています。仕事で Next を触っているものの、後発の FW がどのようなものなのかを知っておきたかった形です。

３点目として、他の UI コンポーネントやインタラクティブ性が必要になったときにリプレイスがしやすそうと思った点です。その理由として、Astro では MPA ＋ Astro Islands アーキテクチャがコアとなっています。

MPA は、サーバー側でレンダリング、つまり HTML を生成します。Astro の場合はアクセス時ではなく build 時点でコンポーネントが解釈されるため、SSG の静的サイトとして提供できます。ポイントとして、コンポーネントは Build 時に解釈されるため、どのような UI ライブラリでも使うことができる点です。具体的には、React・Vue・Angluar など。そのため今後、後発で面白そうな UI ライブラリが出てきたときに、FW 本体である Astro をそのままにしつつ、部分的に新しい技術を使って試せれそうだと思いました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Snowpackを開発してるチームが作ってる静的サイトジェネレータのAstro見てるけど、ReactとかVueとかSvelteとかをごちゃまぜに書けるの面白い <a href="https://t.co/FPqGeVB7z5">pic.twitter.com/FPqGeVB7z5</a></p>&mdash; Nash (@snamiki1212) <a href="https://twitter.com/snamiki1212/status/1424577409962151939?ref_src=twsrc%5Etfw">August 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Astro Islands アーキテクチャは、Island 単位で Microfrontend を行うアーキテクチャです。Astro の基本はコンポーネントをビルド時に、100% HTML + Zero JS へ変換します。ですが、必要に応じて明示すれば必要な JS もあとから入れることもできます。現状では、JS によるインタラクティブ性が高いものが必要ないですが、部分的に必要になったときも柔軟に変更できるのが魅力的でした。

### CSS は DaisyUI

CSS ライブラリについても選定を行い、[Daisyui](https://www.google.com/search?q=github+daisyui&oq=github+daisyui&aqs=chrome.0.69i59j69i64j69i60l3.1554j0j4&sourceid=chrome&ie=UTF-8)にしました。

前述しているとおり、UI についても刷新します。そのため、CSS ライブラリについても選定する必要がありました。選定にあたり、いくつか他の選択肢がありましたが下記のような内容と理由で決めました。

[ChakraUI](https://github.com/chakra-ui/chakra-ui)も、以前使ったことがあるので候補として上がりました。ですが、昨今のフロントエンドを見ていると Utility 系では tailwind がほぼデファクトになっているため、今回は tailwind をベースにすることにしました。

[Tailwind](https://github.com/tailwindlabs/tailwindcss)を、そのまま使う選択肢もありましたが、それだとほぼ前回と同様に自前で UI を作る必要があります。Utility としては採用しますが、他に UI ライブラリは必須にしたいところです。

[Flowbite](https://github.com/themesberg/flowbite)は、Tailwind をもとにした CSS コンポーネントとして候補にはあがりました。ですが、提供されている UI の個人的な好みとしては圧倒的に DaisyUI のほうが好きだったため今回は見送りました。

[Daisyui](https://www.google.com/search?q=github+daisyui&oq=github+daisyui&aqs=chrome.0.69i59j69i64j69i60l3.1554j0j4&sourceid=chrome&ie=UTF-8)は、同じく Tailwind をもとにした CSS コンポーネントです。もともと、結構前から気にはなっていて、今回のリプレイスに伴い改めて確認したら Tailwind をもとにしたこともわかり、デザイン＋メンテ性の両面で良さそうだったので、これに決めました。

---

ここまでで、UI ライブラリと CSS コンポーネントについて選定を行い、Astro+DaisyUI で実装することに決めました。ここからは、実際にリプレイスを行った結果について書いていきます。

## 実際にリプレイスをした結果

Gatsby から Astro へリプレイスする方針が決まったため、リプレイスを行います。

リプレイスを頓挫させないためにも、段階的にリプレイスを行いました。まずは根幹となるブログの生成周りを実装します。そのあとに、あとから UI を徐々に肉付けする形で作りました。

では、実際にリプレイスしたときの学びなどを見ていきます。

### Collection で TypeSafe な Frontmatter

Astro の V2 からはマークダウンの frontmatter も Type-safe になりました。

マークダウンには frontmatter というコンテンツの上部にメタデータを記述することができます。過去のブログでは、この frontmatter のデータを使うときはすべて null チェックが必要だったり、逆にデータがある前提で UI を書いていました。特に、データがある前提で書いていても frontmatter に抜け漏れがあると、検知できずにビルドエラーになり、かつそこの究明がそこそこ大変だった記憶があります。

そのため、今回はその教訓を考えて frontmatter に対してバリデートを入れていきます。Astro の V2 で実装された Collection 機能では、Frontmatter に対するバリデーションを設定することができるようになりました。なので、これを使っていきます。

- [Introducing Content Collections: Type-Safe Markdown in Astro 2.0 | Astro](https://astro.build/blog/introducing-content-collections/)

ちなみに、V2 がリリースされる少し前に[zod](https://github.com/colinhacks/zod)を使って自前で frontmatter のバリデーションロジックを作り終えていたのですが、そこから数日後に v2 がリリースされましたので、すべて Collection 移行しました涙。リリーススケジュールをよく見ておけばよかったです。。。

なにはともあれ、これで frontmatter に対しても型セーフに実装されたので Frontmatter の抜け漏れが簡単に検知できるようになり DX がよくなりました。

### コンポーネントを React から Astro へ

UI コンポーネントを React から Astro へ移行しました。

もともとは、作り慣れていることもあり、React でコンポーネントを書いていました。ですが、いくつかの理由から`.tsx`から`.astro`に変えました。

１点目として、Astro が React を呼べるけど React が Astro を呼べない点です。この制約のため、どのコンポーネントを React か Astro にするかの親子関係を考える必要があり、かつ場合によってはもともと親だったものが途中で子に変わることもあるため、柔軟性を考えるとすべて Astro コンポーネントにするほうが楽になってきました。

２点目として、React 特有の書き方がなくなる点です。Astro はほぼ完全に HTML ベースですが React は tsx のために細かいところで書き換えに必要になります。例えば下記のようなものです。

- `class`ではなく`className`
- ケバブケースではなくキャメルケース（特に svg で面倒）

コンポーネントを書くときにどこかからコピペしてくるときに、毎回これらを直すのが地味に面倒だなーと思っていたのですが、Astro ではこういった修正が必要ないので楽でした。

３点目として、ボライープレートの量が圧倒的に少ない点です。過去に Svelte でサイトを作っていたときにも感じましたが、tsx はボイラープレートがそれなりに冗長です。Astro、Vue、Svelte はほぼ同じようなシンタックスで、コンポーネントをベタ書きできるため、コード量が少なくぱぱっと書く分には楽でした。

### Astro ファイルだと NamedExport できない

Astro コンポーネントで UI は構成していたのですが、個人的な問題としては Named Export ができない点です。

そのため、Default Export のみになり参照されている側のコンポーネントのファイル名を変更しても参照している側でのコンポーネント名は変わらないのでメンテ性としては少し問題でした。

とはいえ、今回は個人ブログなのでそこまでコード品質を上げる必要もないので許容できるものかと思っています。

## おわりに

Gatsby から Astro へリプレイスした話でした。

ひとまずはコアの部分についてリプレイスが完了したので、肉付けとして継続的にデザインや機能を改善していく予定です。いままでは、ビルドタイムがかなり長かったり、TypeSafe に開発しにくかったのですが Astro になってからは快適に開発が進められるようになったのでリプレイスしてよかったなーと思っています。

### その他｜手書きロゴ

手書きロゴについて下記のサービスでいい感じのロゴを作れたので紹介しておきます。

- [Calligrapher.ai: Realistic computer-generated handwriting](https://www.calligrapher.ai/)
