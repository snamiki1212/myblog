import {IndexPageContext, PostPageContext} from '../types';
import {fetchRandoms} from './utils';
import {
  POSTS_PER_PAGE,
  POSTS_AS_SUGGESTION,
  PostPage,
  IndexPage,
} from './constants';

export const createIndexPages = ({createPage, subPageContext, length}) => {
  Array.from({length}).forEach((_, idx): void => {
    const indexPageContext: IndexPageContext = {
      // Pagination Context
      limit: POSTS_PER_PAGE,
      skip: idx * POSTS_PER_PAGE,
      lastPage: length,
      currentPage: idx + 1,
      // SubPage Context
      ...subPageContext,
      // etc
    };

    createPage({
      path: idx === 0 ? '/' : `/${idx + 1}`,
      component: IndexPage,
      context: indexPageContext,
    });
  });
};

export const createPostPages = ({allPosts, createPage, subPageContext}) => {
  allPosts.forEach((edge) => {
    const category = edge.node.frontmatter.category;

    const allSuggestions = allPosts.filter(
      (post) =>
        post.node.frontmatter.category === category &&
        post.node.id !== edge.node.id
    );

    const selectedSuggestions: typeof allPosts = fetchRandoms(
      allSuggestions,
      POSTS_AS_SUGGESTION
    );

    const suggestionNodeIDs = selectedSuggestions.map(
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
};
