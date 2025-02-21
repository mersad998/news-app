import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectItem, Button, Popover, PopoverTrigger, PopoverContent, SharedSelection } from '@heroui/react';
import { convertToArray } from '@utils/convertToArray';
import { NewsResources } from '@providers/dataProvider/dataProviderTypes';

import AdvancedSearchPopover from './AdvancedSearchPopover';
import { SearchBarViewProps } from './searchBarTypes';

const resources = [
  { key: NewsResources.NewsApi, label: 'NewsAPI' },
  { key: NewsResources.TheGuardian, label: 'The Guardian' },
  { key: NewsResources.NewYorkTimes, label: 'NY Times' },
];

const SearchBarView: FC<SearchBarViewProps> = ({ onResourceSelect, userCustomSorts, selectedResources }) => {
  const { t } = useTranslation();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleResourceChange = (keys: Set<string>): void => {
    const selectedKeysArray = convertToArray(keys);
    onResourceSelect(selectedKeysArray);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-default-400/20 dark:bg-default-500/20 shadow-md rounded-lg mb-4">
      <div className="flex">
        <label htmlFor="resource-selector" className="w-20 capitalize flex items-center mx-2">
          {t('search.resources')}:
        </label>
        <Select
          id="resource-selector"
          className="min-w-72"
          selectionMode="multiple"
          selectedKeys={selectedResources}
          onSelectionChange={handleResourceChange as (keys: SharedSelection) => void}
          placeholder={t('search.chooseResources')}
        >
          {resources.map((resource) => {
            return <SelectItem key={resource.key}>{resource.label}</SelectItem>;
          })}
        </Select>
      </div>

      <Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} placement="bottom-end">
        <PopoverTrigger>
          <Button onClick={() => setIsPopoverOpen((prev) => !prev)}>{t('search.customizeFeeds')}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <AdvancedSearchPopover userCustomSorts={userCustomSorts} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBarView;
