import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import config from '../../../data/SiteConfig';
import {Icon} from '../atoms';
import {colors} from '../../../data/color';

type Props = {date: Date; containerStyle?: any};

const FONT_COLOR = colors.grayDark;

// TODO: atomsに移動させたい
export const CreatedAt: React.FC<Props> = ({date, containerStyle = {}}) => {
  const formatedDate = dayjs(date).format(config.dateFormat);

  return (
    <Wrapper containerStyle={containerStyle}>
      <Icon icon="createdAt" style={{color: FONT_COLOR}} />
      <Date>{formatedDate}</Date>
    </Wrapper>
  );
};

const Wrapper = styled.span<{containerStyle: any}>`
  display: flex;
  align-items: center;
  ${({containerStyle}) => `${{...containerStyle}}`};
`;

const Date = styled.span`
  color: ${FONT_COLOR};
`;
