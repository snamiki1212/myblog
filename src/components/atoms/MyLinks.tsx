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
          <Link key={social.icon} to={social.url} aria-label={social.icon}>
            <Icon icon={social.icon} />
          </Link>
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
    transition: 0.5s;
    background-color: ${(props) => props.theme.color.primaryVivid};
    transform: scale(1.2);
  }
`;
