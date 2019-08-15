import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {colors} from '../../data/color';
import config from '../../data/SiteConfig';
import {IndexPageContext} from '../../gatsbyjs/createPages';
import {HeaderTitle, Paginator, SEORaw} from '../components/atoms/';
import {AuthorCard, PostPreviewCardList} from '../components/molecules';
import Layout from '../layout';

export const Index = (props: any): JSX.Element => {
  const queryFetched = props.data.allMarkdownRemark as IndexPageQuery;
  const postEdges = queryFetched.edges;
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

export interface IndexPageQuery {
  edges: MarkdownRemarkEdge[];
}

export interface MarkdownRemarkEdge {
  node: {
    fields: {
      slug: string;
      date: Date;
    };
    excerpt: string;
    timeToRead: number;
    frontmatter: {
      title: string;
      tags: string;
      cover: string;
      date: Date;
    };
  };
}
