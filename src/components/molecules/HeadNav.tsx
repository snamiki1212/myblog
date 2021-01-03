import React from 'react';
import styled from 'styled-components';
import {siteTitle} from '../../../data/SiteConfig';
import {mixinSpinAnimate} from '../atoms/SpinAnimation';
import {Link} from 'gatsby';

export const HeadNav: React.FC = () => {
  return (
    <Wrapper>
      <Flex>
        <Link to="/">
          <HoverForSpinArea>
<<<<<<< HEAD
            <Image src="/blogcard.png" />
=======
            <Image src="/blogcard.png" alt="blog-logo" />
>>>>>>> starter/master
          </HoverForSpinArea>
        </Link>

        <Link to="/">
          <BlogTitle>{siteTitle}</BlogTitle>
        </Link>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.baseDark};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
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
  font-family: ${(props) => props.theme.fontFamily.primary}px;
  font-size: ${(props) => props.theme.fontSize.tmp_3}px;
`;
