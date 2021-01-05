import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import config from '../../../data/SiteConfig';
import {TagPageContext} from '../../../gatsby-node/types';
import Layout from '../organisms/Layout';
import {ArticleList} from '../organisms/ArticleList';
import {Subtitle} from '../atoms/Subtitle';
import {MarkdownRemarkEdge} from '../../types';
import {AuthorCard} from '../molecules';
import {BaseArticlePageLayout} from '../organisms/BaseArticlePageLayout';
import {Paginator} from '../atoms';

type Props = {
  pageContext: TagPageContext;
  data: {allMarkdownRemark: TagPageQuery};
};
export const TagTemplate: React.FC<Props> = ({pageContext, data}) => {
  const {tag} = pageContext;
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | ${tag}`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <BaseArticlePageLayout
        articleHeader={<Subtitle>{tag}</Subtitle>}
        articles={<ArticleList postEdges={postEdges} />}
        pagination={<Paginator context={pageContext} />}
        profile={<AuthorCard />}
      />
    </Layout>
  );
};

export const tagPageQuery = graphql`
  query TagPageQuery($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____createdAt], order: DESC}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {tags: {in: [$tag]}}}
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
                  ...GatsbyImageSharpFluid
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

export interface TagPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default TagTemplate;
