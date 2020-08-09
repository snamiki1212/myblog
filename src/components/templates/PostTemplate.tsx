import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';
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

import {PostPageContext} from '../../../gatsby-node/';

import config from '../../../data/SiteConfig';
import {MarkdownRemarkEdge} from '../../types';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

type Props = {
  data: PostPageQuery;
  pageContext: PostPageContext;
};

export const PostTemplate: React.FC<Props> = ({data}) => {
  const postNode = data.markdownRemark;
  if (!postNode) {
    console.error('Cannot Find postNode');
    // TODO: エラーページに差し替える
    return <div>Error Page</div>;
  }

  const _slug = postNode.frontmatter.slug;
  const suggestions = data.allMarkdownRemark.edges;
  const post = postNode.frontmatter;

  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));
  const ArticleComponent = isSP ? ArticlePreviewLine : ArticlePreviewCard;

  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{`${post.title}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${_slug}`} />
        </Helmet>

        <SEOMeta postNode={postNode} isPost={true} />

        <HeaderImg imgInfo={postNode.frontmatter.cover} />

        <ItemContainer>
          <UpdatedAtContainer>
            <UpdatedAt date={postNode.frontmatter.updatedAt} />
          </UpdatedAtContainer>
        </ItemContainer>

        <ItemContainer>
          <Markdown htmlAst={postNode.htmlAst} />
        </ItemContainer>

        <ItemContainer>
          <TagList tags={post.tags} />
          <SocialLinks postNode={postNode} />
        </ItemContainer>

        <ItemContainer>
          <AuthorCardContainer>
            <AuthorCard />
          </AuthorCardContainer>
        </ItemContainer>

        <ArticlesPreviewWrapper
          style={{flexDirection: isSP ? 'column' : 'row'}}
        >
          {suggestions.map((edge) => (
            <ArticleComponent
              key={edge.node.frontmatter.title}
              postInfo={edge}
            />
          ))}
        </ArticlesPreviewWrapper>
      </Container>
    </Layout>
  );
};

const AuthorCardContainer = styled.div`
  padding: 50px;
  border: 1px solid lightgray;
`;

const UpdatedAtContainer = styled.div`
  margin: 10px;
  align-self: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 700px;
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
      childImageSharp: {
        fluid: FluidObject;
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
    markdownRemark(fields: {_slug: {eq: $slug}}) {
      html
      htmlAst
      timeToRead
      excerpt(truncate: true)
      frontmatter {
        title
        cover {
          publicURL
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
              originalImg
            }
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

export default PostTemplate;
