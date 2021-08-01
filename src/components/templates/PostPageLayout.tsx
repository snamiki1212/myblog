import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from './InnerLayout';
import {Card} from '../atoms/Card';

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
          aside={
            <div>
              <AuthorContainer>{author}</AuthorContainer>
              <Card>
                <TocWrapper>{toc}</TocWrapper>
              </Card>
            </div>
          }
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

const TocWrapper = styled.div`
  max-width: 300px; /* TODO: should change */
  max-height: 400px; /* TODO: should change */
  overflow: auto;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;
