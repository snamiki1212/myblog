import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./InnerUserLinks.scss";

class InnerUserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    // const { labeled } = this.props;
    return userLinks.map(link => (
      <Button
        icon={true}
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
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="inner-user-links">{this.getLinkElements()}</div>;
  }
}

export default InnerUserLinks;
