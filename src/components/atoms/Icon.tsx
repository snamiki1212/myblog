import React from 'react';

// material-ui/icons
// search => https://material-ui.com/components/material-icons/
// import PlaceIcon from '@material-ui/icons/Place';
// import HomeIcon from '@material-ui/icons/Home';
// import FaceIcon from '@material-ui/icons/Face';
// import DesktopMacIcon from '@material-ui/icons/DesktopMac';
// import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
// import Update from '@material-ui/icons/Update';
// import Create from '@material-ui/icons/Create';
// import {library} from "@fortawesome/fontawesome-svg-core";
import {faRecycle, faEdit} from "@fortawesome/free-solid-svg-icons";

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

type Props = {
  icon:
    // | 'face'
    // | 'place'
    // | 'home'
    // | 'desktop_mac'
    // | 'airplanemode_active'
    | 'github'
    | 'twitter'
    | 'linkedin'
    | 'createdAt'
    | 'updatedAt';
  [key: string]: any;
};

export const Icon: React.FC<Props> = ({icon, ...rest}) => {
  switch (icon) {
    // case 'face':
    //   return <FaceIcon />;
    // case 'place':
    //   return <PlaceIcon />;
    // case 'home':
    //   return <HomeIcon />;
    // case 'desktop_mac':
    //   return <DesktopMacIcon />;
    // case 'airplanemode_active':
    //   return <AirplanemodeActiveIcon />;
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
