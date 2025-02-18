import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@heroui/react';

import { NewsResources } from '../../core/dataProvider/dataProviderTypes';

import type { FeedCardViewProps } from './feedCard.type';

const FeedCardView: FC<FeedCardViewProps> = (props) => {
  const { article } = props;
  const { author, date, description, images, resource, sourceName, title, url } = article;

  const resourceLogo =
    resource === NewsResources.NewsApi ? '/na.png' : resource === NewsResources.TheGuardian ? '/tg.png' : '/nt.png';

  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      {images[0] && <img src={images[0]} alt={title} className="w-full h-56 object-cover" />}

      <div className="p-4">
        <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
          <img src={resourceLogo} alt={sourceName} className="w-6 h-6" />
          <span>
            {sourceName} / {author}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center text-gray-500 text-xs">
          <span>{date}</span>
          <Button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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
