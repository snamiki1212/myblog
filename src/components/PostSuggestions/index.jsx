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

        <Link to={postFields.prevSlug} className="post-suggestion md-grid md-cell md-cell--6">
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_back
          </FontIcon>
          <span className="headline-container hide-on-mobile">
            <span className="md-body-2 secondary-color">Previous</span>
            <span className="md-headline secondary-color">
              {postFields.prevTitle}
            </span>
          </span>
        </Link>

        <Link to={postFields.nextSlug} className="post-suggestion md-grid md-cell md-cell--6">
          <span className="headline-container">
            <span className="md-body-2 secondary-color">Next</span>
            <span className="md-headline secondary-color">
              {postFields.nextTitle}
            </span>
          </span>
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
