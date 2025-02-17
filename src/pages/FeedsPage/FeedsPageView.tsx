import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const FeedsPageView: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('feedsPage')}</h1>
    </div>
  );
};

export default FeedsPageView;
