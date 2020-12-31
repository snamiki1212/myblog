// color parelle
// * 032 Sharpeye Eagle: https://webgradients.com/

// NOTE: layout.scss も更新する。

// monoton
const BLACK = '#3e3a5e';
const GRAY_LIGHT = '#f3f3f3';
const GRAY_DARK = ;
const WHITE = '#fffcf2';

// colors
const PURPLE_LIGHT = '#9386ef';
const GREEN_LIGHT = '#b1f4cf';
const YELLOW_LIGHT = '#ffeaa5';

export const colors = {
  primaryVivid: '#ECC100',
  link: '#477FB9',
  white: '#FFFFFF',
  grayDark: '#808080',
  baseLight: '#ECF2F8',
  baseDark: '#1C324A',

  // NOTE: DEPRECATED
  DEPRECATED_primary: BLACK,
  DEPRECATED_secondary: PURPLE_LIGHT,
} as const;

export default {
  ...colors,
};
