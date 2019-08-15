('use strict');

// readme: https://github.com/gatsbyjs/gatsby/issues/1457
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

let postNodes = []; // mutable

// createPages
const {createPages} = require('./gatsbyjs/createPages');
exports.createPages = createPages;

// onCreateNode
const {onCreateNode} = require('./gatsbyjs/onCreateNode');
exports.onCreateNode = onCreateNode(postNodes);

// setFieldsOnGraphQLNodeType
const {addSiblingNodes} = require('./gatsbyjs/helper');
const {
  setFieldsOnGraphQLNodeType,
} = require('./gatsbyjs/setFieldsOnGraphQLNodeType');
exports.setFieldsOnGraphQLNodeType = setFieldsOnGraphQLNodeType(
  addSiblingNodes(postNodes)
);
