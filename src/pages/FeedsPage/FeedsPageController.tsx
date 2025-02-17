import { memo, type FC } from 'react';

import FeedsPageView from './FeedsPageView';

const FeedsPageController: FC = () => {
  return <FeedsPageView />;
};

export default memo(FeedsPageController, () => true);
