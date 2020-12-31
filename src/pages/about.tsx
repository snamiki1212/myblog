import React from 'react';
import Helmet from 'react-helmet';

import {AboutTemplate} from '../components/templates/AboutTemplate';
import Layout from '../components/organisms/Layout';
import config from '../../data/SiteConfig';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>

      <AboutTemplate />
    </Layout>
  );
};

export default AboutPage;
