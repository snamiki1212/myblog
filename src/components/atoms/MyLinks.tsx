import React from 'react';
import Button from '@material-ui/core/Button';
import {Icon} from './';

import styled from 'styled-components';
import config from '../../../data/SiteConfig';

export const MyLinks: React.FC = () => {
  const {mySocials} = config;

  return (
    <Links>
      {Array.isArray(mySocials) &&
        mySocials.map(
          (social): JSX.Element => (
            <Button
              key={social.icon}
              href={social.url}
              style={{height: '100px'}}
            >
              <Icon icon={social.icon} />
            </Button>
          )
        )}
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
