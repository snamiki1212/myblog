import React, { Component } from "react";
import "./Sidebar.scss";
import Author from '../Author';

class Sidebar extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div id='sidebar'>
        <Author />
      </div>
    );
  }
}

export default Sidebar;
