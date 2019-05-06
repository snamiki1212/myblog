import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import SEO from '../SEO';

class SEOWrapper extends React.Component {
  render() {
    const {postPath, postNode} = this.props;
    return (
      <StaticQuery
        query={query}
        render={data => {
          const postImgNode = data.allFile.edges
            .filter(edge => edge.node.childImageSharp)
            .find(
              edge =>
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
  }
}

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
