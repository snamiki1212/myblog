import React from 'react';
import Button from 'react-md/lib/Buttons';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';

export const MyLinks = (): JSX.Element => {
  const {userLinks} = config;

  return (
    <Links>
      {Array.isArray(userLinks) &&
        userLinks.map(
          (link): JSX.Element => (
            <Button
              icon
              key={link.label}
              iconClassName={link.iconClassName}
              href={link.url}
            />
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
