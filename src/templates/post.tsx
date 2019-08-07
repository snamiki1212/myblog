import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import CardText from 'react-md/lib/Cards/CardText';
import styled from 'styled-components';
import Layout from '../layout';
import UserInfo from '../deprecatedComponents/UserInfo';
import PostTags from '../deprecatedComponents/PostTags';
import PostCover from '../deprecatedComponents/PostCover';
import SocialLinks from '../deprecatedComponents/SocialLinks';
import PostSuggestions from '../deprecatedComponents/PostSuggestions';
import HeaderTitle from '../deprecatedComponents/HeaderTitle';
import SEOWrapper from '../deprecatedComponents/SEOWrapper';
import config from '../../data/SiteConfig';
import './post.scss';

export const PostTemplate = (props): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const resize = () => setIsMobile(window.innerWidth >= 640 ? false : true);

  useEffect((): any => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const {slug} = props.pageContext;
  const expanded = !isMobile;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }
  const coverHeight = isMobile ? 180 : 350;

  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <div className="post-page md-grid md-grid--no-spacing">
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
        </Helmet>

        <SEOWrapper postPath={slug} postNode={postNode} postSEO />
        {/* <SEO postPath={slug} postNode={postNode} postSEO /> */}
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
              <PostTags tags={post.tags} />
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
        <PostSuggestions postNode={postNode} />
      </div>
    </Layout>
  );
};

const StyledPostCover = styled(PostCover)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 !important;
`;

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
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;

export default PostTemplate;
