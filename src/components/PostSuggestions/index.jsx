import React, { Component } from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import "./PostSuggestions.scss";

export default class PostSuggestions extends Component {
  render() {
    const { postNode } = this.props;
    const postFields = postNode.fields;
    return (
      <div className="post-suggestions md-grid md-cell--12">
        <Link to={postFields.prevSlug} className="post-suggestion">
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_back
          </FontIcon>
          <div className="headline-container hide-on-mobile">
            <p className="md-body-2 secondary-color">Previous</p>
            <p className="md-headline secondary-color">
              {postFields.prevTitle}
            </p>
          </div>
        </Link>
        <Link to={postFields.nextSlug} className="post-suggestion">
          <div className="headline-container">
            <p className="md-body-2 secondary-color">Next</p>
            <p className="md-headline secondary-color">
              {postFields.nextTitle}
            </p>
          </div>
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_forward
          </FontIcon>
        </Link>
      </div>
    );
  }
}
