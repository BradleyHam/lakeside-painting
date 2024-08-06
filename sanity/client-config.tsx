import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: '2024-05-31',
    projectId: 'nzq5cghb',
    dataset: 'production',
    useCdn: false,
  });

  export default client 