// color palette: https://colorhunt.co/palette/138663 # これを採用
const BLACK = '#233142';
const GRAY_LIGHT = '#f3f3f3';
const GRAY_DARK = '#666666';
const BLUE = '#4f9da6';
// const BLUE_LIGHT = '#9ac7cc';
// const YELLOW = '#facf5a';
const LIGHT_YELLOW = '#fdeec2';
const RED = '#ff5959';
const WHITE = '#ffffff';

// NOTE: layout.scss も更新する。

export const colors = {
  primary: BLACK,
  secondary: BLUE,

  // mono-tone
  black1: BLACK,
  grayLight: GRAY_LIGHT,
  grayDark: GRAY_DARK,
  white1: WHITE,

  // color
  vivid1: RED,
  vivid2: BLUE,
  // vivid2Light: BLUE_LIGHT,
  base1: BLACK,

  // Misc
  hLeft: BLUE,
  fontMark1: LIGHT_YELLOW,
};

export default {
  ...colors,
};
