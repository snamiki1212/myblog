import React from 'react';
import Helmet from 'react-helmet';
import {Navigation} from '../molecules';
import config from '../../../data/SiteConfig';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from '../../theme';
import './layout.scss';

export const Layout: React.FC = ({children}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <meta
          name="google-site-verification"
          content={config.siteGSCTrackingID}
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <Navigation>
          <div>
            <div style={{height: `55px`}} /> {/* Navigation の高さの分の空間 */}
            {children}
          </div>

          <footer>{config.copyright}</footer>
        </Navigation>
      </ThemeProvider>
    </>
  );
};

export default Layout;
