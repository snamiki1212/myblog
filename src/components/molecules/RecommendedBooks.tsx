import React from 'react';
import styled from 'styled-components';
import {RECOMMENDED_BOOKS_HTML} from '../../../data/affiliate';
import './RecommendedBooks.scss';

export function RecommendedBooks() {
  if (RECOMMENDED_BOOKS_HTML.length <= 0) return <></>;
  return (
    <Container>
      {RECOMMENDED_BOOKS_HTML.map((__html) => (
        <div
          className="recommended-book"
          dangerouslySetInnerHTML={{__html}}
        ></div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
  gap: 0.8rem;
  overflow-x: scroll;

  &::before,
  &::after {
    content: '';
    margin: auto;
  }
`;
