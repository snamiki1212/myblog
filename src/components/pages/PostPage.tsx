import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';

import {Layout} from '../templates/Layout';
import {Image} from '../atoms/Image';
import {UpdatedAt, CreatedAt, AuthorCard} from '../molecules';
import {SocialLinks} from '../molecules/SocialLinks';
import {PostPageLayout} from '../templates/PostPageLayout';
import {ArticleList} from '../organisms/ArticleList';
import {TagList, SEOMeta, Markdown} from '../atoms';
import {PostPageContext} from '../../../gatsby-node/types';
import config from '../../../data/SiteConfig';
import {MarkdownRemarkEdge, GatsbyImageData} from '../../types';
import {fromHtmlToToc} from '../../transformer/htmlToToc';

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
  const tocComponent = fromHtmlToToc(postNode.tableOfContents);

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${_slug}`} />
      </Helmet>

      <SEOMeta postNode={postNode} isPost={true} />

      <PostPageLayout
        header={
          <HeaderWrapper>
            <Header imgInfo={postNode.frontmatter.cover} />
          </HeaderWrapper>
        }
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
        toc={tocComponent}
        author={<AuthorCard />}
        suggestions={<ArticleList postEdges={suggestions} />}
      />
    </Layout>
  );
};

const MarkdownWrapper = styled.div`
  margin: 0 10px;
`;

const DateWrapper = styled.div`
  margin: 10px;
  align-self: flex-end;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  /* background: ${(props) => props.theme.color.primaryVivid}; */
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.color.link},
    ${(props) => props.theme.color.link}4D,
    ${(props) => props.theme.color.link}
  );
`;

const Header = styled(Image)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 !important;
  height: 162px;
  width: 100%;
  margin: 0 auto;
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
