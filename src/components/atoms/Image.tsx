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
      return <img src={publicURL} alt="this-is-image" {...rest} />;
    }
    return <Img fluid={childImageSharp.fluid} {...rest} />;
  } catch (e) {
    return <img src={'/eyecatch.png'} alt="eyecatch" style={{width: '100%'}} />;
  }
};

export default Image;
