import FeedCardView from './FeedCard.view';

import type { FC } from 'react';
import type { FeedCardProps } from './FeedCard.types';

const FeedCardController: FC<FeedCardProps> = ({ article }) => {
  return <FeedCardView article={article} />;
};

export default FeedCardController;
