import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import {Layout} from '../../components/templates';
import Img from 'gatsby-image';
import {UserInfo} from '../molecules';
import {TagList, SocialLinks, SEOMeta, Markdown} from '../atoms';
import {PostPreviewCard} from '../molecules';
import config from '../../../data/SiteConfig';
import {PostPageContext} from '../../../gatsby-node_';
import {FluidObject} from 'gatsby-image';
import {PostPreviewCardContaienr} from './Body';
import {MarkdownRemarkEdge} from '../../types';

export const PostTemplate = (
  props: {data: PostPageQuery} & {
    pageContext: PostPageContext;
  }
): JSX.Element => {
  const postNode = props.data.markdownRemark;
  const slug = postNode.frontmatter.slug;
  const suggestions = props.data.allMarkdownRemark.edges;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <SPostPage>
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${slug}`} />
        </Helmet>
        <SEOMeta postNode={postNode} isPost={true} />

        <HeaderImg fluid={postNode.frontmatter.cover.childImageSharp.fluid} />
        <SPostPagePaper>
          <SPostPageContent className="target-el">
            <Markdown htmlAst={postNode.htmlAst} />

            <SPostPageFooter>
              <TagList tags={post.tags} />
              <SocialLinks postNode={postNode} />
            </SPostPageFooter>
          </SPostPageContent>
          <UserInfo config={config} />
        </SPostPagePaper>
        <PostPreviewCardContaienr>
          {suggestions.map(edge => (
            <PostPreviewCard
              key={edge.node.frontmatter.title}
              postInfo={edge}
            />
            // TODO: PostPreviewCard の　postInfo の型をIndex / post で使えるように共通化したい。
          ))}
        </PostPreviewCardContaienr>
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

const HeaderImg = styled(Img)`
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
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    date: Date;
    category: string;
    tags: string;
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
            _date
          }
          excerpt(truncate: true)
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
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
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        category
        tags
        slug
      }
    }
  }
`;

export default PostTemplate;