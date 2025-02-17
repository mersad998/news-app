import { Header } from '@components/Header';

import { APP_NAME } from '../core/constants';

import type { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header title={APP_NAME} />

      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
