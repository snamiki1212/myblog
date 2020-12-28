import React from 'react';
import styled from 'styled-components';
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
  background: ${props => props.theme.color.baseDark};
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
  color: ${props => props.theme.color.primaryVivid};
  font-family: ${props => props.theme.fontFamily.primary}px;
  font-size: ${props => props.theme.fontSize.tmp_3}px;
`;
