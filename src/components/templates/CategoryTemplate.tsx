import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';
import {CategoryPageContext} from '../../../gatsby-node_';
import Layout from '../organisms/Layout';
import ArticleListContainer from '../organisms/ArticleListContainer';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  pageContext: CategoryPageContext;
  data: {allMarkdownRemark: CategoryPageQuery};
};

const CAREER = 'Career';
const WORLD = 'World';
const TECH = 'Tech';
const LOCAL_GUIDE = 'LOCAL_GUIDE';
type CATEGORIES =
  | typeof CAREER
  | typeof WORLD
  | typeof TECH
  | typeof LOCAL_GUIDE;

const descriptionMap: {[id: CATEGORIES]: {description: string}} = {
  [CAREER]: {
    description: `技術者としてのキャリアを考える。`,
  },
  [WORLD]: {
    description: '世界で生きていくための記事。',
  },
  [TECH]: {
    description: 'いろいろな技術の記事。',
  },
  [LOCAL_GUIDE]: {
    description: 'GoogleMapへ貢献していくLOCAL_GUIDEの記事。',
  },
};

export const CategoryTemplate: React.FC<Props> = ({pageContext, data}) => {
  const {category} = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const description = (descriptionMap[category] || {}).description;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | ${category}`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <ArticleListContainer
        postEdges={postEdges}
        context={pageContext}
        description={
          <div style={{paddingTop: '30px', paddingLeft: '50px'}}>
            <div>▶{category}</div>
            <span style={{color: colors.fontGray1}}>{description}</span>
          </div>
        }
      />
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

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default CategoryTemplate;
