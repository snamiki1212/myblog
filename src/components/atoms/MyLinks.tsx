import React from 'react';
import {Icon} from './';
import {Link} from 'gatsby';

import styled from 'styled-components';
import config from '../../../data/SiteConfig';

export const MyLinks: React.FC = () => {
  const {mySocials} = config;

  if (!Array.isArray(mySocials)) {
    console.warn('My social data in config must be array.');
    return <></>;
  }

  return (
    <Wrapper>
      {mySocials.map((social) => (
        <InnerWrapper key={social.icon}>
          <a
            href={social.url}
            aria-label={social.icon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={social.icon} />
          </a>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const InnerWrapper = styled.span`
  transition: 0.5s;
  padding: 7px;
  border-radius: 50%;
  display: inline-block;

  & :hover {
    transition: 0.3s;
    background-color: var(--base-light);
    transform: scale(1.1);
  }
`;
