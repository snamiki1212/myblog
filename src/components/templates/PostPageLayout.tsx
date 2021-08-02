import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from './InnerLayout';
import {Toc} from '../atoms/Toc';

type Props = {
  header: React.ReactNode;
  date: React.ReactNode;
  content: React.ReactNode;
  meta: React.ReactNode;
  author: React.ReactNode;
  suggestions: React.ReactNode;
  toc: React.ReactNode;
};

export const PostPageLayout: React.FC<Props> = ({
  header,
  date,
  content,
  meta,
  author,
  suggestions,
  toc,
}) => {
  return (
    <Container>
      {header}
      <InnerContainer>
        <InnerLayout
          section={
            <Flex>
              <Item>{date}</Item>
              <Item>{content}</Item>
              <Item>{meta}</Item>
              <Item>{suggestions}</Item>
            </Flex>
          }
          aside={<AuthorContainer>{author}</AuthorContainer>}
          asideVanishable={<Toc toc={toc} />}
        />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div``;

const InnerContainer = styled.div`
  padding: ${(props) => `${props.theme.layout.marginVertical}px`};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorContainer = styled.div`
  margin-bottom: 1rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;
