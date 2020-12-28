import {colors} from '../data/color';

export const theme= {
  color: {
    primaryVivid: colors.primaryVivid,
    white: colors.white,
    baseLight: colors.baseLight,
    baseDark: colors.baseDark,
  },
  layout: {},
  fontFamily: {
    primary: `-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif`
  },
} as const;