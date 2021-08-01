import React from 'react';
import RehypeReact from 'rehype-react';
import {components} from './components';

/**
 * Markdown のコンテンツのパーサーの結果をReactComponentに変換
 *
 * - RemarkのParser：Markdown >> html
 * - このCompier: html >> react
 *
 * ## このCompilerの導入モチベーション
 * - CSS: コンポーネント志向でCSSを書きたいので、このCompilerを導入。このCompilerがないと、scss とかを import しないとならなさそう。
 * - AMP: img → am-img に変換する予定だった。ただ、導入コストが高い＋GatsbyJSの公式でAMPを一級市民になりそうな流れがありそうなので、一旦放置。
 */
export const renderReact = new RehypeReact({
  createElement: React.createElement,
  components,
}).Compiler;

export default renderReact;
