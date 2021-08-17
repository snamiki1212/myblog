export const addTargetBlank = (naiveHtml: string) =>
  naiveHtml.replace(/href/g, `rel="noopener noreferrer" target="_blank" href`);
