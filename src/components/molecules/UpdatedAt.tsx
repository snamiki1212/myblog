import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import config from '../../../data/SiteConfig';
import {Icon} from '../atoms';

type Props = {date: Date; containerStyle?: any};

// TODO: atomsに移動させたい
export const UpdatedAt: React.FC<Props> = ({date, containerStyle = {}}) => {
  const formatedDate = dayjs(date).format(config.dateFormat);

  return (
    <Wrapper containerStyle={containerStyle}>
      <Icon icon="updatedAt" />
      <Date>{formatedDate}</Date>
    </Wrapper>
  );
};

const Wrapper = styled.span<{containerStyle: any}>`
  display: flex;
  align-items: center;
  ${({containerStyle}) => `${{...containerStyle}}`};
`;

const Date = styled.span``;
