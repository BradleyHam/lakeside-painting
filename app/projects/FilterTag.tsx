import React from 'react'

interface FilterTagProps {
  tagName: string;
  active: boolean;
  onClick: () => void;
}

function FilterTag({ tagName, active, onClick }: FilterTagProps) {
  return (
    <div 
      className={`${
        active 
          ? 'bg-gray-200 text-primary border border-1 border-primary' 
          : 'bg-transparent text-primary/60 border border-1 border-primary/60'
      } inline-block px-4 py-2 cursor-pointer font-semibold text-sm rounded`}
      onClick={onClick}
    >
      {tagName}
    </div>
  )
}

export default FilterTag