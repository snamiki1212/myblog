import {theme} from './theme';
// README: https://qiita.com/Takepepe/items/eec6e1d2101570e7e241

type AppTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {
    //
  }
}

// declare module '*.jpg' {
//   const value: string;
//   export default value;
// }

declare function require(string): string;
