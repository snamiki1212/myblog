import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import PostListing from '../components/PostListing';
import Layout from '../layout';
import HeaderTitle from '../components/HeaderTitle';
import config from '../../data/SiteConfig';

export const CategoryTemplate = props => {
  const {category} = props.pageContext;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <div className="category-container">
        <Helmet>
          <title>
            {`Posts in category "${category}" | ${config.siteTitle}`}
          </title>
          <link
            rel="canonical"
            href={`${config.siteUrl}/categories/${category}`}
          />
        </Helmet>
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [fields___date], order: DESC}
      filter: {frontmatter: {category: {eq: $category}}}
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

export default CategoryTemplate;
