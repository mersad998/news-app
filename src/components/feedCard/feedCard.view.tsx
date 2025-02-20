import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@heroui/react';
import { NewsResources } from '@providers/dataProvider/dataProviderTypes';

import type { FeedCardProps } from './feedCard.type';

const FeedCardView: FC<FeedCardProps> = ({ article }) => {
  const { author, date, description, images, resource, sourceName, title, url } = article;
  const { t } = useTranslation();

  const resourceLogo = {
    [NewsResources.NewsApi as string]: '/na.png',
    [NewsResources.TheGuardian as string]: '/tg.png',
    [NewsResources.NewYorkTimes as string]: '/nt.png',
  }[resource];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
      {images[0] && <img src={images[0]} alt={title} className="w-full h-56 object-contain" />}

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm mb-2">
          <img src={resourceLogo} alt={sourceName} className="w-6 h-6" />
          <span>
            {sourceName} / {author}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex justify-between items-center text-gray-500 dark:text-gray-300 text-xs mt-auto">
          <span>{date}</span>
          <Button
            className="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => window.open(url, '_blank')}
          >
            {t('feeds.continueToFullPage')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedCardView;
