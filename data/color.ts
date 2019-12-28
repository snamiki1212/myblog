// color parelle
// * 032 Sharpeye Eagle: https://webgradients.com/

// NOTE: layout.scss も更新する。

// monoton
const BLACK = '#3e3a5e';
const GRAY_LIGHT = '#f3f3f3';
const GRAY_DARK = '#666666';
const WHITE = '#fffcf2';

// colors
const PURPLE_LIGHT = '#9386ef';
const GREEN_LIGHT = '#b1f4cf';
const YELLOW_LIGHT = '#ffeaa5';

export const colors = {
  primary: BLACK,
  secondary: PURPLE_LIGHT,

  // mono-tone
  black1: BLACK,
  grayLight: GRAY_LIGHT,
  grayDark: GRAY_DARK,
  white1: WHITE,

  // color
  vivid1: PURPLE_LIGHT,
  vivid2: GREEN_LIGHT,
  vivid3: YELLOW_LIGHT,

  // base
  base1: BLACK,

  // Misc
  hLeft: GREEN_LIGHT,
  fontMark1: YELLOW_LIGHT,
};

export default {
  ...colors,
};
