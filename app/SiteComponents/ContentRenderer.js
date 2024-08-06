import React from 'react';
import { PortableText } from '@portabletext/react';

const components = {
  block: {
    // Default block renderer
    normal: ({ children }) => <p className='pt-[10px]'>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  // Add custom rendering for other types as needed
};

const ContentRenderer = ({ blocks }) => {
  return <PortableText value={blocks} components={components} />;
};

export default ContentRenderer;