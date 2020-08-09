import React from 'react';
import {HeaderTitle} from '../../components/atoms';
// material-ui/core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
// Misc
import styled from 'styled-components';
import {colors} from '../../../data/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundImage: `linear-gradient(170deg, ${colors.vivid1} ,  ${colors.vivid2} 70%, ${colors.vivid3})`,
    },
    // toolbar: theme.mixins.toolbar,
    content: {
      width: '100vw',
    },
  })
);

const HideOnScroll: React.FC<{window?: () => Window; children: any}> = ({
  children,
  window,
}) => {
  // readme: https://material-ui.com/components/app-bar/#hide-app-bar

  const trigger = useScrollTrigger({target: window ? window() : undefined});
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
}

export const Navigation: React.FC<ResponsiveDrawerProps & any> = (props) => {
  const {children} = props;

  const classes = useStyles();

  return (
    <>
      <div className={classes['root']}>
        {/* 上部にあるアプリケーションバー */}
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes['appBar']}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                <HeaderTitle />
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        {/* コンテンツ */}
        <main className={classes['content']}>
          <div className={classes['toolbar']}>
            <Container>{children}</Container>
          </div>
        </main>
      </div>
    </>
  );
};

// TODO: https://codepen.io/P1N2O/pen/pyBNzX これやりたい。
const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  flex: 1;
`;
