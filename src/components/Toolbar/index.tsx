import React from 'react';
import styled from 'styled-components';
import UserLinks from '../UserLinks';

const Toolbar = (props): JSX.Element => {
  const {config} = props;

  return (
    <ToolbarActions>
      <UserLinksContainer>
        <UserLinks config={config} />
      </UserLinksContainer>
    </ToolbarActions>
  );
};

const UserLinksContainer = styled.div`
  @media (max-width: 640px - 1) {
    display: none;
  }
`;

const ToolbarActions = styled.div`
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
`;

export default Toolbar;
