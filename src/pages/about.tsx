import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About';
import HeaderTitle from '../components/HeaderTitle';
import config from '../../data/SiteConfig';

const AboutPage = (props): JSX.Element => {
  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <About />
    </Layout>
  );
};

export default AboutPage;
