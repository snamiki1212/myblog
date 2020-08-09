import path from 'path';
import dayjs from 'dayjs';
import kebabCase from 'lodash.kebabcase';
import siteConfig from '../data/SiteConfig';

const generateSlug = ({node, parsedFilePath}): string => {
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
  ) {
    return `/${kebabCase(node.frontmatter.slug)}`;
  } else if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
  ) {
    return `/${kebabCase(node.frontmatter.title)}`;
  } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
    return `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  } else if (parsedFilePath.dir === '') {
    return `/${parsedFilePath.name}/`;
  } else {
    return `/${parsedFilePath.dir}/`;
  }
};

/**
 * GraphQL で取得できるリソース上に、オレオレの値を定義する
 * ( edges > node > fields の中にこの値が入る)
 * オレオレで作成したフィールド名は特に検索で当たりやすいように、プレフィックス(underbar) をつける。
 */
export const onCreateNode = ({node, actions, getNode}): void => {
  if (node.internal.type !== 'MarkdownRemark') return;
  const {createNodeField} = actions;

  const fileNode = getNode(node.parent);
  const parsedFilePath = path.parse(fileNode.relativePath);
  const slug = generateSlug({node, parsedFilePath});

  // add createdAt
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'createdAt')
  ) {
    const createdAt = dayjs(
      node.frontmatter.createdAt,
      siteConfig.dateFromFormat
    );
    if (!createdAt.isValid) {
      console.warn(`WARNING: Invalid createdAt.`, node.frontmatter); // eslint-disable-line
    }

    createNodeField({
      node,
      name: '_createdAt',
      value: createdAt.toISOString(),
    });
  }

  // add updatedAt
  if (
    Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    Object.prototype.hasOwnProperty.call(node.frontmatter, 'updatedAt')
  ) {
    const updatedAt = dayjs(
      node.frontmatter.updatedAt,
      siteConfig.dateFromFormat
    );
    if (!updatedAt.isValid) {
      console.warn(`WARNING: Invalid updatedAt.`, node.frontmatter); // eslint-disable-line
    }

    createNodeField({
      node,
      name: '_updatedAt',
      value: updatedAt.toISOString(),
    });
  }

  createNodeField({node, name: '_slug', value: slug});
};
