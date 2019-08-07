import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import styled from 'styled-components';
import {Footer, ProgressBar} from '../atoms';
import NavList from '../../NavList';

export const Navigation = (props): JSX.Element => {
  const {children, config, LocalTitle, isPost} = props;
  const footerLinks = LocalTitle && LocalTitle !== 'About';

  return (
    <NavigationDrawer
      toolbarTitle={LocalTitle} // header title
      drawerTitle={config.siteTitle}
      navItems={NavList}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    >
      {isPost ? <ProgressBar /> : ''}
      <Container>{children}</Container>
      <Footer userLinks={footerLinks} />
    </NavigationDrawer>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  flex: 1;
`;
