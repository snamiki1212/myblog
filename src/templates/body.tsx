import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {colors} from '../../data/color';
import config from '../../data/SiteConfig';
import {
  IndexPageContext,
  PaginationContext,
  SubPageContext,
} from '../../gatsby-node_';
import {
  HeaderTitle,
  Paginator,
  SEOMeta,
  SubPageLinks,
} from '../components/atoms/';
import {AuthorCard, PostPreviewCard} from '../components/molecules';
import Layout from '../layout';
import {FluidObject} from 'gatsby-image';

export const Body = ({
  postEdges,
  context,
}: {
  postEdges: any;
  context: PaginationContext & SubPageContext;
}): JSX.Element => {
  return (
    <PageContainer>
      <ArticleArea>
        <PostPreviewCardContaienr>
          {postEdges.map(
            (edge): JSX.Element => (
              <PostPreviewCard
                key={edge.node.frontmatter.title}
                postInfo={edge}
              />
            )
          )}
        </PostPreviewCardContaienr>
        <Paginator context={context} />
      </ArticleArea>

      <AsideArea>
        <AuthorCard />
        <SubPageLinks context={context} />
      </AsideArea>
    </PageContainer>
  );
};

const AsideArea = styled.aside`
  flex: 1;
  width: 100%;
  min-width: 250px;
  padding: 24px;

  background-color: ${colors['backgroundWhite2']};
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ArticleArea = styled.div`
  flex: 4;
  min-width: 500px;
`;

export const PostPreviewCardContaienr = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
