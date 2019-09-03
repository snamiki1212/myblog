import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import {IndexPageContext} from '../../../gatsby-node_';
import {SEOMeta} from '../atoms';
import {Body, Layout} from '../../components/templates';
import {MarkdownRemarkEdge} from '../../types';

export const HomeTemplate = ({
  pageContext,
  data,
}: {
  pageContext: IndexPageContext;
  data: {allMarkdownRemark: IndexPageQuery};
}): JSX.Element => {
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

export default HomeTemplate;
