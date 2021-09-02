import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from './InnerLayout';
import {TocCard} from '../atoms/TocCard';

type Props = {
  header: React.ReactNode;
  date: React.ReactNode;
  content: React.ReactNode;
  meta: React.ReactNode;
  author: React.ReactNode;
  affiliates: React.ReactNode;
  suggestions: React.ReactNode;
  toc: React.ReactNode;
};

export const PostPageLayout: React.FC<Props> = ({
  header,
  date,
  content,
  meta,
  author,
  affiliates,
  suggestions,
  toc,
}) => {
  return (
    <Container>
      <HeaderImage>{header}</HeaderImage>
      <ContentContainer>
        <InnerLayout
          section={
            <Flex>
              <Item>{date}</Item>
              <Item>{content}</Item>
              <Item>{meta}</Item>
            </Flex>
          }
          aside={<AuthorContainer>{author}</AuthorContainer>}
          asideVanishable={<TocCard toc={toc} />}
          footer={
            <FooterContainer>
              {affiliates}
              {suggestions}
            </FooterContainer>
          }
        />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div``;
const HeaderImage = styled.div``;
const FooterContainer = styled.div``;

const ContentContainer = styled.div`
  padding: ${(props) => `${props.theme.layout.marginVertical}px`};
  @media screen and (max-width: 700px) {
    padding: 0;
  }
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
