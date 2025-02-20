import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination } from '@heroui/react';
import { FeedCard } from '@components/feedCard';
import { SearchBar } from '@components/searchBar';
import { FeaturedSlider } from '@components/FeaturedSlider';
import { shuffleArray } from '@utils/shuffleArray';

import type { FeedsPageViewProps } from './feedsPageTypes';

const FeedsPageView: FC<FeedsPageViewProps> = ({
  articles,
  totalCount,
  userCustomSorts,
  currentPage,
  onSearch,
  onPageChange,
}) => {
  const { t } = useTranslation();

  // separate articles with and without image
  const articlesWithPicture = articles.filter((article) => article.images.length);
  const articlesWithOutPicture = articles.filter((article) => !article.images.length);

  // separate slider articles and shuffle the other ones
  const featuredArticles = articlesWithPicture.slice(0, 3);
  const topNews = articlesWithPicture.slice(3, 6);

  // mix articles with a specific ordet
  const shuffledArticles = shuffleArray([...articlesWithPicture.slice(6), ...articlesWithOutPicture]);
  const sortedNews = [...topNews, ...shuffledArticles];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      {/* Search & Filters */}
      <SearchBar userCustomSorts={userCustomSorts} onSearch={onSearch} />

      {/* Featured News Slider */}
      {featuredArticles.length > 0 && <FeaturedSlider featuredArticles={featuredArticles} />}

      {/* Articles Grid or No Data Message */}
      {sortedNews.length ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedNews.map((article, index) => (
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
      {Boolean(sortedNews.length) && (
        <div className="flex justify-center mt-8">
          <Pagination total={totalCount} onChange={onPageChange} className="mt-4" page={currentPage} />
        </div>
      )}
    </div>
  );
};

export default FeedsPageView;
