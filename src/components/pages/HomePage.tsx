import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import {IndexPageContext} from '../../../gatsby-node/types';
import {SEOMeta} from '../atoms';
import {Layout} from '../templates/Layout';
import {ArticleList} from '../organisms/ArticleList';
import {MarkdownRemarkEdge} from '../../types';
// import Img from 'gatsby-image';
import {AuthorCard} from '../molecules';
import {ArticleListLayout} from '../templates/ArticleListLayout';
import {Paginator} from '../atoms';

type Props = {
  pageContext: IndexPageContext;
  data: {
    allMarkdownRemark: IndexPageQuery;
    // allFile: FeaturedImg;
  };
};

export const HomePage: React.FC<Props> = ({pageContext, data}) => {
  const {
    allMarkdownRemark,
    // allFile
  } = data;

  const postEdges = allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEOMeta postEdges={postEdges} />

      <main>
        <ArticleListLayout
          articles={<ArticleList postEdges={postEdges} />}
          pagination={<Paginator context={pageContext} />}
          profile={<AuthorCard />}
        />
      </main>
    </Layout>
  );
};

// const featuredImgPath = 'logos/logo.png';
export const homePageQuery = graphql`
  query HomePageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____createdAt], order: DESC}
      limit: $limit
      skip: $skip
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
                gatsbyImageData(
                  layout: FIXED
                  aspectRatio: 1.0
                  width: 150
                  placeholder: BLURRED
                )
              }
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

export interface IndexPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default HomePage;
