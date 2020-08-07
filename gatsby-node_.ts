import path from 'path';
import kebabCase from 'lodash.kebabcase';
import dayjs from 'dayjs';
import siteConfig from './data/SiteConfig';

/****************************************************************
 * CONSTANTS
 ***************************************************************/
const POSTS_PER_PAGE = 50;
const POSTS_AS_SUGGESTION = 10;
const templatesDir = 'src/components/templates';
const PostPage = path.resolve(`${templatesDir}/PostTemplate.tsx`);
const TagPage = path.resolve(`${templatesDir}/TagTemplate.tsx`);
const CategoryPage = path.resolve(`${templatesDir}/CategoryTemplate.tsx`);
const IndexPage = path.resolve(`${templatesDir}/HomeTemplate.tsx`);

/****************************************************************
 * TYPE
 ***************************************************************/
export type PaginationContext = {
  limit: number;
  skip: number;
  lastPage: number;
  currentPage: number;
};

export type SubPageContext = {
  categories: SubPageProps[];
  tags: SubPageProps[];
};

export type IndexPageContext = SubPageContext & PaginationContext;

export type CategoryPageContext = SubPageContext &
  PaginationContext & {
    category: string;
  };

export type TagPageContext = SubPageContext &
  PaginationContext & {
    tag: string;
  };

export type PostPageContext = {
  slug: string;
  suggestionNodeIDs: string[];
} & SubPageContext;

// entity
type SubPageProps = {
  // category / tags
  name: string;
  count: number;
  path: string;
};

/****************************************************************
 * Class
 ***************************************************************/
class SubPageList {
  constructor(type: 'category' | 'tag') {
    this.type = type;
  }
  type: 'category' | 'tag';
  subPageList: SubPageProps[] = [];

  private generatePath = (name: string): string => {
    switch (this.type) {
      case 'category':
        return `/categories/${kebabCase(name)}`;
      case 'tag':
        return `/tags/${kebabCase(name)}`;
      default:
        throw new Error('unexpected type error');
    }
  };

  public incrementOrAddPage = (name: string): void => {
    if (!name) return;
    const path = this.generatePath(name);
    const maybeIndex = this.subPageList.findIndex(
      subPage => subPage.name === name
    );
    const exist = maybeIndex !== -1;

    if (exist) {
      // INCREMENT: 既存の項目
      this.subPageList[maybeIndex] = {
        ...this.subPageList[maybeIndex],
        count: ++this.subPageList[maybeIndex].count,
        path,
      };
    } else {
      // ADD: 新しく項目を追加
      this.subPageList = [...this.subPageList, {name, count: 1, path}];
    }
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
        id: string;
        frontmatter: {
          id: string;
          tags: string[];
          category: string;
        };
        fields: {
          _slug: string; // TODO: 消して、他のslug を使いたい
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
        id
        frontmatter {
          tags
          category
        }
        fields {
          _slug
        }
      }
    }
  }
}
`;

/****************************************************************
 * private helper
 ***************************************************************/
const generateSlug = ({node, parsedFilePath}): string => {
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
  ) {
    return `/${kebabCase(node.frontmatter.slug)}`;
  } else if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
  ) {
    return `/${kebabCase(node.frontmatter.title)}`;
  } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
    return `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  } else if (parsedFilePath.dir === '') {
    return `/${parsedFilePath.name}/`;
  } else {
    return `/${parsedFilePath.dir}/`;
  }
};

const fetchRandoms = (arr: any[], n = 1): any => {
  // readme: https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);

  if (n > len) return arr;
  while (n--) {
    const x = Math.floor(Math.random() * len); // random index
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

// Pagination によるページ数の、最終ページ数を取得
const calcPaginationNum = (pageLength: number): number =>
  Math.ceil(pageLength / POSTS_PER_PAGE);

/****************************************************************
 * gatsby-node (readme: https://www.gatsbyjs.org/docs/node-apis/#createPages)
 ***************************************************************/
export const createPages = async ({graphql, actions}): Promise<any> => {
  const {createPage} = actions;

  return (async () => {
    try {
      const result = await graphql(allMarkdownRemarkGraphQL);

      // GraphQLのデータ
      const data = result.data as AllMarkdownRemarkResult;
      const {allMarkdownRemark} = data;
      const {edges: allPosts} = allMarkdownRemark;

      const lastPostPage = calcPaginationNum(allPosts.length);

      // tag/category の一覧データを作成
      const {
        _categories: categories,
        _tags: tags,
      }: {_categories: SubPageList; _tags: SubPageList} = allPosts.reduce(
        ({_categories, _tags}, edge) => {
          const {
            tags: edgeTags,
            category: edgeCategory,
          } = edge.node.frontmatter;

          // tags
          edgeTags.forEach((tag: string): void => {
            _tags.incrementOrAddPage(tag);
          });

          // category
          _categories.incrementOrAddPage(edgeCategory);

          return {_categories, _tags};
        },
        {
          _categories: new SubPageList('category'),
          _tags: new SubPageList('tag'),
        }
      );

      const subPageContext: SubPageContext = {
        categories: categories.subPageList,
        tags: tags.subPageList,
      };

      // Category のページ生成
      categories.subPageList.forEach(
        // Categoryごとにループ
        (subPage): void => {
          const lastCategoryPage = calcPaginationNum(subPage.count);
          Array.from({length: lastCategoryPage}).forEach((_x, i) => {
            // Paginationごとにループ
            const categoryPageContext: CategoryPageContext = {
              // Pagination
              limit: POSTS_PER_PAGE,
              skip: i * POSTS_PER_PAGE,
              lastPage: lastCategoryPage,
              currentPage: i + 1,
              // SubPageContext
              ...subPageContext,
              //
              category: subPage.name,
            };

            createPage({
              path: `${subPage.path}/${i === 0 ? '' : i + 1}`,
              component: CategoryPage,
              context: categoryPageContext,
            });
          });
        }
      );

      // Tag のページ生成
      tags.subPageList.forEach(
        // Categoryごとにループ
        (subPage): void => {
          const lastCategoryPage = calcPaginationNum(subPage.count);
          Array.from({length: lastCategoryPage}).forEach((_x, i) => {
            // Paginationごとにループ
            const tagPageContext: TagPageContext = {
              // Pagination Context
              limit: POSTS_PER_PAGE,
              skip: i * POSTS_PER_PAGE,
              lastPage: lastCategoryPage,
              currentPage: i + 1,
              // SubPageContext
              ...subPageContext,
              //
              tag: subPage.name,
            };

            createPage({
              path: `${subPage.path}/${i === 0 ? '' : i + 1}`,
              component: TagPage,
              context: tagPageContext,
            });
          });
        }
      );

      // Post の index/pagination のページ生成
      Array.from({length: lastPostPage}).forEach((_, i): void => {
        const indexPageContext: IndexPageContext = {
          // Pagination Context
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          lastPage: lastPostPage,
          currentPage: i + 1,
          // SubPage Context
          ...subPageContext,
          // etc
        };

        createPage({
          path: i === 0 ? '/' : `/${i + 1}`,
          component: IndexPage,
          context: indexPageContext,
        });
      });

      // Postページの作成
      allPosts.forEach(edge => {
        const category = edge.node.frontmatter.category;

        const suggestions: typeof allPosts = fetchRandoms(
          allPosts.filter(
            post =>
              post.node.frontmatter.category === category &&
              post.node.id !== edge.node.id
          ),
          POSTS_AS_SUGGESTION
        );
        const suggestionNodeIDs = suggestions.map(
          suggestion => suggestion.node.id
        );

        const postPageCtx: PostPageContext = {
          // SubPageContext
          ...subPageContext,
          // etc
          slug: edge.node.fields._slug,
          suggestionNodeIDs,
        };

        createPage({
          path: edge.node.fields._slug,
          component: PostPage,
          context: postPageCtx,
        });
      });
    } catch (errors) {
      /* eslint no-console: "off" */
      console.log('-----------------------');
      console.error(errors);
      throw errors;
    }
  })();
};

// GraphQL で取得できるリソース上に、オレオレの値を定義する ( edges > node > fields の中にこの値が入る)
// オレオレで作成したフィールド名は特に検索で当たりやすいように、プレフィックス(underbar) をつける。
export const onCreateNode = ({node, actions, getNode}): void => {
  if (node.internal.type !== 'MarkdownRemark') return;
  const {createNodeField} = actions;

  const fileNode = getNode(node.parent);
  const parsedFilePath = path.parse(fileNode.relativePath);
  const slug = generateSlug({node, parsedFilePath});

  // add createdAt
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'createdAt')
  ) {
    const createdAt = dayjs(
      node.frontmatter.createdAt,
      siteConfig.dateFromFormat
    );
    if (!createdAt.isValid) {
      console.warn(`WARNING: Invalid createdAt.`, node.frontmatter); // eslint-disable-line
    }

    createNodeField({
      node,
      name: '_createdAt',
      value: createdAt.toISOString(),
    });
  }

  // add updatedAt
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'updatedAt')
  ) {
    const updatedAt = dayjs(
      node.frontmatter.updatedAt,
      siteConfig.dateFromFormat
    );
    if (!updatedAt.isValid) {
      console.warn(`WARNING: Invalid updatedAt.`, node.frontmatter); // eslint-disable-line
    }

    createNodeField({
      node,
      name: '_updatedAt',
      value: updatedAt.toISOString(),
    });
  }

  createNodeField({node, name: '_slug', value: slug});
};
