import React from 'react';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../components/Navigation';
import config from '../../data/SiteConfig';
import './index.scss';
import './global.scss';
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

export default class Layout extends React.Component {
  isIndexPage = pathname => pathname == ('/' || /\/[0-9]/.test(pathname));
  isAboutPage = pathname => /\/about/i.test(pathname);
  isTagsPage = pathname => /\/tags/i.test(pathname);
  isCategoriesPage = pathname => /\/categories/i.test(pathname);
  isPostPage = pathname =>
    !(
      this.isIndexPage(pathname) ||
      this.isAboutPage(pathname) ||
      this.isTagsPage(pathname) ||
      this.isCategoriesPage(pathname)
    );

  render() {
    const {children} = this.props;
    return (
      <Navigation
        config={config}
        LocalTitle={this.props.title}
        isPost={this.isPostPage(this.props.location.pathname)}
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
  }
}
