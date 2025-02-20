import { FC, useState, useEffect } from 'react';

import FeaturedSliderView from './FeaturedSlider.view';

import type { FeaturedSliderProps } from './FeaturedSlider.types';

const FeaturedSliderController: FC<FeaturedSliderProps> = ({ featuredArticles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return (): void => clearInterval(interval);
  }, [featuredArticles.length]);

  const onNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1));
  };

  const onPrev = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredArticles.length - 1 : prevIndex - 1));
  };

  return <FeaturedSliderView featuredArticles={featuredArticles} currentIndex={currentIndex} onNext={onNext} onPrev={onPrev} />;
};

export default FeaturedSliderController;
