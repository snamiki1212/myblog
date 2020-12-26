import path from 'path';

// values
export const POSTS_PER_PAGE = 50;
export const POSTS_AS_SUGGESTION = 10;

// components
const templatesDir = 'src/components/templates';
export const PostPage = path.resolve(`${templatesDir}/PostTemplate.tsx`);
export const IndexPage = path.resolve(`${templatesDir}/HomeTemplate.tsx`);
export const TagPage = path.resolve(`${templatesDir}/TagTemplate.tsx`);
export const CategoryPage = path.resolve(`${templatesDir}/CategoryTemplate.tsx`);
