import React from 'react';
import {blogCardLogo} from '../../../data/SiteConfig';

export const Logo: React.FC<{size: number}> = ({size}) => {
  return (
    <img
      src={blogCardLogo}
      style={{width: size, height: size}}
      alt="logo-img"
      loading="lazy" 
    />
  );
};
