import {FluidObject} from 'gatsby-image';

export interface MarkdownRemarkEdge {
  node: {
    fields: {
      _slug: string;
      _createdAt: Date;
      _updatedAt: Date;
    };
    
    timeToRead: number;
    frontmatter: {
      title: string;
      tags: string;
      category: string;
      cover: {
        publicURL: string;
        childImageSharp: {
          fluid: FluidObject;
        };
      };
      createdAt: Date;
      updatedAt: Date;
    };
  };
}
