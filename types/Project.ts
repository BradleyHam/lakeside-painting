import { PortableTextBlock } from "sanity";

export type Project = {
  shortDesc: string;
  largeImage: string;
  smallImage?: string;
  mediumImage?: string;
  slug: string;
  title: string;
  categories: string[];
  content: string;
  imageUrls: string;
  tags: string[];
  imageShowcase: {
      before: {
          image: string;
          alt: string;
      };
      after: {
          image: string;
          alt: string;
      };
  }[];
};
