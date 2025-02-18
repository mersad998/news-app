import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FeedCard } from '@components/feedCard';
import { Pagination } from '@heroui/react';
// import { SearchBar } from '../searchBar';

import FeaturedSlider from './FeaturedSlider';

import type { FeedsPageViewProps } from './feedsPageTypes';

const FeedsPageView: FC<FeedsPageViewProps> = (props) => {
  const { articles, totalCount, userCustomSorts, onSearch, onPageChange, onResourceSelect } = props;
  const { t } = useTranslation();

  // Separate featured articles (e.g., first 3 articles) from the rest
  const featuredArticles = articles.filter((article) => article.images.length).slice(0, 3);
  console.log('articles: ', articles);
  const regularArticles = articles.slice(3);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      {/* Featured News Slider */}
      {featuredArticles.length > 0 && <FeaturedSlider featuredArticles={featuredArticles} />}

      {!regularArticles.length ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-yellow-500">Oops!</h2>
          <p className="text-gray-500">{t('feeds.noData')}</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {regularArticles.map((article, index) => (
            <FeedCard article={article} key={index} />
          ))}
        </div>
      )}
      {!!regularArticles.length && (
        <div className="flex justify-center mt-8">
          <Pagination total={totalCount} onChange={onPageChange} className="mt-4" />
        </div>
      )}
    </div>
  );
};

export default FeedsPageView;
