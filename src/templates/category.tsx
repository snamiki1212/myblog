import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import {PostPreviewCardList} from '../components/molecules';
import Layout from '../layout';
import {HeaderTitle} from '../components/atoms/';
import config from '../../data/SiteConfig';

export const CategoryTemplate = (props: any): JSX.Element => {
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
        <PostPreviewCardList postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [fields____date], order: DESC}
      filter: {frontmatter: {category: {eq: $category}}}
    ) {
      totalCount
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

export default CategoryTemplate;
