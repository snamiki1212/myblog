// https://qiita.com/yousan/items/9668c7ebbc8514d4d9cb
// https://qiita.com/_shimizu/items/f08eaacdbcdce0204e36
// https://qiita.com/rooooomania/items/4c999d93ae745e9d8657
import * as fs from 'fs';
import glob from 'glob';

export const renameMD = (contentsPath: string): any => {
  // 配下のmd ファイルのパスを取得
  glob(`${contentsPath}/**/*.md`, (err, matches) => {
    if (err) throw err;

    matches.map(match => {
      // ファイル名を変更
      const pathList = match.split('/');
      const lastIndex = pathList.length - 1;
      pathList[lastIndex] = 'index.md';
      const newPath = pathList.join('/');

      // 実行
      console.log(`old: ${match}, new:${newPath}`);
      fs.rename(match, newPath, err => {
        if (err) throw err;
        console.log(`RENAME. old: ${match}, new: ${newPath}`);
      });
    });
  });
};

export default renameMD;
