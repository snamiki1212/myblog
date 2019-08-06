export const setFieldsOnGraphQLNodeType = (addSiblingNodes: any): any => ({
  type,
  actions,
}: any): void => {
  const {name} = type;
  const {createNodeField} = actions;

  if (name === 'MarkdownRemark') {
    addSiblingNodes(createNodeField);
  }
};
