import React, { useState, useEffect } from 'react';

const Carousel = ({ items, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Update items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // Mobile
      } else {
        setItemsToShow(3); // Desktop
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const max = Math.max(0, totalItems - itemsToShow);
      return prevIndex >= max ? 0 : prevIndex + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const max = Math.max(0, totalItems - itemsToShow);
      return prevIndex <= 0 ? max : prevIndex - 1;
    });
  };

  useEffect(() => {
    if (!autoPlay || isPaused || totalItems <= itemsToShow) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const max = Math.max(0, totalItems - itemsToShow);
        return prevIndex >= max ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, currentIndex, itemsToShow, totalItems]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full px-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="flex flex-col items-center justify-center py-6">
                {/* Flag Image */}
                {item.image && (
                  <div className="mb-4 flex items-center justify-center w-full h-24">
                    <img
                      src={item.image}
                      alt={`${item.name} flag`}
                      className="max-h-full w-auto object-contain shadow-lg rounded border border-gray-200"
                      loading="lazy"
                    />
                  </div>
                )}
                {/* Country Name */}
                <p className="text-base md:text-lg text-gray-800 font-semibold text-center mt-2">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalItems > itemsToShow && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalItems > itemsToShow && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
