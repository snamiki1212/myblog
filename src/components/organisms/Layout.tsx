import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {HeadNav} from '../molecules/HeadNav';
import {Footer} from './Footer';
import config from '../../../data/SiteConfig';
import {theme} from '../../theme';
import {ThemeProvider} from 'styled-components';
import './layout.scss';

const BodyWrapper = styled.div`
  opacity: 0.99; // z-indexがマイナスの要素よりも背面に持っていきたいので。(README: https://philipwalton.com/articles/what-no-one-told-you-about-z-index/ )
  background-color: ${(props) => props.theme.color.baseLight};
`;

export const Layout: React.FC = ({children}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <meta
          name="google-site-verification"
          content={config.siteGSCTrackingID}
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <HeadNav />
        <BodyWrapper>{children}</BodyWrapper>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
