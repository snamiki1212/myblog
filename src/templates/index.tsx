import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {colors} from '../../data/color';
import config from '../../data/SiteConfig';
import {IndexPageContext} from '../../gatsby-node_';
import {HeaderTitle, Paginator, SEORaw} from '../components/atoms/';
import {AuthorCard, PostPreviewCardList} from '../components/molecules';
import Layout from '../layout';

export const Index = (
  props: {
    pageContext: IndexPageContext;
    location: Location;
  } & any
): JSX.Element => {
  const queryFetched = props.data.allMarkdownRemark as IndexPageQuery;
  const postEdges = queryFetched.edges;
  const pageContext = props.pageContext;

  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEORaw postEdges={postEdges} />

      <PageContainer>
        <ArticleArea>
          <PostPreviewCardList postEdges={postEdges} />
          <Paginator pageContext={pageContext} />
        </ArticleArea>
        <AsideArea>
          <AuthorCard />
        </AsideArea>
      </PageContainer>
    </Layout>
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

export default Index;

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____date], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            _slug
            _date
          }
          excerpt(truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            cover {
              publicURL
              childImageSharp {
                fluid {
                  base64
                }
              }
            }
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
      _slug: string;
      _date: Date;
    };
    excerpt: string;
    timeToRead: number;
    frontmatter: {
      title: string;
      tags: string;
      cover: {
        publicURL: string;
        childImageSharp: {
          fluid: {
            base64: string;
          };
        };
      };
      date: Date;
    };
  };
}
