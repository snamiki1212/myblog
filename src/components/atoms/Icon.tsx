import React from 'react';
import {faRecycle, faEdit} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

type Props = {
  icon: 'github' | 'twitter' | 'linkedin' | 'createdAt' | 'updatedAt';
  [key: string]: any;
};

export const Icon: React.FC<Props> = ({icon, ...rest}) => {
  switch (icon) {
    case 'github':
      return <FontAwesomeIcon icon={faGithub} size="2x" />;
    case 'twitter':
      return <FontAwesomeIcon icon={faTwitter} size="2x" />;
    case 'linkedin':
      return <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
    case 'createdAt':
      return <FontAwesomeIcon icon={faEdit} size="1x" {...rest} />;
    case 'updatedAt':
      return <FontAwesomeIcon icon={faRecycle} size="1x" {...rest} />;
    default:
      return <></>;
  }
};
