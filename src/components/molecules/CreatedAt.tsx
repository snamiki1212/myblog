import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import config from '../../../data/SiteConfig';
import {Icon} from '../atoms';

type Props = {date: Date; containerStyle?: any};

export const CreatedAt: React.FC<Props> = ({date, containerStyle = {}}) => {
  const formatedDate = dayjs(date).format(config.dateFormat);

  return (
    <Wrapper containerStyle={containerStyle}>
      <_Icon icon="createdAt" />
      <Date>{formatedDate}</Date>
    </Wrapper>
  );
};

const Wrapper = styled.span<{containerStyle: any}>`
  display: flex;
  align-items: center;
  ${({containerStyle}) => `${{...containerStyle}}`};
`;

const _Icon = styled(Icon)`
  color: ${props => props.theme.color.grayDark};
`

const Date = styled.span`
  color: ${props => props.theme.color.grayDark};
`;
