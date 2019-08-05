import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import Footer from '../Footer';
import GetNavList from './NavList';
import StyledReadingProgress from '../StyledReadingProgress';

const Navigation = (props): JSX.Element => {
  const {children, config, LocalTitle, isPost} = props;
  console.log('props', props);
  const footerLinks = LocalTitle && LocalTitle !== 'About';

  return (
    <NavigationDrawer
      toolbarTitle={LocalTitle} // header title
      drawerTitle={config.siteTitle}
      navItems={GetNavList()}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      toolbarActions={<Toolbar />}
    >
      {isPost ? <StyledReadingProgress /> : ''}
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

export default Navigation;
