import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import CardText from 'react-md/lib/Cards/CardText';
import styled from 'styled-components';
import Layout from '../layout';
import {UserInfo} from '../components/molecules/';
import {
  TagList,
  SocialLinks,
  HeaderTitle,
  SEOWrapper,
  PostCoverWrapper,
} from '../components/atoms/';
import config from '../../data/SiteConfig';
import './post.scss';

export const PostTemplate = (props: any): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const resize = () => setIsMobile(window.innerWidth >= 640 ? false : true);

  useEffect((): any => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const {slug} = props.pageContext as {slug: string};
  const expanded = !isMobile;
  const postNode = props.data.markdownRemark as MarkdownRemark;
  const post = postNode.frontmatter;
  const coverHeight = isMobile ? 162 : 225;

  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <div className="post-page md-grid md-grid--no-spacing">
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${slug}`} />
        </Helmet>

        <SEOWrapper postPath={slug} postNode={postNode} postSEO />
        <StyledPostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName="md-grid md-cell--9"
        />
        <div className="md-grid md-cell--7 post-page-contents">
          <div className="md-grid md-cell md-cell--12 post">
            <CardText className="post-body target-el">
              <div dangerouslySetInnerHTML={{__html: postNode.html}} />
            </CardText>
            <div className="post-meta">
              <TagList tags={post.tags} />
              <SocialLinks
                postPath={slug}
                postNode={postNode}
                mobile={isMobile}
              />
            </div>
          </div>
          <UserInfo
            className="md-grid md-cell md-cell--12"
            config={config}
            expanded={expanded}
          />
        </div>
      </div>
    </Layout>
  );
};

const StyledPostCover = styled(PostCoverWrapper)`
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
