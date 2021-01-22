import React from 'react';
import styled from 'styled-components';
import {MixBlender} from '../atoms/MixBlender'

type Props = {
  image: React.ReactNode;
  logo: React.ReactNode;
  title: React.ReactNode;
  updatedAt: React.ReactNode;
  category: React.ReactNode;
};

const PADDING_SIZE = '10px';

export const ArticleLineDescriptionLayout: React.FC<Props> = ({
  image,
  logo,
  title,
  updatedAt,
  category,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>{image}</ImageWrapper>

      <Description>
        <TitleWrapper>{title}</TitleWrapper>

        <MetaDataWrapper>
          <LogoWrapper>{logo}</LogoWrapper>

          <UpdatedAtWrapper>{updatedAt}</UpdatedAtWrapper>

          <CategoryWrapper>{category}</CategoryWrapper>
        </MetaDataWrapper>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${PADDING_SIZE};
  display: flex;
  flex-direction: row;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Description = styled(Flex)`
  align-content: space-between;
`;

const MetaDataWrapper = styled(Flex)`
  align-items: center;
`;

const ImageWrapper = styled(MixBlender)``;

const TitleWrapper = styled.div`
  padding: 0 10px;
  width: 100%;
`;

const MetaData = styled.div`
  padding-left: 5px;
`;

const LogoWrapper = styled(MetaData)``;

const UpdatedAtWrapper = styled(MetaData)``;

const CategoryWrapper = styled(MetaData)``;
