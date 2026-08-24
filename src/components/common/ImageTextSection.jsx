import React from 'react';
import H from './H.jsx';

const ImageTextSection = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reversed = false,
  backgroundColor,
  index = 0,
}) => {

  const bgColor = backgroundColor || (index % 2 === 0 ? 'bg-[#c8d448]' : 'bg-[#7cc2e6]');
  const layoutClass = reversed || index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${layoutClass} items-stretch my-8 md:my-12 ${bgColor}`}>
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 px-6 py-8 md:px-12 md:py-16 flex flex-col justify-center">
        <H level={2} className="mb-4">
          {title}
        </H>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageTextSection;
