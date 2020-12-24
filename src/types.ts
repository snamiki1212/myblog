import {FluidObject} from 'gatsby-image';

export interface MarkdownRemarkEdge {
  node: {
    fields: {
      _slug: string;
      _createdAt: Date;
      _updatedAt: Date;
    };
    excerpt: string;
    timeToRead: number;
    frontmatter: {
      title: string;
      tags: string;
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
