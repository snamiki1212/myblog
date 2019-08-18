import {createMuiTheme} from '@material-ui/core/styles';
import {colors} from '../data/color';

// Theme: https://material-ui.com/customization/theming/#theme-configuration-variables
// Color: https://material-ui.com/customization/color/
// Color-tool: https://material-ui.com/customization/color/#color-tool
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
});
