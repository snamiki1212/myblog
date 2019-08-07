import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {SEORaw} from './index';

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

// TODO: StaticQuery を破棄したい
export const SEOWrapper = (props): JSX.Element => {
  const {postPath, postNode} = props;

  const render = (data): JSX.Element => {
    const postImgNode = data.allFile.edges
      .filter(edge => edge.node.childImageSharp)
      .find(
        (edge): any =>
          edge.node.childImageSharp.fixed.originalName ===
          postNode.frontmatter.cover
      ).node;

    return (
      <SEORaw
        postPath={postPath}
        postNode={postNode}
        postImgNode={postImgNode}
      />
    );
  };

  return <StaticQuery query={query} render={render} />;
};
