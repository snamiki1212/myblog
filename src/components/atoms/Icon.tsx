import React from 'react';

// material-ui/icons
// search => https://material-ui.com/components/material-icons/
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Event from '@material-ui/icons/Event';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

type Props = {
  icon:
    | 'face'
    | 'place'
    | 'home'
    | 'desktop_mac'
    | 'airplanemode_active'
    | 'github'
    | 'twitter'
    | 'linkedin'
    | 'calendar';
};

export const Icon: React.FC<Props> = ({icon}) => {
  switch (icon) {
    case 'face':
      return <FaceIcon />;
    case 'place':
      return <PlaceIcon />;
    case 'home':
      return <HomeIcon />;
    case 'desktop_mac':
      return <DesktopMacIcon />;
    case 'airplanemode_active':
      return <AirplanemodeActiveIcon />;
    case 'github':
      return <FontAwesomeIcon icon={faGithub} size="3x" />;
    case 'twitter':
      return <FontAwesomeIcon icon={faTwitter} size="3x" />;
    case 'linkedin':
      return <FontAwesomeIcon icon={faLinkedinIn} size="3x" />;
    case 'calendar':
      return <Event fontSize="small" />;
    default:
      return <></>;
  }
};
