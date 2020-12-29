import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import {IndexPageContext} from '../../../gatsby-node/types';
import {SEOMeta} from '../atoms';
import Layout from '../organisms/Layout';
import {ArticleList} from '../organisms/ArticleList';
import {MarkdownRemarkEdge} from '../../types';
// import Img from 'gatsby-image';
import {AuthorCard} from '../molecules';
import {BaseArticlePageLayout} from '../organisms/BaseArticlePageLayout';
import {Paginator} from '../atoms';

type Props = {
  pageContext: IndexPageContext;
  data: {
    allMarkdownRemark: IndexPageQuery;
    // allFile: FeaturedImg;
  };
};

export const HomeTemplate: React.FC<Props> = ({pageContext, data}) => {
  const {
    allMarkdownRemark,
    // allFile
  } = data;

  const postEdges = allMarkdownRemark.edges;
  // const childImageSharp = allFile.edges[0].node.childImageSharp;

  return (
    <Layout>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEOMeta postEdges={postEdges} />

      {/* <Img fluid={childImageSharp.fluid} style={{maxHeight: '300px'}} /> */}
      <div>
        <BaseArticlePageLayout
          articles={<ArticleList postEdges={postEdges} />}
          pagination={<Paginator context={pageContext} />}
          profile={<AuthorCard />}
        />
      </div>
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
            cover {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
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

// allFile(filter: {relativePath: {in: "logos/logo.png"}}) {
//   edges {
//     node {
//       childImageSharp {
//         fluid {
//           base64
// aspectRatio
// src
// srcSet
// sizes
// originalImg
//         }
//       }
//     }
//   }
// }

export interface IndexPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default HomeTemplate;
