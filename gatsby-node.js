// このファイル自体をts で実装できないので、ts を require して、gatsby-nodeのts 化を実現。
// readme: https://github.com/gatsbyjs/gatsby/issues/1457
//
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

// import
const {createPages, onCreateNode} = require('./gatsby-node_');

// execute
const postNodes = []; // mutable
exports.onCreateNode = onCreateNode(postNodes);
exports.createPages = createPages;
