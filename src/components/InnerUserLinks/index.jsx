import React, {Component} from 'react';
import Button from 'react-md/lib/Buttons';
import './InnerUserLinks.scss';

class InnerUserLinks extends Component {
  getLinkElements() {
    const {config} = this.props;
    const {userLinks} = config;
    // const { labeled } = this.props;
    return userLinks.map(link => (
      <Button
        icon
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
        forceSize="90"
      >
        {/* {labeled ? link.label : ""} */}
      </Button>
    ));
  }

  render() {
    const {config} = this.props;
    const {userLinks} = config;

    if (!userLinks) {
      return null;
    }
    return <div className="inner-user-links">{this.getLinkElements()}</div>;
  }
}

export default InnerUserLinks;
