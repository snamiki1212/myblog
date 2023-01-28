export const toCategoryIndexUrl = (name: string): string => `/categories/${name}`;
export const toCategoryListUrl = (): string => `/categories`;

export const toTagIndexUrl = (name: string): string => `/tags/${name}`;
export const toTagListUrl = (): string => `/tags`;

export const toPostListUrl = (page: number): string => `/${page}`;