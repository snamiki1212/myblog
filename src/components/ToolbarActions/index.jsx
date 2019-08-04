import React, {Component} from 'react';
import styled from 'styled-components';
import UserLinks from '../UserLinks';

class Toolbar extends Component {
  render() {
    const {config} = this.props;
    return (
      <ToolbarActions>
        <UserLinksContainer>
          <UserLinks config={config} />
        </UserLinksContainer>
      </ToolbarActions>
    );
  }
}

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
