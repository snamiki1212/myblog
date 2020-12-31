import React from 'react';
import RehypeReact from 'rehype-react';
import styled, {css} from 'styled-components';
import {HandlerForA} from './HandlerForA';
/* Mapping the components to the markdown output */
const mobileWidth = '680px';

const primaryFont = css`
  font-family: ${props => props.theme.fontFamily.primary};
  color: ${props => props.theme.color.baseDark};
`;

const mixinHeadline = css`
  font-weight: bold;
  ${primaryFont};
`;

const mixinList = css`
  list-style-position: outside;
  background-color: ${props => props.theme.color.baseLight};
`;

const H1 = styled.h1`
  ${mixinHeadline};
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 25px;

  @media screen and (max-width: ${mobileWidth}) {
    font-size: 18px;
  }
`;

const H2 = styled.h2`
  ${mixinHeadline}
  color: ${props => props.theme.color.baseLight}; // overload;

  font-size: 25px;
  margin-top: 60px;
  padding: 10px 40px;
  background-color: ${props => props.theme.color.baseDark};
  @media screen and (max-width: ${mobileWidth}) {
    padding: 10px 20px;
  }
`;

const H3 = styled.h3`
  ${mixinHeadline}
  font-size: 20px;
  padding: 5px 0 5px 15px;
  border-left: 5px solid ${props => props.theme.color.primaryVivid};
  margin-top: 60px;
  margin-bottom: 20px;
  white-space: normal;
`;

const HR = styled.hr`
  margin-bottom: 30px;
`;

const B = styled.b`
  ${mixinHeadline};
  background: linear-gradient(transparent 50%, ${props => props.theme.color.primaryVivid} 0%);
`;

const P = styled.p`
  line-height: 2;
  margin-top: 0;
  margin-bottom: 30px;
  ${primaryFont};

  font-size: 18px;
  @media screen and (max-width: ${mobileWidth}) {
    font-size: 16px;
  }
`;

const Blockquote = styled.blockquote`
  font-size: 17px;
  line-height: 36px;
  ${primaryFont};
  border-left: 0.3em solid lightgray;
  margin-left: 23px;
  padding: 0 10px;
  font-style: italic;
`;

const SHOULD_NOT_USE_TAG = styled.span`
  color: red;
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  ${primaryFont};
`;

const Ul = styled.ul`
  ${mixinList}

  margin-bottom: 40px;
`;

const Ol = styled.ol`
  ${mixinList}
  margin-bottom: 40px;
`;

const Li = styled.li`
  ${mixinList}
  padding: 10px
`;

const mixinTableElement = `
  text-align: center;
  padding: 10px 0;
  ${primaryFont};
`;

const Td = styled.td`
  ${mixinTableElement}
`;

const Th = styled.td`
  ${mixinTableElement}
  font-weight: bold
`;

const Tr = styled.tr`
  ${mixinTableElement}
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.color.baseDark};
`;

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
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: SHOULD_NOT_USE_TAG, // Dont use h4~h6, because it's deep nest.
    h5: SHOULD_NOT_USE_TAG,
    h6: SHOULD_NOT_USE_TAG,
    hr: HR,
    a: HandlerForA,
    b: B,
    strong: B, // same as B-tag
    p: P,
    blockquote: Blockquote,
    table: Table,
    td: Td,
    tr: Tr,
    th: Th,
    ul: Ul,
    ol: Ol,
    li: Li,
  },
}).Compiler;

export default renderReact;
