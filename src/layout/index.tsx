import React from 'react';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';
import {Navigation} from '../components/molecules/';
import config from '../../data/SiteConfig';
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
  );
};

export default Layout;
