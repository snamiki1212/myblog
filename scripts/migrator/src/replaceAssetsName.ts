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
  glob(`${contentsPath}/**/*.+(jpg|jpeg|png|gif)`, (err, allAssetsPathList) => {
    if (err) throw err;

    // assetsPathList[0].slice(0,-1)
    // console.log('assetsPathList[0]', assetsPathList[0]);
    const contentsDirList = Array.from(
      new Set(
        allAssetsPathList.map((assetsPath) =>
          assetsPath.split('/').slice(0, -1).join('/')
        )
      )
    );
    console.log('contentsDirList', contentsDirList);
    contentsDirList.forEach((contentDir) => {
      // assetsファイルパスを絞込
      const assetsPathList = allAssetsPathList.filter((assetsPath) => {
        const re = new RegExp(contentDir);
        // console.log('assetsPath', assetsPath);
        return assetsPath.match(re);
      });
      if (assetsPathList.length <= 0) {
        console.log('[skip]contentDir', contentDir);
        return;
      }

      // mdファイル名を取得
      const markdownPath = [contentDir, 'index.md'].join('/'); // ある前提のディレクトリ構成。

      // REPLACE: md の中身のフアイル名を。
      fs.readFile(markdownPath, 'utf8', (err, markdown) => {
        if (err) throw err;

        const infoList = assetsPathList.map((oldAssetPath) => {
          // 定義
          const oldFileName = oldAssetPath.split('/').slice(-1).join('/');
          const newFileName =
            oldFileName.split('_').slice(-1).pop() || 'failed-file-name'; // 201912031234_1.jpg >> 1.jpg
          const newAssetPath = [contentDir, newFileName].join('/');

          return {oldAssetPath, newAssetPath, oldFileName, newFileName};
        });

        // md の内容の更新用のデータ整理
        const {
          md: newMarkdown,
          failedList: failedFileNameList,
        }: {md: string; failedList: string[]} = infoList.reduce(
          (acc, {oldFileName, newFileName}): any => {
            const re = new RegExp(oldFileName, 'g');
            const existsTarget = markdown.search(re) >= 0;

            return existsTarget
              ? {...acc, md: acc.md.replace(re, newFileName)}
              : {...acc, failedList: [...acc.failedList, oldFileName]};
          },
          {md: markdown, failedList: []}
        );

        // console.log('match>', match)
        // console.log('>markdownPath:', markdownPath);
        fs.writeFile(markdownPath, newMarkdown, () => {});

        // REPLACE: assetsファイル名
        infoList.forEach(({oldAssetPath, newAssetPath, oldFileName}) => {
          failedFileNameList.includes(oldFileName)
            ? console.log('[skip]not to rename asset file', oldAssetPath)
            : fs.rename(oldAssetPath, newAssetPath, (err) => {
                if (err) throw err;
                console.log(
                  `[rename]. old: ${oldAssetPath}, new: ${newAssetPath}`
                );
              });
        });
      });
    });
  });
};

export default replaceAssetsName;
