import React from 'react';
import Button from '@material-ui/core/Button';
import {Icon} from './';

import styled from 'styled-components';
import config from '../../../data/SiteConfig';

export const MyLinks: React.FC = () => {
  const {mySocials} = config;

  if (!Array.isArray(mySocials)) return <></>;

  return (
    <Wrapper>
      {mySocials.map((social) => (
        <_Button key={social.icon} href={social.url}>
          <Icon icon={social.icon} />
        </_Button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const _Button = styled(Button)`
  height: 100px;
`;
