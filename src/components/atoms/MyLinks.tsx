import React from 'react';
import {Icon} from './';
import { Link } from 'gatsby'

import styled from 'styled-components';
import config from '../../../data/SiteConfig';

export const MyLinks: React.FC = () => {
  const {mySocials} = config;

  if (!Array.isArray(mySocials)) {
    console.warn("My social data in config must be array.");
    return <></>;
  };

  return (
    <Wrapper>
      {mySocials.map(social => (
        <_Link key={social.icon} to={social.url} aria-label={social.icon}>
          <Icon icon={social.icon} />
        </_Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const _Link = styled(Link)`
  margin-right: 7px;
`;