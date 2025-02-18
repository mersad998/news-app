// FeaturedSlider.tsx
import { FC, useState, useEffect } from 'react';

import type { DisplayableArticle } from './feedsPageTypes';

interface FeaturedSliderProps {
  featuredArticles: DisplayableArticle[];
}

const FeaturedSlider: FC<FeaturedSliderProps> = ({ featuredArticles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  return (
    <div className="relative w-full mb-6">
      {featuredArticles.map((article, index) => (
        <div
          key={index}
          className={`${index === currentIndex ? 'block' : 'hidden'} w-full h-64 md:h-96 bg-cover bg-center rounded-lg shadow-md`}
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
        onClick={() => setCurrentIndex(currentIndex === 0 ? featuredArticles.length - 1 : currentIndex - 1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={() => setCurrentIndex(currentIndex === featuredArticles.length - 1 ? 0 : currentIndex + 1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default FeaturedSlider;
