import React, {Component} from 'react';
import Button from 'react-md/lib/Buttons';
import styled from 'styled-components';

class UserLinks extends Component {
  getLinkElements() {
    const {userLinks} = this.props.config;
    // const { labeled } = this.props;
    return userLinks.map(link => (
      <Button
        icon
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
      >
        {/* {labeled ? link.label : ""} */}
      </Button>
    ));
  }

  render() {
    const {userLinks} = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <Links>{this.getLinkElements()}</Links>;
  }
}

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

export default UserLinks;
