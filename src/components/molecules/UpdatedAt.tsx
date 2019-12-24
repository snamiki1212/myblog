import React from 'react';
import moment from 'moment';
import config from '../../../data/SiteConfig';
import {Icon} from '../atoms';

export const UpdatedAt: React.FC<{date: Date; containerStyle?: any}> = ({
  date,
  containerStyle = {},
}) => (
  <span style={{display: 'flex', alignItems: 'center', ...containerStyle}}>
    <Icon icon="calendar" />
    <span style={{paddingLeft: '5px'}}>
      {moment(date).format(config.dateFormat)}
    </span>
  </span>
);
