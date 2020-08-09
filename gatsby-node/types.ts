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

export type SubPageProps = {
  name: string;
  count: number;
  path: string;
};
