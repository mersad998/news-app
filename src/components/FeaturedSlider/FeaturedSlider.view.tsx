import { FC } from 'react';

import type { FeaturedSliderViewProps } from './FeaturedSlider.types';

const FeaturedSliderView: FC<FeaturedSliderViewProps> = ({ featuredArticles, currentIndex, onNext, onPrev }) => {
  return (
    <div className="relative w-full mb-6">
      {featuredArticles.map((article, index) => (
        <div
          key={index}
          className={`${index === currentIndex ? 'block' : 'hidden'} w-full h-64 md:h-96 bg-cover bg-center rounded-lg shadow-md dark:shadow-lg`}
          style={{
            backgroundImage: `url(${article.images[0] || '/default-image.jpg'})`,
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-end p-4 rounded-lg">
            <h3 className="text-white text-2xl font-bold">{article.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{article.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full dark:bg-gray-700"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        onClick={onNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full dark:bg-gray-700"
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default FeaturedSliderView;
