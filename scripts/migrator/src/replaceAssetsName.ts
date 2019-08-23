/**
 *
 * ファイル名をリネームして、markdownのリンクも変更
 * FROM: 201904021930_cover.jpg / 201904021930_1.jpg
 * TO: cover.jpg / 1.jpg
 *
 */

import * as fs from 'fs';

import glob from 'glob';

export const replaceAssetsName = (contentsPath: string): any => {
  // 配下のmd ファイルのパスを取得
  glob(`${contentsPath}/**/*.+(jpg|jpeg|png|gif)`, (err, assetsPathList) => {
    if (err) throw err;

    assetsPathList.map(assetPath => {
      console.log('---');
      // assetsファイル名を取得
      const pathList = assetPath.split('/');
      const lastIndex = pathList.length - 1;
      const fileName = pathList[lastIndex];

      // mdファイル名を取得
      const md_path = [...pathList.slice(0, -1), 'index.md'].join('/');

      // 変数上にて、assetsファイル名の変更
      const [, newFileName] = fileName.split('_'); // prefix は破棄
      pathList[lastIndex] = newFileName;
      const newAssetPath = pathList.join('/');

      // REPLACE: md の中身のフアイル名を。
      fs.readFile(md_path, 'utf8', (err, markdown) => {
        if (err) throw err;

        const re = new RegExp(fileName, 'g');
        const existsTarget = markdown.search(re) >= 0;

        if (!existsTarget) return console.log('skip', fileName);
        const newMarkwodn = markdown.replace(re, newFileName);
        // console.log('markdown>', markdown)
        // console.log('match>', match)
        // console.log('newMarkwodn>', newMarkwodn)
        fs.writeFileSync(md_path, newMarkwodn);

        // REPLACE: assetsファイル名
        fs.rename(assetPath, newAssetPath, err => {
          if (err) throw err;
          console.log(`RENAME. old: ${assetPath}, new: ${newAssetPath}`);
        });

        console.log(`old: ${fileName}, new: ${newFileName}`);
      });
    });
  });
};

export default replaceAssetsName;
