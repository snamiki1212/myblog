import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import config from '../../../data/SiteConfig';
import {CategoryPageContext} from '../../../gatsby-node_';
import Layout from '../organisms/Layout';
import Body from '../organisms/Body';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  pageContext: CategoryPageContext;
  data: {allMarkdownRemark: CategoryPageQuery};
};

export const CategoryTemplate: React.FC<Props> = ({pageContext, data}) => {
  const {category} = pageContext;
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | ${category}`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <Body postEdges={postEdges} context={pageContext} />
    </Layout>
  );
};

export const categoryPageQuery = graphql`
  query CategoryPageQuery($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____createdAt], order: DESC}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {category: {eq: $category}}}
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

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default CategoryTemplate;
