import React from 'react';
import config from '../../../data/SiteConfig';

const Footer = (): JSX.Element => {
  const {copyright} = config;
  if (!copyright) {
    return null;
  }
  return <footer>{copyright}</footer>;
};

export default Footer;
