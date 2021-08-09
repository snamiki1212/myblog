import React from 'react';
import styled, {css} from 'styled-components';
import {NaiveAnchor} from './NaiveAnchor';

/* Mapping the components to the markdown output */
const mobileWidth = '680px';

const primaryFont = css`
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: var(--base-dark);
`;

const mixinHeadline = css`
  font-weight: bold;
  ${primaryFont};
`;

const mixinList = css`
  list-style-position: outside;
  background-color: var(--white);
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
  color: var(--base-light);
  font-size: 25px;
  margin-top: 60px;
  padding: 20px 40px;
  background: linear-gradient(
    145deg,
    var(--base-dark),
    var(--base-dark-CC),
    var(--base-dark)
  );

  @media screen and (max-width: ${mobileWidth}) {
    padding: 10px 20px;
  }
`;

const H3 = styled.h3`
  ${mixinHeadline}
  font-size: 20px;
  padding: 5px 0 5px 15px;
  border-left: 5px solid var(--vivid1);
  margin-top: 60px;
  margin-bottom: 20px;
  white-space: normal;
`;

const HR = styled.hr`
  margin-bottom: 30px;
`;

const B = styled.b`
  ${mixinHeadline};
  background: linear-gradient(transparent 60%, var(--vivid1));
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
  border-left: 0.3rem solid lightgray;
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
  background-color: var(--white);
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

const Th = styled.th`
  ${mixinTableElement}
  font-weight: bold
`;

const Tr = styled.tr`
  ${mixinTableElement}
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-color: var(--base-dark);
`;

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: SHOULD_NOT_USE_TAG, // Dont use h4~h6, because it's deep nest.
  h5: SHOULD_NOT_USE_TAG,
  h6: SHOULD_NOT_USE_TAG,
  hr: HR,
  a: NaiveAnchor,
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
};
