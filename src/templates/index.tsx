import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout';
import {Paginator, HeaderTitle, SEORaw} from '../components/atoms/';
import {AuthorCard, PostPreviewCardList} from '../components/molecules';
import config from '../../data/SiteConfig';
import {colors} from '../../data/color';
import {IndexPageContext} from '../../gatsbyjs/createPages';

export const Index = (props: any): JSX.Element => {
  const postEdges = props.data.allMarkdownRemark.edges;
  const pageContext = props.pageContext as IndexPageContext;

  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <div className="index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEORaw postEdges={postEdges} />
        <IndexContent>
          <IndexPostWrapper>
            <PostPreviewCardList postEdges={postEdges} />
            <Paginator pageContext={pageContext} />
          </IndexPostWrapper>
          <Sidebar>
            <AuthorCard />
          </Sidebar>
        </IndexContent>
      </div>
    </Layout>
  );
};

const Sidebar = styled.div`
  flex: 1;
  width: 100%;
  min-width: 250px;
  padding: 24px;

  background-color: ${colors['bg-white-2']};
`;

const IndexContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const IndexPostWrapper = styled.div`
  flex: 4;
`;

export default Index;

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
