import {GatsbyCreatePages} from './types';
import path from 'path';
import _ from 'lodash';

// CONSTANTS
const postsPerPage = 10;
const postPage = path.resolve('src/templates/post.tsx');
const tagPage = path.resolve('src/templates/tag.tsx');
const categoryPage = path.resolve('src/templates/category.tsx');
const indexPage = path.resolve('src/templates/index.tsx');

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

        const numPages = Math.ceil(posts.length / postsPerPage);

        Array.from({length: numPages}).forEach((_, i): void => {
          const indexPageContext: IndexPageContext = {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          };

          createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: indexPage,
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
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });

        Array.from(tagSet).forEach((tag: string): void => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });

        Array.from(categorySet).forEach((category: string): void => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category,
            },
          });
        });
      })
    );
  });
};
