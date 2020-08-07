import React from 'react';
import Img from 'gatsby-image';

type Props = {
  imgInfo: {
    publicURL: string;
    childImageSharp: any;
  };
  [key: string]: any;
};

const Image: React.FC<Props> = ({imgInfo, ...rest}) => {
  try {
    const {publicURL, childImageSharp} = imgInfo;

    if (!childImageSharp) {
      // svg系
      return <img src={publicURL} {...rest} />;
    }
    return <Img fluid={childImageSharp.fluid} {...rest} />;
  } catch (e) {
    return <span>page error</span>;
  }
};

export default Image;
