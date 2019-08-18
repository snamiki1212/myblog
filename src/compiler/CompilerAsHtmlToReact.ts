import React from 'react';
import RehypeReact from 'rehype-react';
import styled from 'styled-components';
import {colors} from '../../data/color';

/* Mapping the components to the markdown output */
const mobileWidth = '680px';

const fontColorNormal = colors.fontBlack1;
const fontColorHeadline = colors.fontBlack1;
const fontColorVivid = 'red';
const hLeft = colors.hLeft;
const listBackgroundColor = colors.backgroundWhite2;

const mixinHeadline = `
  font-weight: bold;
  color: ${fontColorHeadline};
`;

const mixinList = `
  list-style-position: outside;
  background-color: ${listBackgroundColor};
`;

const H1 = styled.h1`
  ${mixinHeadline}
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 25px;

  @media screen and (max-width: ${mobileWidth}) {
    font-size: 18px;
  }
`;

const H2 = styled.h2`
  ${mixinHeadline}

  font-size: 25px;

  margin-top: 60px;
  border-left: 10px solid ${hLeft};

  padding: 20px 40px;
  @media screen and (max-width: ${mobileWidth}) {
    padding: 10px 20px;
  }
`;

const H3 = styled.h3`
  ${mixinHeadline}

  font-size: 20px;

  padding: 5px 0 5px 15px;
  border-left: 5px solid ${hLeft};

  margin-top: 60px;
  margin-bottom: 20px;
  white-space: normal;
`;

const HR = styled.hr`
  margin-bottom: 30px;
`;

const A = styled.a`
  border-bottom: solid 1px;
  transition: 0.3s;
  &:hover {
    color: ${fontColorVivid};
    transition: 0.3s;
  }
`;

const B = styled.b`
  ${mixinHeadline}
  color: ${fontColorVivid}
`;

const P = styled.p`
  line-height: 2;
  margin-top: 0;
  margin-bottom: 30px;
  color: ${fontColorNormal};

  font-size: 18px;
  @media screen and (max-width: ${mobileWidth}) {
    font-size: 16px;
  }
`;

const Blockquote = styled.blockquote`
  font-size: 17px;
  line-height: 36px;
  color: ${fontColorNormal};
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

// Compier: html >> react
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
    a: A,
    b: B,
    strong: B, // same as B-tag
    p: P,
    blockquote: Blockquote,
    table: Table,
    ul: Ul,
    ol: Ol,
    li: Li,
  },
}).Compiler;

export default renderReact;
