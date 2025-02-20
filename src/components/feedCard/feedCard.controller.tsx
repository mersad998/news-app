import FeedCardView from './feedCard.view';

import type { FC } from 'react';
import type { FeedCardProps } from './feedCard.type';

const FeedCardController: FC<FeedCardProps> = ({ article }) => {
  return <FeedCardView article={article} />;
};

export default FeedCardController;
