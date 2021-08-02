# Overview

Starter template of Gatsby.js.

## Demo

Below is starter demo site.

- [Gatsby Starter Lunash](https://snamiki1212.github.io/gatsby-starter-lunash/)

Below is my blog using this starter also in Japanese.

- [Lunash](https://snamiki1212.com/)

## Tech Stacks

- Core: `Gatsby.js(v3)`, `TypeScript`
- CSS: `styled-components`
- UI: Vanilla CSS in JS, Atomic Design
- CI: Github Actions
- Hosting: Github Pages

## Usage:

```zsh
$ yarn global add gatsby-cli
$ yarn
$ yarn start
```

## Design

Designed by Figma.

<a href="https://www.figma.com/file/DQuYoZjdtvl1ElNh3EoiER/Lunash?node-id=0%3A1"><img height="300" alt="Screen Shot 2021-03-03 at 16 37 54" src="https://user-images.githubusercontent.com/26793088/109891938-e236f080-7c3e-11eb-90bd-f21a0a6731bc.png"></a>

## Directory

```sh
/myblog
  /contents        # blog articles
  /data            # constant values
  /gatsby-node     # gatsby functions when to build into statis files
  /src             # app
  /static          # statis files

  # build result -------------
  /node_modules     # packages
  /public           # build by gatsby
  /.cache           # build by gatsby

  # etc -----------------------
  /.github
  /.vscode
  /__mock__         # test mock
```

## LICENSE

[MIT](https://github.com/snamiki1212/gatsby-starter-lunash/blob/master/LICENSE)
