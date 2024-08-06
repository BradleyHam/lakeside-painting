"use client";

import { useState } from "react";

const ExpandableContent = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-description pt-[20px] relative flex flex-col items-end">
      <div className={`content ${isExpanded ? "expanded" : ""}`}>
        {children}
        {!isExpanded && <div className="mask-gradient"></div>}
      </div>
      <button className="read-more-btn uppercase tracking-widest text-sm " onClick={toggleExpanded}>
        {isExpanded ? "Read less" : "Read more"}
      </button>
      <style jsx>{`
        .project-description {
          position: relative;
        }
        .content {
          max-height: 150px; /* Adjust the height as needed */
          overflow: hidden;
          position: relative;
          transition: max-height 0.3s ease;
        }
        .content.expanded {
          max-height: none;
        }
        .mask-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px; 
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
          pointer-events: none;
        }
        .read-more-btn {
          position: relative;
          cursor: pointer;
          margin-top: ${isExpanded ? "20px" : "0px"};
          
        }
      `}</style>
    </div>
  );
};

export default ExpandableContent;
