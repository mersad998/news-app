import { type FC } from 'react';

import FeedCardView from './feedCard.view';

import type { FeedCardControllerProps } from './feedCard.type';

const FeedCardController: FC<FeedCardControllerProps> = (props) => {
  const { article } = props;

  return <FeedCardView article={article} />;
};

export default FeedCardController;
