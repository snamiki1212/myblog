/**
 * このファイルはTypeScript化できない
 * なので、TypeScriptでの実体を require して、gatsby-nodeのts 化を実現してる
 * (README: https://github.com/gatsbyjs/gatsby/issues/1457)
 */
require('source-map-support').install();

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

// import
const {createPages, onCreateNode} = require('./gatsby-node/index'); // eslint-disable-line @typescript-eslint/no-var-requires

// exports
exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
