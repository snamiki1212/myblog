import {GatsbyCreatePages} from './types';
import path from 'path';
import _ from 'lodash';

// CONSTANTS
const POSTS_PERT_PAGE = 10;
const PostPage = path.resolve('src/templates/post.tsx');
const TagPage = path.resolve('src/templates/tag.tsx');
const CategoryPage = path.resolve('src/templates/category.tsx');
const IndexPage = path.resolve('src/templates/index.tsx');

// TYPE
export interface IndexPageContext {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
}

interface AllMarkdownRemark {
  edges: MarkdownRemarkEdge[];
}

interface MarkdownRemarkEdge {
  node: {
    frontmatter: {
      tags: string[];
      category: string;
    };
    fields: {
      slug: string;
    };
  };
}

// readme: https://www.gatsbyjs.org/docs/node-apis/#createPages
export const createPages: any = async ({graphql, actions}): Promise<any> => {
  const {createPage} = actions;

  return new Promise((resolve, reject): any => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                    category
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then((result): any => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.error(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set<string>();
        const categorySet = new Set<string>();
        const allMarkdownRemark = result.data
          .allMarkdownRemark as AllMarkdownRemark;
        const posts = allMarkdownRemark.edges;

        const numPages = Math.ceil(posts.length / POSTS_PERT_PAGE);

        Array.from({length: numPages}).forEach((_, i): void => {
          const indexPageContext: IndexPageContext = {
            limit: POSTS_PERT_PAGE,
            skip: i * POSTS_PERT_PAGE,
            numPages,
            currentPage: i + 1,
          };

          createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: IndexPage,
            context: indexPageContext,
          });
        });

        posts.forEach((edge): void => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach((tag: string): void => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          createPage({
            path: edge.node.fields.slug,
            component: PostPage,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });

        Array.from(tagSet).forEach((tag: string): void => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: TagPage,
            context: {
              tag,
            },
          });
        });

        Array.from(categorySet).forEach((category: string): void => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: CategoryPage,
            context: {
              category,
            },
          });
        });
      })
    );
  });
};
