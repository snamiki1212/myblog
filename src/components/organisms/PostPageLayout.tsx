import React from 'react';
import styled from 'styled-components';

type Props = {
  header: React.ReactNode;
  date: React.ReactNode;
  content: React.ReactNode;
  meta: React.ReactNode;
  author: React.ReactNode;
  suggestions: React.ReactNode;
};

export const PostPageLayout: React.FC<Props> = ({
  header,
  date,
  content,
  meta,
  author,
  suggestions,
}) => {
  return (
    <Container>
      {header}
      <Item>{date}</Item>
      <Item>{content}</Item>
      <Item>{meta}</Item>
      <Item>{author}</Item>
      <Item>{suggestions}</Item>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;
