import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import HeaderTitle from '../components/HeaderTitle';
import config from '../../data/SiteConfig';

export const TagTemplate = props => {
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
        <PostListing postEdges={postEdges} />
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
            cover
            date
          }
        }
      }
    }
  }
`;

export default TagTemplate;
