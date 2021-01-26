import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import config from '../../../data/SiteConfig';
import {CategoryPageContext} from '../../../gatsby-node/types';
import {Layout} from '../organisms/Layout';
import {ArticleList} from '../organisms/ArticleList';
import {Subtitle} from '../atoms/Subtitle';
import {MarkdownRemarkEdge} from '../../types';
import {AuthorCard} from '../molecules';
import {ArticleListLayout} from '../organisms/ArticleListLayout';
import {Paginator} from '../atoms';

type Props = {
  pageContext: CategoryPageContext;
  data: {allMarkdownRemark: CategoryPageQuery};
};

export const CategoryPage: React.FC<Props> = ({pageContext, data}) => {
  const {category} = pageContext;
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | ${category}`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <main>
        <ArticleListLayout
          articleListHeader={<Subtitle>{category}</Subtitle>}
          articles={<ArticleList postEdges={postEdges} />}
          pagination={<Paginator context={pageContext} />}
          profile={<AuthorCard />}
        />
      </main>
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
            _updatedAt
          }
          excerpt(truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            category
            cover {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              extension
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default CategoryPage;
