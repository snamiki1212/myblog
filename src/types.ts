export type GatsbyImageData = any;

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
          [key: string]: GatsbyImageData;
        };
      };
      createdAt: Date;
      updatedAt: Date;
    };
  };
}
