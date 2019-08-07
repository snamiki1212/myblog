import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import {Link} from 'gatsby';

interface Nav {
  primaryText: string;
  secondaryText?: string;
  threeLines: boolean;
  leftIcon: JSX.Element;
  component: any;
  to: string;
}
interface Divider {
  divider: boolean;
}

export const NavList: (Nav | Divider)[] = [
  {
    primaryText: 'Home',
    leftIcon: <FontIcon>home</FontIcon>,
    threeLines: false,
    component: Link,
    to: '/',
  },
  {
    primaryText: 'AboutMe',
    secondaryText: '',
    threeLines: true,
    leftIcon: <FontIcon>face</FontIcon>,
    component: Link,
    to: '/about/',
  },
  {
    divider: true,
  },
  {
    primaryText: 'Tech',
    secondaryText: '先端技術が好き。',
    threeLines: false,
    leftIcon: <FontIcon>desktop_mac</FontIcon>,
    component: Link,
    to: '/categories/tech/',
  },
  {
    primaryText: 'World',
    threeLines: false,
    secondaryText: '海外でのキャリアとか。',
    leftIcon: <FontIcon>language</FontIcon>,
    component: Link,
    to: '/categories/world/',
  },
  {
    primaryText: 'Local Guide',
    threeLines: true,
    secondaryText: 'GoogleMapへの\nコントリビュータ。',
    leftIcon: <FontIcon>streetview</FontIcon>,
    component: Link,
    to: '/categories/local-guide/',
  },
];

export default NavList;
