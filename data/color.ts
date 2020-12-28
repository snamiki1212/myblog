// color parelle
// * 032 Sharpeye Eagle: https://webgradients.com/

// NOTE: layout.scss も更新する。

// monoton
const BLACK = '#3e3a5e';
const GRAY_LIGHT = '#f3f3f3';
const GRAY_DARK = '#808080';
const WHITE = '#fffcf2';

// colors
const PURPLE_LIGHT = '#9386ef';
const GREEN_LIGHT = '#b1f4cf';
const YELLOW_LIGHT = '#ffeaa5';

export const colors = {
  primaryVivid: '#ECC100',
  white: '#FFFFFF',
  baseLight: '#ECF2F8',
  baseDark: '#1C324A',

  // NOTE: DEPRECATED
  DEPRECATED_primary: BLACK,
  DEPRECATED_secondary: PURPLE_LIGHT,
  DEPRECATED_black1: BLACK,
  DEPRECATED_grayLight: GRAY_LIGHT,
  DEPRECATED_grayMiddle: 'gray',
  DEPRECATED_grayDark: GRAY_DARK,
  DEPRECATED_white1: WHITE,
  DEPRECATED_vivid1: PURPLE_LIGHT,
  DEPRECATED_vivid2: GREEN_LIGHT,
  DEPRECATED_vivid3: YELLOW_LIGHT,
  DEPRECATED_base1: BLACK,
  DEPRECATED_hLeft: PURPLE_LIGHT,
  DEPRECATED_fontMark1: YELLOW_LIGHT,
} as const;

export default {
  ...colors,
};
