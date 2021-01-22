import path from 'path';

// values
export const POSTS_PER_PAGE = 4 * 2;
export const POSTS_AS_SUGGESTION = 4 * 2;

// components
const dir = 'src/components/pages';
export const PostPage = path.resolve(`${dir}/PostPage.tsx`);
export const IndexPage = path.resolve(`${dir}/HomePage.tsx`);
export const TagPage = path.resolve(`${dir}/TagPage.tsx`);
export const CategoryPage = path.resolve(`${dir}/CategoryPage.tsx`);
export const TagSelectionPage = path.resolve(`${dir}/TagSelectionPage.tsx`);
export const CategorySelectionPage = path.resolve(
  `${dir}/CategorySelectionPage.tsx`
);
