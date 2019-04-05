import React, { Component } from "react";
import "./Sidebar.scss";
import Author from '../Author';

class Sidebar extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div id='sidebar'>
        <Author />
        this is side bar
      </div>
    );
  }
}

export default Sidebar;
