import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination } from '@heroui/react';
import { FeedCard } from '@components/feedCard';
import { SearchBar } from '@components/searchBar';
import { FeaturedSlider } from '@components/FeaturedSlider';

import type { FeedsPageViewProps } from './feedsPageTypes';

const FeedsPageView: FC<FeedsPageViewProps> = ({
  articles,
  totalCount,
  userCustomSorts,
  onSearch,
  onPageChange,
  onResourceSelect,
}) => {
  const { t } = useTranslation();

  // Separate featured articles (first 3 with images) from the rest
  const featuredArticles = articles.slice(0, 3).filter((article) => article.images.length);
  const regularArticles = articles.slice(3);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      {/* Search & Filters */}
      <SearchBar userCustomSorts={userCustomSorts} onSearch={onSearch} onResourceSelect={onResourceSelect} />

      {/* Featured News Slider */}
      {featuredArticles.length > 0 && <FeaturedSlider featuredArticles={featuredArticles} />}

      {/* Articles Grid or No Data Message */}
      {regularArticles.length ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {regularArticles.map((article, index) => (
            <FeedCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-yellow-500">{t('feeds.noDataHeading')}</h2>
          <p className="text-gray-500 dark:text-gray-300">{t('feeds.noData')}</p>
        </div>
      )}

      {/* Pagination */}
      {Boolean(regularArticles.length) && (
        <div className="flex justify-center mt-8">
          <Pagination total={totalCount} onChange={onPageChange} className="mt-4" />
        </div>
      )}
    </div>
  );
};

export default FeedsPageView;
