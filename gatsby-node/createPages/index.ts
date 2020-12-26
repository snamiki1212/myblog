import {SubPageContext, IndexPageContext, PostPageContext} from '../types';
import {fetchRandoms, getLastPaginationNum} from './utils';
import {SubPageList} from './SubPageList';
import {
  POSTS_PER_PAGE,
  POSTS_AS_SUGGESTION,
  PostPage,
  IndexPage,
} from './constants';

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

const createPostPages = ({allPosts, createPage, subPageContext}) => {
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

const createIndexPages = ({createPage, subPageContext, length}) => {
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

const makeSubPageList = ({allPosts}: {allPosts: any[]}) => {
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

export const createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  return (async () => {
    try {
      const result = await graphql(allMarkdownRemarkGraphQL);

      // GraphQL data
      const data = result.data as AllMarkdownRemarkResult;
      const {allMarkdownRemark} = data;
      const {edges: allPosts} = allMarkdownRemark;

      // build
      const lastPostPage = getLastPaginationNum(allPosts.length, POSTS_PER_PAGE);
      const {categories, tags} = makeSubPageList({allPosts});
      const subPageContext: SubPageContext = {
        categories: categories.subPageList,
        tags: tags.subPageList,
      };

      // create Pages
      categories.createPages({createPage, subPageContext});
      tags.createPages({createPage, subPageContext});
      createIndexPages({createPage, subPageContext, length: lastPostPage});
      createPostPages({createPage, subPageContext, allPosts});

      return;
    } catch (errors) {
      /* eslint no-console: "off" */
      console.log('-----------------------');
      console.error(errors);
      throw errors;
    }
  })();
};
