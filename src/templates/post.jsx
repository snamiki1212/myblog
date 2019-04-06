import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import UserInCard from "../components/UserInCard";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import PostCover from "../components/PostCover";
import SocialLinks from "../components/SocialLinks";
import PostSuggestions from "../components/PostSuggestions";
import HeaderTitle from "../components/HeaderTitle";
import SEOWrapper from "../components/SEOWrapper";
import config from "../../data/SiteConfig";
import "./post.scss";

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile } = this.state;
    const { slug } = this.props.pageContext;
    const expanded = !mobile;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    const coverHeight = mobile ? 180 : 350;
    return (
      <Layout location={this.props.location} title={<HeaderTitle />}>
        <div className="post-page md-grid md-grid--no-spacing">
          <Helmet>
            <title>{`${post.title}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
          </Helmet>
          <SEOWrapper postPath={slug} postNode={postNode} postSEO />
          {/* <SEO postPath={slug} postNode={postNode} postSEO /> */}
          <PostCover
            postNode={postNode}
            coverHeight={coverHeight}
            coverClassName="md-grid md-cell--9 post-cover"
          />
          <div className="md-grid md-cell--9 post-page-contents mobile-fix">
            <CardTitle title="" subtitle="" className="md-grid md-cell md-cell--12 post">
              <CardText className="post-body target-el">
                <UserInCard config={config} postNode={postNode} />
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </CardText>
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={this.state.mobile}
                />
              </div>
            </CardTitle>
            <UserInfo
              className="md-grid md-cell md-cell--12"
              config={config}
              expanded={expanded}
            />
            <Disqus postNode={postNode} expanded={expanded} />
          </div>
          <PostSuggestions postNode={postNode} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
