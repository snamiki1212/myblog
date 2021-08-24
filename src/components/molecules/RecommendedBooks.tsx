import React from 'react';
import styled from 'styled-components';
import './RecommendedBooks.scss';
import {addTargetBlank} from '../../lib/html';

type Props = {
  naiveHTMLs: string[];
};

export function RecommendedBooks({naiveHTMLs}: Props) {
  if (naiveHTMLs.length <= 0) return <></>;
  return (
    <Container>
      {naiveHTMLs.map((html) => (
        <div
          className="recommended-book"
          dangerouslySetInnerHTML={{__html: addTargetBlank(html)}}
        ></div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem 0;
  overflow-x: scroll;
  width: 100%;

  /* &::before,
  &::after {
    content: '';
    margin: auto;
  } */
`;
