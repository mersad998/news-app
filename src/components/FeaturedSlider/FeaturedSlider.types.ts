import { DisplayableArticle } from '@pages/FeedsPage/feedsPageTypes';

export interface FeaturedSliderProps {
  featuredArticles: DisplayableArticle[];
}

export interface FeaturedSliderViewProps {
  featuredArticles: DisplayableArticle[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}
