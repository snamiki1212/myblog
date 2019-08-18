import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout';
import {UserInfo} from '../components/molecules/';
import {
  TagList,
  SocialLinks,
  HeaderTitle,
  SEOWrapper,
  PostCoverWrapper,
  Markdown,
} from '../components/atoms/';
import config from '../../data/SiteConfig';

export const PostTemplate = (props: any): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const resize = () => setIsMobile(window.innerWidth >= 640 ? false : true);

  useEffect((): any => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const {slug} = props.pageContext as {slug: string};
  const postNode = props.data.markdownRemark as MarkdownRemark;
  const post = postNode.frontmatter;
  const coverHeight = isMobile ? 162 : 225;

  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <SPostPage>
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${slug}`} />
        </Helmet>

        <SEOWrapper postPath={slug} postNode={postNode} postSEO />
        <SPostCover postNode={postNode} coverHeight={coverHeight} />

        <SPostPagePaper>
          <SPostPageContent className="target-el">
            <Markdown html={postNode.html} />

            <SPostPageFooter>
              <TagList tags={post.tags} />
              <SocialLinks
                postPath={slug}
                postNode={postNode}
                mobile={isMobile}
              />
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

const SPostCover = styled(PostCoverWrapper)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 !important;
`;

export interface MarkdownRemark {
  html: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    cover: string;
    date: Date;
    category: string;
    tags: string;
  };
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
      excerpt(truncate: true)
      frontmatter {
        title
        cover
        date
        category
        tags
      }
    }
  }
`;

export default PostTemplate;
