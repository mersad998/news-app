import { Header } from '@components/Header';

import { APP_NAME } from '../core/constants';

import type { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full">
      <Header title={APP_NAME} />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
