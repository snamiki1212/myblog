import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {siteTitle} from '../../../data/SiteConfig';
import {Link} from 'gatsby';

export const HeadNav: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Flex>
          <span>
            <Image src="/blogcard.png" />
          </span>
          <BlogTitle>{siteTitle}</BlogTitle>
        </Flex>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${colors.baseDark};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const BlogTitle = styled.span`
  color: ${colors.primaryVivid};
  font-size: 54px;
`;
