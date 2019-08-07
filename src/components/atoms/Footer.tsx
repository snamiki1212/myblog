import React from 'react';
import config from '../../../data/SiteConfig';

export const Footer = (): JSX.Element => {
  const {copyright} = config;

  return copyright ? <footer>{copyright}</footer> : <footer>copyright</footer>;
};
