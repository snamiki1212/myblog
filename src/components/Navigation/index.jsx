import React, {Component} from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import styled from 'styled-components';
import ToolbarActions from '../ToolbarActions';
import Footer from '../Footer';
import GetNavList from './NavList';
import StyledReadingProgress from '../StyledReadingProgress';

class Navigation extends Component {
  render() {
    const {children, config, LocalTitle, isPost} = this.props;
    const footerLinks = LocalTitle !== 'About';

    return (
      <NavigationDrawer
        toolbarTitle={LocalTitle} // header title
        drawerTitle={config.siteTitle}
        navItems={GetNavList()}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        {isPost ? <StyledReadingProgress /> : ''}
        <Container>{children}</Container>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  flex: 1;
`;

export default Navigation;
