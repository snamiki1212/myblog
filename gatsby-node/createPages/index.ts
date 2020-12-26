import {SubPageContext} from '../types';
import {getLastPaginationNum} from './utils';
import {createIndexPages, createPostPages} from './pageCreater';
import {makeSubPageList} from './SubPageList';
import {POSTS_PER_PAGE} from './constants';

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
      const {categories, tags} = makeSubPageList({allPosts});
      const subPageContext: SubPageContext = {
        categories: categories.subPageList,
        tags: tags.subPageList,
      };
      const lastPostPage = getLastPaginationNum(
        allPosts.length,
        POSTS_PER_PAGE
      );

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
