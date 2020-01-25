export const isInternalPageLink = (url: string): boolean =>
  !/(^http)|\.(jpg|jpeg|gif|png|svg)$/.test(url);

export const isAffiLink = (url: string): boolean => /^\/\//.test(url);
