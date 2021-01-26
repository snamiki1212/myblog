import React from 'react';
import styled from 'styled-components';
import {siteTitle} from '../../../data/SiteConfig';
import {mixinSpinAnimate} from '../atoms/SpinAnimation';
import {Link} from 'gatsby';
import {blogCardLogo} from '../../../data/SiteConfig';

export const HeadNav: React.FC = () => {
  return (
    <Wrapper>
      <Flex>
        <Link to="/">
          <HoverForSpinArea>
            <Image src={blogCardLogo} alt="blog-logo" loading="lazy" />
          </HoverForSpinArea>
        </Link>

        <Link to="/">
          <BlogTitle>{siteTitle}</BlogTitle>
        </Link>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const HoverForSpinArea = styled.div`
  & :hover {
    ${Image} {
      ${mixinSpinAnimate}
    }
  }
`;

const BlogTitle = styled.span`
  color: ${(props) => props.theme.color.primaryVivid};
  font-family: ${(props) => props.theme.fontFamily.logo};
  font-size: ${(props) => props.theme.fontSize.tmp_3}px;
`;
