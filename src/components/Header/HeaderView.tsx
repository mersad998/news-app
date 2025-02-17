import type { FC } from 'react';
import type { HeaderViewProps } from './HeaderTypes';

const HeaderView: FC<HeaderViewProps> = ({ title }) => {
  return <div className="w-full h-10">{title}</div>;
};

export default HeaderView;
