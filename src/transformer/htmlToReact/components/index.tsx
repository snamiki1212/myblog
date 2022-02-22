import React from 'react';
import styled, {css} from 'styled-components';
import {NaiveAnchor} from './NaiveAnchor';

/* Mapping the components to the markdown output */
const mobileWidth = '680px';

const mixinHeadline = css`
  font-weight: bold;
  font-family: var(--ff-primary);
`;

const mixinList = css`
  list-style-position: outside;
`;

const H1 = styled.h1`
  ${mixinHeadline};
  padding: 1rem 2rem;
  font-size: 25px;
  border-bottom: 1px solid lightgray;

  @media screen and (max-width: ${mobileWidth}) {
    font-size: 18px;
  }
`;

const H2 = styled.h2`
  ${mixinHeadline}
  color: var(--base-light);
  font-size: 25px;
  margin-top: 1.5rem;
  padding: 20px 2rem;
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
  padding: 5px 0 5px 0;
  border-bottom: 1px solid #ddd;
  margin-top: 60px;
  margin-bottom: 20px;
  margin-right: 2rem;
  margin-left: 2rem;
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
  margin: 0 2rem 30px 2rem;
  font-family: var(--ff-primary);

  font-size: 16px;
`;

const Blockquote = styled.blockquote`
  font-size: 17px;
  line-height: 36px;
  font-family: var(--ff-primary);
  border-left: 0.3rem solid lightgray;
  margin-left: 23px;
  padding: 0 10px;
  font-style: italic;
`;

const SHOULD_NOT_USE_TAG = styled.span`
  color: red;
`;

const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  font-family: var(--ff-primary);
  background-color: var(--white);
`;

const Ul = styled.ul`
  ${mixinList}
`;

const Ol = styled.ol`
  ${mixinList}
`;

const Li = styled.li`
  ${mixinList}
  padding: 10px;
`;

const mixinTableElement = `
  text-align: center;
  padding: 10px 0;
  font-family: var(--ff-primary);
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
