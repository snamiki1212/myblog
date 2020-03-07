// このファイル自体をts で実装できないので、ts を require して、gatsby-nodeのts 化を実現。(readme: https://github.com/gatsbyjs/gatsby/issues/1457)
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

// import
const {createPages, onCreateNode} = require('./gatsby-node_');

// exports
exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
