import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import config from '../../../data/SiteConfig';
import {TagPageContext} from '../../../gatsby-node_';
import {Body, Layout} from '../../components/templates';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  pageContext: TagPageContext;
  data: {allMarkdownRemark: TagPageQuery};
};
export const TagTemplate: React.FC<Props> = ({pageContext, data}) => {
  const {tag} = pageContext;
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | ${tag}`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <Body postEdges={postEdges} context={pageContext} />
    </Layout>
  );
};

export const tagPageQuery = graphql`
  query TagPageQuery($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____date], order: DESC}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {tags: {in: [$tag]}}}
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

export interface TagPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default TagTemplate;
