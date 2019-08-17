import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceIcon from '@material-ui/icons/Place';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
// icon: 'home' | 'place' | 'face' | 'desktop_mac' | 'airplanemode_active'; // chooseme: https://material.io/resources/icons/
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Link} from 'gatsby';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import styled from 'styled-components';
import {Footer, ProgressBar} from '../atoms';
import DrawerItemList from '../../DrawerItemList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props): JSX.Element => {
  // readme: https://material-ui.com/components/app-bar/#hide-app-bar
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({target: window ? window() : undefined});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Navigation = (props: any & ResponsiveDrawerProps): JSX.Element => {
  const {children, config, LocalTitle, isPost, container} = props;
  const footerLinks = LocalTitle && LocalTitle !== 'About';

  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  const xIcon = (icon: string): JSX.Element => {
    switch (icon) {
      case 'face':
        return <FaceIcon />;
      case 'place':
        return <PlaceIcon />;
      case 'home':
        return <HomeIcon />;
      case 'desktop_mac':
        return <DesktopMacIcon />;
      case 'airplanemode_active':
        return <AirplanemodeActiveIcon />;
      default:
        return <></>;
    }
  };

  // ドロワーの中身
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {DrawerItemList.map((drowerItem, key) => {
          return drowerItem.type === 'divider' ? (
            <Divider key={key} />
          ) : (
            <Link to={drowerItem.row.to} key={key}>
              <ListItem button>
                <ListItemIcon>{xIcon(drowerItem.row.icon)}</ListItemIcon>
                <ListItemText
                  primary={drowerItem.row.primaryText}
                  secondary={drowerItem.row.secondaryText}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        {/* 上部にあるアプリケーションバー */}
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {LocalTitle}
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        {/* アプリケーションバーをOnclickで展開されるドロワーのWrapper */}
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        {/* コンテンツ */}
        <main className={classes.content}>
          <div className={classes.toolbar}>
            {isPost ? <ProgressBar /> : ''}
            <Container>{children}</Container>
            <Footer userLinks={footerLinks} />
          </div>
        </main>
      </div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  flex: 1;
`;
