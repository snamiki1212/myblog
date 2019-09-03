import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../../layout';
import config from '../../../data/SiteConfig';
import {FluidObject} from 'gatsby-image';
import {TagPageContext} from '../../../gatsby-node_';
import {Body} from './Body';

export const TagTemplate = ({
  pageContext,
  data,
}: {
  pageContext: TagPageContext;
  data: {allMarkdownRemark: TagPageQuery};
}): JSX.Element => {
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

export const pageQuery = graphql`
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

export default TagTemplate;
