import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList() {
  const NavList = [];

  NavList.push({
    primaryText: "Home",
    leftIcon: <FontIcon>home</FontIcon>,
    component: Link,
    to: "/"
  });

  NavList.push({
    primaryText: "AboutMe",
    secondaryText: "",
    threeLines: true,
    leftIcon: <FontIcon>face</FontIcon>,
    component: Link,
    to: "/about/"
  });

  NavList.push({
    divider: true
  });

  NavList.push({
    primaryText: "Tech",
    secondaryText: "先端技術が好き。",
    // threeLines: true,
    leftIcon: <FontIcon>desktop_mac</FontIcon>,
    component: Link,
    to: "/categories/tech/"
  });

  NavList.push({
    primaryText: "World",
    // threeLines: true,
    secondaryText: "海外でのキャリアとか。",
    leftIcon: <FontIcon>language</FontIcon>,
    component: Link,
    to: "/categories/world/"
  });

  NavList.push({
    primaryText: "Local Guide",
    threeLines: true,
    secondaryText: "GoogleMapへの\nコントリビュータ。",
    leftIcon: <FontIcon>streetview</FontIcon>,
    component: Link,
    to: "/categories/local-guide/"
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
