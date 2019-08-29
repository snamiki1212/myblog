import React from 'react';

// material-ui/icons
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {faSync} from '@fortawesome/free-solid-svg-icons';

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
    | 'sync';
};

export const XIcon = ({icon}: Props): JSX.Element => {
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
    case 'sync':
      return <FontAwesomeIcon icon={faSync} />;
    default:
      return <></>;
  }
};
