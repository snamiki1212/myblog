import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import StyledReadingProgress from '../StyledReadingProgress';
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle, isPost } = this.props;
    const footerLinks = LocalTitle !== "About";

    return (
      <NavigationDrawer
        drawerTitle={config.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        {isPost ? <StyledReadingProgress /> : "" }
        <div className="main-container">{children}</div>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
