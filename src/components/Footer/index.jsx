import React, {Component} from 'react';
import config from '../../../data/SiteConfig';

class Footer extends Component {
  render() {
    const {copyright} = config;
    if (!copyright) {
      return null;
    }
    return <footer>{copyright}</footer>;
  }
}

export default Footer;
