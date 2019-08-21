import path from 'path';
import _ from 'lodash';
import moment from 'moment';
import siteConfig from './data/SiteConfig';

// -----------------------------------------------------------------------
// CONSTANTS
const POSTS_PERT_PAGE = 10;
const PostPage = path.resolve('src/templates/post.tsx');
const TagPage = path.resolve('src/templates/tag.tsx');
const CategoryPage = path.resolve('src/templates/category.tsx');
const IndexPage = path.resolve('src/templates/index.tsx');

// -----------------------------------------------------------------------
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

/********************************************************************
 * graphql
 * TODO: https://github.com/gatsbyjs/gatsby/issues/14185#issuecomment-512492800 が使えるかためす。
 *
 *
 */
type AllMarkdownRemarkResult = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          tags: string[];
          category: string;
        };
        fields: {
          slug: string; // TODO: 消して、他のslug を使いたい
        };
      };
    }[];
  };
};

const allMarkdownRemarkGraphQL = `
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
`;

// --------------------------------------------------------------
// helper / private
const generateSlug = ({node, parsedFilePath}): string => {
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
  ) {
    return `/${_.kebabCase(node.frontmatter.slug)}`;
  } else if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
  ) {
    return `/${_.kebabCase(node.frontmatter.title)}`;
  } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
    return `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  } else if (parsedFilePath.dir === '') {
    return `/${parsedFilePath.name}/`;
  } else {
    return `/${parsedFilePath.dir}/`;
  }
};

// -----------------------------------------------------------------------
// gatsby-node (readme: https://www.gatsbyjs.org/docs/node-apis/#createPages)
export const createPages: any = async ({graphql, actions}): Promise<any> => {
  const {createPage} = actions;

  return (async (): Promise<any> => {
    try {
      const result = await graphql(allMarkdownRemarkGraphQL);

      // GraphQLのデータ
      const data = result.data as AllMarkdownRemarkResult;
      const {allMarkdownRemark} = data;
      const {edges: posts} = allMarkdownRemark;

      const numPages = Math.ceil(posts.length / POSTS_PERT_PAGE);

      // post の index/pagination のページ
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

      // tag/category の一覧の格納用の変数
      const tagSet = new Set<string>();
      const categorySet = new Set<string>();

      // Post ページの作成 & tag/category の一覧の作成
      posts.forEach((edge): void => {
        if (edge.node.frontmatter.tags) {
          edge.node.frontmatter.tags.forEach((tag: string): void => {
            tagSet.add(tag);
          });
        }

        if (edge.node.frontmatter.category) {
          categorySet.add(edge.node.frontmatter.category);
        }

        // Postページの作成
        createPage({
          path: edge.node.fields.slug,
          component: PostPage,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });

      // TagPage の作成
      Array.from(tagSet).forEach((tag: string): void => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: TagPage,
          context: {
            tag,
          },
        });
      });

      // CategoriesPage の作成
      Array.from(categorySet).forEach((category: string): void => {
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: CategoryPage,
          context: {
            category,
          },
        });
      });
    } catch (errors) {
      /* eslint no-console: "off" */
      console.error(errors);
      throw errors;
    }
  })();
};

// TODO: 必要なさそうなので、できる限りなくしたい。
export const onCreateNode = (postNodes: any): any => ({
  node,
  actions,
  getNode,
}): void => {
  if (node.internal.type !== 'MarkdownRemark') return;

  const {createNodeField} = actions;

  const fileNode = getNode(node.parent);
  const parsedFilePath = path.parse(fileNode.relativePath);
  const slug = generateSlug({node, parsedFilePath});

  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')
  ) {
    const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
    if (!date.isValid) {
      console.warn(`WARNING: Invalid date.`, node.frontmatter); // eslint-disable-line
    }

    createNodeField({
      node,
      name: 'date',
      value: date.toISOString(),
    });
  }

  createNodeField({node, name: 'slug', value: slug});
  postNodes.push(node);
};
