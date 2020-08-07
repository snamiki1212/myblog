import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../organisms/Layout';
import Image from '../atoms/Image';
import {UpdatedAt, AuthorCard} from '../molecules';
import {
  TagList,
  SocialLinks,
  SEOMeta,
  Markdown,
  ArticlesPreviewWrapper,
} from '../atoms';
import {ArticlePreviewCard, ArticlePreviewLine} from '../molecules';
import config from '../../../data/SiteConfig';
import {PostPageContext} from '../../../gatsby-node_';
// import {FluidObject} from 'gatsby-image';
import {MarkdownRemarkEdge} from '../../types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

type Props = {
  data: PostPageQuery;
  pageContext: PostPageContext;
};

export const PostTemplate: React.FC<Props> = ({data}) => {
  const postNode = data.markdownRemark;
  if (!postNode) return <span>cannot get page</span>;
  const _slug = postNode.frontmatter.slug;
  const suggestions = data.allMarkdownRemark.edges;
  const post = postNode.frontmatter;

  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));
  const Article = isSP ? ArticlePreviewLine : ArticlePreviewCard;

  return (
    <Layout>
      <SPostPage>
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${_slug}`} />
        </Helmet>
        <SEOMeta postNode={postNode} isPost={true} />

        <div style={{height: '10px'}} />
        {/* <HeaderImg imgInfo={postNode.frontmatter.cover} /> */}
        <SPostPagePaper>
          <SPostPageContent className="target-el">
            <div style={{paddingRight: '10px', paddingLeft: '10px'}}>
              <span style={{textAlign: 'right', paddingTop: '30px'}}>
                <UpdatedAt
                  date={postNode.frontmatter.updatedAt}
                  containerStyle={{justifyContent: 'flex-end'}}
                />
              </span>
              <Markdown htmlAst={postNode.htmlAst} />
            </div>
            <SPostPageFooter>
              <TagList tags={post.tags} />
              <SocialLinks postNode={postNode} />
            </SPostPageFooter>
          </SPostPageContent>
          <hr />
          <div style={{padding: '50px 0'}}>
            <AuthorCard />
          </div>
          <hr />
        </SPostPagePaper>
        <ArticlesPreviewWrapper
          style={{flexDirection: isSP ? 'column' : 'row'}}
        >
          {suggestions.map(edge => (
            <Article key={edge.node.frontmatter.title} postInfo={edge} />
          ))}
        </ArticlesPreviewWrapper>
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
  max-width: 700px;

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
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    cover: {
      // childImageSharp: {
      //   fluid: FluidObject;
      // };
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
            cover {
              publicURL
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
      timeToRead
      excerpt(truncate: true)
      frontmatter {
        title
        cover {
          publicURL
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

export default PostTemplate;
