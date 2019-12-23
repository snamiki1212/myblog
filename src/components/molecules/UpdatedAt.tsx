import React from 'react';
import moment from 'moment';
import config from '../../../data/SiteConfig';
import {XIcon} from '../atoms';

export const UpdatedAt: React.FC<{date: Date}> = ({date}) => (
  <>
    <XIcon icon="sync" />
    <span style={{paddingLeft: '5px'}}>
      {moment(date).format(config.dateFormat)}
    </span>
  </>
);
