import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import {IndexPageContext} from '../../gatsby-node_';
import {HeaderTitle, SEOMeta} from '../components/atoms/';
import {Body} from './body';
import Layout from '../layout';
import {FluidObject} from 'gatsby-image';

export const Index = ({
  pageContext,
  location,
  data,
}: {
  pageContext: IndexPageContext;
  location: Location;
  data: {allMarkdownRemark: IndexPageQuery};
}): JSX.Element => {
  const {allMarkdownRemark} = data;
  const postEdges = allMarkdownRemark.edges;

  return (
    <Layout location={location} title={<HeaderTitle />}>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEOMeta postEdges={postEdges} />

      <Body postEdges={postEdges} context={pageContext} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPageQuery($skip: Int!, $limit: Int!) {
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
                  ...GatsbyImageSharpFluid
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
          fluid: FluidObject;
        };
      };
      date: Date;
    };
  };
}

export default Index;
