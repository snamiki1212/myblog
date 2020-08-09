import dayjs from 'dayjs';
import kebabCase from 'lodash.kebabcase';
import siteConfig from '../data/SiteConfig';

const hasOwnProperty = (object, property: string) => {
  return Object.prototype.hasOwnProperty.call(object, property);
};

const generateSlug = ({node}): string => {
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
export const onCreateNode = ({node, actions}): void => {
  if (node.internal.type !== 'MarkdownRemark') return;

  const {createNodeField} = actions;
  const slug = generateSlug({node});
  const dateFromFormat = siteConfig.dateFromFormat;

  // Validation
  const hasCreatedAt =
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node.frontmatter, 'createdAt');
  const hasUpdatedAt =
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node.frontmatter, 'updatedAt');
  if (!hasCreatedAt) {
    throw new Error(`Cannot find createdAt. ${node.frontmatter}`);
  }
  if (!hasUpdatedAt) {
    throw new Error(`Cannot find updatedAt. ${node.frontmatter}`);
  }

  // Add createdAt
  const createdAt = dayjs(node.frontmatter.createdAt, dateFromFormat);
  if (!createdAt.isValid) {
      console.warn(`Invalid createdAt.`, node.frontmatter); // eslint-disable-line
  }
  createNodeField({
    node,
    name: '_createdAt',
    value: createdAt.toISOString(),
  });

  // Add updatedAt
  const updatedAt = dayjs(node.frontmatter.updatedAt, dateFromFormat);
  if (!updatedAt.isValid) {
    console.warn(`Invalid updatedAt.`, node.frontmatter); // eslint-disable-line
  }
  createNodeField({
    node,
    name: '_updatedAt',
    value: updatedAt.toISOString(),
  });

  createNodeField({node, name: '_slug', value: slug});
};
