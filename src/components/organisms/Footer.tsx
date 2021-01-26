import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Logo} from '../atoms/Logo';
import {Link} from 'gatsby';
import {mixinSpinAnimate} from '../atoms/SpinAnimation';
import {FooterNav} from '../molecules/FooterNav';
import {Town} from '../molecules/Town';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Town fill="dark" />

      <ContentWrapper>
        <Content>
          <LogoWrapper>
            <Link to="/">
              <HoverForSpinArea>
                <Logo size={146} />
              </HoverForSpinArea>
            </Link>
          </LogoWrapper>

          <FooterNav />

          <BottomWrapper>
            <HR />
            <Copyright>{config.copyright}</Copyright>
          </BottomWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

const BottomWrapper = styled.div`
  width: 100%;
`;

const HR = styled.hr`
  border: 1px solid ${(props) => props.theme.color.primaryVivid};
`;

const Copyright = styled.footer`
  color: ${(props) => props.theme.color.baseLight};
  padding: 10px 0;
  text-align: center;
`;

const LogoWrapper = styled.div``;

const HoverForSpinArea = styled.div`
  & :hover {
    ${LogoWrapper} {
      ${mixinSpinAnimate}
    }
  }
`;

const Wrapper = styled.div`
  padding-top: 30px;
  background: ${(props) => props.theme.color.baseLight};
`;

const ContentWrapper = styled.div`
  background: ${(props) => props.theme.color.baseDark};
`;

const Content = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
