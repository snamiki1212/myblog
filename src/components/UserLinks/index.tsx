import React from 'react';
import Button from 'react-md/lib/Buttons';
import styled from 'styled-components';

const UserLinks = (props): JSX.Element => {
  const {config} = props;
  if (!config) {
    return null;
  }

  const {userLinks} = config;

  if (!userLinks) {
    return null;
  }

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
            >
              {/* {labeled ? link.label : ""} */}
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

export default UserLinks;
