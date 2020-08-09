import path from 'path';
import dayjs from 'dayjs';
import kebabCase from 'lodash.kebabcase';
import siteConfig from '../data/SiteConfig';

const hasOwnProperty = (object, property: string) => {
  return Object.prototype.hasOwnProperty.call(object, property);
};

const generateSlug = ({node, parsedFilePath}): string => {
  const hasSlug =
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node.frontmatter, 'slug');
  if (hasSlug) {
    return `/${kebabCase(node.frontmatter.slug)}`;
  }

  const hasTitle =
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node.frontmatter, 'title');
  if (hasTitle) {
    return `/${kebabCase(node.frontmatter.title)}`;
  }

  throw new Error('Failed to generate slug. Set slug in frontmatter on md.');
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
  const hasCreatedAt =
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node.frontmatter, 'createdAt');
  if (hasCreatedAt) {
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
  const hasUpdatedAt =
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node.frontmatter, 'updatedAt');
  if (hasUpdatedAt) {
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
