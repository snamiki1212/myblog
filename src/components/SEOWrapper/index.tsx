import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import SEO from '../SEO';

const SEOWrapper = (props): JSX.Element => {
  const {postPath, postNode} = props;
  return (
    <StaticQuery
      query={query}
      render={(data): JSX.Element => {
        const postImgNode = data.allFile.edges
          .filter(edge => edge.node.childImageSharp)
          .find(
            (edge): any =>
              edge.node.childImageSharp.fixed.originalName ===
              postNode.frontmatter.cover
          ).node;
        return (
          <SEO
            postPath={postPath}
            postNode={postNode}
            postSEO
            postImgNode={postImgNode}
          />
        );
      }}
    />
  );
};

export default SEOWrapper;

const query = graphql`
  query IndexAllFiles {
    allFile {
      edges {
        node {
          childImageSharp {
            fixed {
              originalName
            }
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
