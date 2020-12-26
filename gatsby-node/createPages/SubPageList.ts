import kebabCase from 'lodash.kebabcase';
import {
  TagPage,
  CategoryPage,
  TagSelectionPage,
  CategorySelectionPage,
  POSTS_PER_PAGE,
} from './constants';
import {getLastPaginationNum} from './utils';

import {SubPageProps, CategoryPageContext, TagPageContext} from '../types';

type CreatePagesArgs = {
  createPage: any;
  subPageContext: any;
};

class SubPageList {
  public type: 'category' | 'tag';
  public subPageList: SubPageProps[] = [];

  constructor(type: 'category' | 'tag') {
    this.type = type;
  }

  private getEachPath = (name: string): string => {
    switch (this.type) {
      case 'category':
        return `/categories/${kebabCase(name)}`;
      case 'tag':
        return `/tags/${kebabCase(name)}`;
    }
  };

  private getSelectionPageComponent = () => {
    switch (this.type) {
      case 'category':
        return CategorySelectionPage;
      case 'tag':
        return TagSelectionPage;
    }
  }

  private getSelectionPagePath = () => {
    switch (this.type) {
      case 'category':
        return 'categories';
      case 'tag':
        return 'tags';
    }
  }

  public createPage = ({createPage, subPageContext}: CreatePagesArgs) => {
    const component = this.getSelectionPageComponent()
    const path = this.getSelectionPagePath();
    const selectionPageContext = {...subPageContext};
    createPage({
      path,
      component,
      context: selectionPageContext,
    });
  };

  public createPages = (params: CreatePagesArgs) => {
    switch (this.type) {
      case 'category': {
        return this.createCategoryPages(params);
      }
      case 'tag': {
        return this.createTagPages(params);
      }
    }
  };

  private createTagPages = ({createPage, subPageContext}: CreatePagesArgs) => {
    this.subPageList.forEach((subPage) => {
      const lastCategoryPage = getLastPaginationNum(
        subPage.count,
        POSTS_PER_PAGE
      );
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
    });
  };

  private createCategoryPages = ({
    createPage,
    subPageContext,
  }: CreatePagesArgs) => {
    this.subPageList.forEach((subPage) => {
      const lastCategoryPage = getLastPaginationNum(
        subPage.count,
        POSTS_PER_PAGE
      );

      Array.from({length: lastCategoryPage}).forEach((_x, idx) => {
        const context: CategoryPageContext = {
          // Pagination
          limit: POSTS_PER_PAGE,
          skip: idx * POSTS_PER_PAGE,
          lastPage: lastCategoryPage,
          currentPage: idx + 1,
          // SubPageContext
          ...subPageContext,
          //
          category: subPage.name,
        };

        createPage({
          path: `${subPage.path}/${idx === 0 ? '' : idx + 1}`,
          component: CategoryPage,
          context: context,
        });
      });
    });
  };

  public incrementOrAddPage = (name: string): void => {
    if (!name) return;
    const path = this.getEachPath(name);
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

export const makeSubPageList = ({allPosts}: {allPosts: any[]}) => {
  const {categories, tags} = allPosts.reduce<{
    categories: SubPageList;
    tags: SubPageList;
  }>(
    ({categories, tags}, edge) => {
      const {tags: edgeTags, category: edgeCategory} = edge.node.frontmatter;

      // tags
      edgeTags.forEach((tag: string): void => {
        tags.incrementOrAddPage(tag);
      });

      // category
      categories.incrementOrAddPage(edgeCategory);

      return {categories, tags};
    },
    {
      categories: new SubPageList('category'),
      tags: new SubPageList('tag'),
    }
  );

  return {categories, tags};
};
