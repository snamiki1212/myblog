// > ts-node index.ts
import renameMD from './src/renameMD';
import replaceAssetsName from './src/replaceAssetsName';

const PATH_AS_CONTENTS = '../../contents';
renameMD(PATH_AS_CONTENTS);

// TODO: 1. file-name<xxx.img> -> 1.img, 2 md-text xxx.img -> 1.img
replaceAssetsName(PATH_AS_CONTENTS);

// TODO: assets の容量を見る
// TODO: 画像を小さくしてくれるやつを作る
