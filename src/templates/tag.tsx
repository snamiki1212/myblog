import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../layout';
import {PostPreviewCardList} from '../components/molecules/';
import {HeaderTitle} from '../components/atoms';
import config from '../../data/SiteConfig';

export const TagTemplate = (props): JSX.Element => {
  const {tag} = props.pageContext;
  const postEdges = props.data.allMarkdownRemark.edges;

  return (
    <Layout
      location={props.location}
      title={<HeaderTitle />}
      // title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
    >
      <div className="tag-container">
        <Helmet>
          <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
        </Helmet>
        <PostPreviewCardList postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [fields___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                fluid {
                  base64
                  originalName
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

export default TagTemplate;
