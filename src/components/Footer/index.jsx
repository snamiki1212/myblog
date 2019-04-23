import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>

          <div className="based-on">
            <h4>
              Based on
              {" "}
              <a href="https://github.com/Vagr9K/gatsby-material-starter">
                Gatsby Material Starter
              </a>
              .
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
