import React from 'react';
import Helmet from 'react-helmet';

import {AboutPage} from '../components/pages/AboutPage';
import {Layout} from '../components/templates/Layout';
import config from '../../data/SiteConfig';

const Index: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>

      <AboutPage />
    </Layout>
  );
};

export default Index;
