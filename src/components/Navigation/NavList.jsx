import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "AboutMe",
    leftIcon: <FontIcon>face</FontIcon>,
    component: Link,
    to: "/about/"
  });

  NavList.push({
    primaryText: "Tech",
    leftIcon: <FontIcon>desktop_mac</FontIcon>,
    component: Link,
    to: "/categories/tech/"
  });

  NavList.push({
    primaryText: "World",
    leftIcon: <FontIcon>language</FontIcon>,
    component: Link,
    to: "/categories/world/"
  });

  NavList.push({
    primaryText: "localguide",
    leftIcon: <FontIcon>streetview</FontIcon>,
    component: Link,
    to: "/categories/localguide/"
  });

  // NavList.push({
  //   primaryText: "Product",
  //   leftIcon: <FontIcon>thumb_up_alt</FontIcon>,
  //   component: Link,
  //   to: "/categories/product/"
  // });

  return NavList;
}
export default GetNavList;
