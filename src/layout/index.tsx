import React from 'react';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';
import {Navigation} from '../components/molecules/';
import config from '../../data/SiteConfig';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from '../theme';

import './index.scss';

const Layout = (props): JSX.Element => {
  const isIndexPage = pathname => pathname == ('/' || /\/[0-9]/.test(pathname));
  const isAboutPage = pathname => /\/about/i.test(pathname);
  const isTagsPage = pathname => /\/tags/i.test(pathname);
  const isCategoriesPage = pathname => /\/categories/i.test(pathname);
  const isPostPage = pathname =>
    !(
      isIndexPage(pathname) ||
      isAboutPage(pathname) ||
      isTagsPage(pathname) ||
      isCategoriesPage(pathname)
    );

  const {children} = props;
  return (
    <ThemeProvider theme={theme}>
      <Navigation
        config={config}
        LocalTitle={props.title}
        isPost={isPostPage(props.location.pathname)}
      >
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
