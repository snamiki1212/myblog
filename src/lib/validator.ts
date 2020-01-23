export const isInternalPageLink = (url: string): boolean =>
  !/(^http)|\.(jpg|jpeg|gif|png|svg)$/.test(url);
