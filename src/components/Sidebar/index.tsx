import React, {Component} from 'react';
import styled from 'styled-components';
import Author from '../Author';
import {colors} from '../../../data/color';

class Sidebar extends Component {
  render() {
    const {tags} = this.props;

    const Wrapper = styled.div`
      flex: 1;
      width: 100%;
      min-width: 250px;
      padding: 24px;

      background-color: ${colors['bg-white-2']};
    `;
    return (
      <Wrapper>
        <Author />
      </Wrapper>
    );
  }
}

export default Sidebar;
