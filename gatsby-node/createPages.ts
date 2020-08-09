import path from 'path';
import kebabCase from 'lodash.kebabcase';
import {
  SubPageProps,
  SubPageContext,
  CategoryPageContext,
  TagPageContext,
  IndexPageContext,
  PostPageContext,
} from './types';

const POSTS_PER_PAGE = 50;
const POSTS_AS_SUGGESTION = 10;
const templatesDir = 'src/components/templates';
const PostPage = path.resolve(`${templatesDir}/PostTemplate.tsx`);
const TagPage = path.resolve(`${templatesDir}/TagTemplate.tsx`);
const CategoryPage = path.resolve(`${templatesDir}/CategoryTemplate.tsx`);
const IndexPage = path.resolve(`${templatesDir}/HomeTemplate.tsx`);

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
      (subPage) => subPage.name === name
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
      allPosts.forEach((edge) => {
        const category = edge.node.frontmatter.category;

        const suggestions: typeof allPosts = fetchRandoms(
          allPosts.filter(
            (post) =>
              post.node.frontmatter.category === category &&
              post.node.id !== edge.node.id
          ),
          POSTS_AS_SUGGESTION
        );
        const suggestionNodeIDs = suggestions.map(
          (suggestion) => suggestion.node.id
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
