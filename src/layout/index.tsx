import React from 'react';
import Helmet from 'react-helmet';
import {Navigation} from '../components/molecules/';
import config from '../../data/SiteConfig';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from '../theme';

import './index.scss';

const Layout = (props): JSX.Element => {
  const {children} = props;

  return (
    <ThemeProvider theme={theme}>
      <Navigation config={config} LocalTitle={props.title}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <meta
              name="google-site-verification"
              content={config.siteGSCTrackingID}
            />
          </Helmet>
          {children}
        </div>
      </Navigation>
    </ThemeProvider>
  );
};

export default Layout;
