import {colors} from '../data/color';

export const theme = {
  color: {
    primaryVivid: colors.primaryVivid,
    link: colors.link,
    white: colors.white,
    baseLight: colors.baseLight,
    baseDark: colors.baseDark,
  },
  layout: {
    marginVertical: 20,
    autherAvatorSizeNum: 60,
    articleCardLogoSize: 48,
  },
  fontFamily: {
    primary: `-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif`,
  },
  fontSize: {
    tmp_1: 24,
    tmp_2: 12,
    tmp_3: 54,
  },
} as const;
