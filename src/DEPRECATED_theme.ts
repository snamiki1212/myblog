import {createMuiTheme} from '@material-ui/core/styles';
import {colors} from '../data/color';

// Theme: https://material-ui.com/customization/theming/#theme-configuration-variables
// Color: https://material-ui.com/customization/color/
// Color-tool: https://material-ui.com/customization/color/#color-tool
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.DEPRECATED_primary,
    },
    secondary: {
      main: colors.DEPRECATED_secondary,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});
