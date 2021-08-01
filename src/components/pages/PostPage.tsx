import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';

import {Layout} from '../organisms/Layout';
import {Image} from '../atoms/Image';
import {UpdatedAt, CreatedAt, AuthorCard} from '../molecules';
import {SocialLinks} from '../molecules/SocialLinks';
import {PostPageLayout} from '../organisms/PostPageLayout';
import {ArticleList} from '../organisms/ArticleList';
import {TagList, SEOMeta, Markdown} from '../atoms';
import {PostPageContext} from '../../../gatsby-node/types';
import config from '../../../data/SiteConfig';
import {MarkdownRemarkEdge, GatsbyImageData} from '../../types';
// import {fromHtmlToToc} from '../../transformer/htmlToToc';

type Props = {
  data: PostPageQuery;
  pageContext: PostPageContext;
};

export const PostPage: React.FC<Props> = ({data}) => {
  const postNode = data.markdownRemark;
  if (!postNode) {
    console.error('Cannot Find postNode');
    // TODO: エラーページに差し替える
    return <div>Error Page</div>;
  }

  const _slug = postNode.frontmatter.slug;
  const suggestions = data.allMarkdownRemark.edges;
  const post = postNode.frontmatter;
  // const tableOfContents = postNode.tableOfContents;
  // const toc = fromHtmlToToc(tableOfContents)

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${_slug}`} />
      </Helmet>

      <SEOMeta postNode={postNode} isPost={true} />

      <PostPageLayout
        header={<HeaderImg imgInfo={postNode.frontmatter.cover} />}
        date={
          <DateWrapper>
            <UpdatedAt date={postNode.frontmatter.updatedAt} />
            <CreatedAt date={postNode.frontmatter.createdAt} />
          </DateWrapper>
        }
        content={
          <MarkdownWrapper>
            <Markdown html={postNode.html} />
          </MarkdownWrapper>
        }
        meta={
          <div>
            <TagList tags={post.tags} />
            <SocialLinks postNode={postNode} />
          </div>
        }
        author={
          <AuthorCardWrapper>
            <AuthorCard />
          </AuthorCardWrapper>
        }
        suggestions={<ArticleList postEdges={suggestions} />}
      />
    </Layout>
  );
};

const AuthorCardWrapper = styled.div`
  padding: 50px;
`;

const MarkdownWrapper = styled.div`
  margin: 0 10px;
`;

const DateWrapper = styled.div`
  margin: 10px;
  align-self: flex-end;
`;

const HeaderImg = styled(Image)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 !important;
  height: 162px;
  width: 100%;
`;

type PostPageQuery = {
  allMarkdownRemark: AllMarkdownRemark;
  markdownRemark: MarkdownRemark;
};

export interface MarkdownRemark {
  html: string;
  htmlAst: any;
  tableOfContents: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    cover: {
      childImageSharp: {
        [key: string]: GatsbyImageData;
      };
      publicURL: string;
    };
    createdAt: Date;
    updatedAt: Date;
    category: string;
    tags: string[];
    slug: string;
  };
  fields: any;
}

interface AllMarkdownRemark {
  edges: MarkdownRemarkEdge[];
}

export const postPageQuery = graphql`
  query PostPageQuery($slug: String!, $suggestionNodeIDs: [String]) {
    allMarkdownRemark(filter: {id: {in: $suggestionNodeIDs}}) {
      edges {
        node {
          fields {
            _slug
            _createdAt
            _updatedAt
          }
          excerpt(truncate: true)
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
              extension
            }
            createdAt
            updatedAt
          }
        }
      }
    }
    markdownRemark(fields: {_slug: {eq: $slug}}) {
      html
      htmlAst
      tableOfContents
      timeToRead
      excerpt(truncate: true)
      frontmatter {
        title
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          extension
        }
        createdAt
        updatedAt
        category
        tags
        slug
      }
    }
  }
`;

export default PostPage;
