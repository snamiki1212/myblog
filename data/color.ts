// color palette: https://colorhunt.co/palette/138663 # これを採用
const BLACK = '#233142';
const LIGHT_GRAY = '#f3f3f3';
const DARK_GRAY = '#666666';
const BLUE = '#4f9da6';
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
  gray1: LIGHT_GRAY,
  gray2: DARK_GRAY,
  white1: WHITE,

  // color
  vivid1: RED,
  vivid2: BLUE,
  base1: BLACK,

  // Misc
  hLeft: BLUE,
  fontMark1: LIGHT_YELLOW,
  listBackgroundColor: LIGHT_GRAY,
};

export default {
  ...colors,
};
