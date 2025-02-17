import { FC, memo, PropsWithChildren } from 'react';

import AppLayoutView from './AppLayoutView';

const AppLayoutController: FC<PropsWithChildren> = ({ children }) => {
  return <AppLayoutView children={children} />;
};

export default memo(AppLayoutController, () => false);
