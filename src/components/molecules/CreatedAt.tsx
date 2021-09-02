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
  flex: 1;
  color: var(--gray-dark);
`;

const Date = styled.span`
  flex: 1;
  color: var(--gray-dark);
  font-weight: 200;
  font-family: var(--ff-date);
`;
