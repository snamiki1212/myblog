import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {ThemeProvider} from '@material-ui/styles';

import {Navigation} from '../molecules';

import config from '../../../data/SiteConfig';
import {theme} from '../../theme';

import './layout.scss';

const HeaderPadding = styled.div`
  // Navigation の高さの分の空間
  height: 55px;
`;

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
            <HeaderPadding />
            {children}
          </div>

          <footer>{config.copyright}</footer>
        </Navigation>
      </ThemeProvider>
    </>
  );
};

export default Layout;
