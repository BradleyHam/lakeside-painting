import { PortableTextBlock } from "sanity";

export type Project = {
    largeImage: string;
    smallImage: string;
    mediumImage: string;
    title: string;
    categories: string[];
    slug: string;
    content: PortableTextBlock[];
    imageUrls: string[]
  };

  