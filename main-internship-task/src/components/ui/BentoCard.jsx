import React from 'react';

const BentoCard = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`group relative rounded-lg bg-surface-container-low border border-outline-variant/30 overflow-hidden bento-card shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BentoCard;
