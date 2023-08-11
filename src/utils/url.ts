/**
 * Category
 */
export const toCategoryIndexUrl = (name: string) => `/categories/${name}` as const;
export const toCategoryListUrl = () => `/categories` as const;

/**
 * Tag
 */
export const toTagIndexUrl = (name: string) => `/tags/${name}` as const;
export const toTagListUrl = () => `/tags` as const;

/**
 * Post
 */
export const toPostListUrl = (page: number) => `/${page}` as const;

export const toPostUrl = (slug: string) => `/${slug}` as const;

/**
 * Home
 */
export const toHomeUrl = () => "/" as const;
