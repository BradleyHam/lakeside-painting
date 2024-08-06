import { groq } from "next-sanity";
import client from '../client-config';
import { Project } from "../../types/Project";
export default async function getProject(slug:string): Promise<Project>{
        const project = await client.fetch(groq`*[_type == "projects" && slug.current == $slug][0]{
          "largeImage": largeImage.asset->url,
          "smallImage": smallImage.asset->url,
          "mediumImage": mediumImage.asset->url,
          "slug": slug.current,
          title,
          categories,
          content,
          "imageUrls": images[].asset->url,
        }`, {slug}, {next: {
          revalidate: 1 
        }});
        return project;
      } 
