import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  type: number;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, type }) => (
  <div className={`text-left  ${type === 1 ? ' lg:text-center mb-12 ' : 'lg:text-left mb-6'}`}>
    <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>{subtitle}</h4>
    <h2 className='text-base font-semibold'>{title}</h2>
  </div>
);

export default SectionHeading;
