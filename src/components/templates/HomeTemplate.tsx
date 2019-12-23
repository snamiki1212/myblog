import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import {IndexPageContext} from '../../../gatsby-node_';
import {SEOMeta} from '../atoms';
import Layout from '../organisms/Layout';
import Body from '../organisms/Body';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  pageContext: IndexPageContext;
  data: {allMarkdownRemark: IndexPageQuery};
};

export const HomeTemplate: React.FC<Props> = ({pageContext, data}) => {
  const {allMarkdownRemark} = data;
  const postEdges = allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEOMeta postEdges={postEdges} />

      <Body postEdges={postEdges} context={pageContext} />
    </Layout>
  );
};

export const homePageQuery = graphql`
  query HomePageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____createdAt], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            _slug
            _createdAt
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
            createdAt
          }
        }
      }
    }
  }
`;

export interface IndexPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default HomeTemplate;
