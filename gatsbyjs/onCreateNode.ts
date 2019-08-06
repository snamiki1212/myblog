import path from 'path';
import moment from 'moment';
import siteConfig from '../data/SiteConfig';
import _ from 'lodash';

const generateSlug = ({node, parsedFilePath}): string => {
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
  ) {
    return `/${_.kebabCase(node.frontmatter.title)}`;
  } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
    return `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  } else if (parsedFilePath.dir === '') {
    return `/${parsedFilePath.name}/`;
  } else if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
  ) {
    return `/${_.kebabCase(node.frontmatter.slug)}`;
  } else {
    return `/${parsedFilePath.dir}/`;
  }
};

export const onCreateNode = (postNodes: any): any => ({
  node,
  actions,
  getNode,
}): void => {
  if (node.internal.type !== 'MarkdownRemark') return;

  const {createNodeField} = actions;

  const fileNode = getNode(node.parent);
  const parsedFilePath = path.parse(fileNode.relativePath);
  const slug = generateSlug({node, parsedFilePath});

  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')
  ) {
    const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
    if (!date.isValid) {
      console.warn(`WARNING: Invalid date.`, node.frontmatter); // eslint-disable-line
    }

    createNodeField({
      node,
      name: 'date',
      value: date.toISOString(),
    });
  }

  createNodeField({node, name: 'slug', value: slug});
  postNodes.push(node);
};
