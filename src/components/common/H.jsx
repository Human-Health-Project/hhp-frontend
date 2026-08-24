import React from 'react';

const H = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${level}`;

  const baseStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6',
    2: 'text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-4',
    3: 'text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide mb-3',
    4: 'text-xl md:text-2xl font-medium text-gray-700 mb-3',
    5: 'text-lg md:text-xl font-medium text-gray-600 mb-2',
    6: 'text-base md:text-lg font-medium text-gray-600 mb-2',
  };

  const combinedClassName = `${baseStyles[level] || baseStyles[1]} ${className}`.trim();

  return (
    <Tag className={combinedClassName} {...props}>
      {children}
    </Tag>
  );
};

export default H;
