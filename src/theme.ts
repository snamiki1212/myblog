import {color} from '../data/color';

export const theme = {
  color,
  layout: {
    marginVertical: 20,
    autherAvatorSizeNum: 74,
    articleCardLogoSize: 48,
  },
  fontFamily: {
    primary: `-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif`,
    logoEn: `Philosopher,Candara,Calibri,Segoe,Segoe UI`, // NOTE: Philosopher is webfont so use only English Characters.
  },
  fontSize: {
    tmp_1: 24,
    tmp_2: 12,
    tmp_3: 54,
  },
} as const;
