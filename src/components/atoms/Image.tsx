import React from 'react';
import Img from 'gatsby-image';
import {DummyImage} from './DummyImage';

type Props = {
  imgInfo: {
    publicURL: string;
    childImageSharp: any;
  };
  [key: string]: any;
};

const Image: React.FC<Props> = ({imgInfo, ...rest}) => {
  try {
    if (!imgInfo) {
      return <DummyImage {...rest} />;
    }

    const {publicURL, childImageSharp} = imgInfo;

    if (!childImageSharp) {
      console.warn('Cannot find childImageSharp on Image Component');
      return <img src={publicURL} alt="this-is-image" {...rest} />;
    }

    return <Img fluid={childImageSharp.fluid} {...rest} />;
  } catch (err) {
    console.error('Something error happen on Image Component');
    return <span {...rest}>img</span>;
  }
};

export default Image;
