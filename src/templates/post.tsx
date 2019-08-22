import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout';
import {UserInfo} from '../components/molecules/';
import {
  TagList,
  SocialLinks,
  HeaderTitle,
  SEORaw,
  PostCoverRaw,
  Markdown,
} from '../components/atoms/';
import config from '../../data/SiteConfig';
import {PostPageContext} from '../../gatsby-node_';

export const PostTemplate = (
  props: {location: Location; data: PostPageQuery} & {
    pageContext: PostPageContext;
  }
): JSX.Element => {
  const {slug} = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  const coverHeight = 162;

  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <SPostPage>
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${slug}`} />
        </Helmet>

        <SEORaw postPath={slug} postNode={postNode} postSEO />
        <SPostCover postNode={postNode} coverHeight={coverHeight} />

        <SPostPagePaper>
          <SPostPageContent className="target-el">
            <Markdown htmlAst={postNode.htmlAst} />

            <SPostPageFooter>
              <TagList tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </SPostPageFooter>
          </SPostPageContent>
          <UserInfo config={config} />
        </SPostPagePaper>
      </SPostPage>
    </Layout>
  );
};

const SPostPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
  padding-top: 0px;
`;

const SPostPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SPostPagePaper = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 900px;

  img {
    max-width: 100%;
  }

  video {
    max-width: 100%;
  }
`;

const SPostPageFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SPostCover = styled(PostCoverRaw)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 !important;
`;

type PostPageQuery = {
  markdownRemark: MarkdownRemark;
};
export interface MarkdownRemark {
  html: string;
  htmlAst: any;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    cover: {
      childImageSharp: {
        fluid: {
          [key: string]: any; // GatsbyImageSharpFluid
        };
      };
    };
    date: Date;
    category: string;
    tags: string;
  };
  fields: any;
}

export const pageQuery = graphql`
  query PostPageQuery($slug: String!) {
    markdownRemark(fields: {_slug: {eq: $slug}}) {
      html
      htmlAst
      timeToRead
      excerpt(truncate: true)
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        category
        tags
      }
    }
  }
`;

export default PostTemplate;
