import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import {HeaderTitle} from '../components/atoms';
import {AboutCard} from '../components/organisms';
import config from '../../data/SiteConfig';

const AboutPage = (props): JSX.Element => {
  return (
    <Layout location={props.location} title={<HeaderTitle />}>
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <AboutCard />
    </Layout>
  );
};

export default AboutPage;
