import { useState } from 'react';
import { Select, SelectItem, Button, Popover, PopoverTrigger, PopoverContent, SharedSelection } from '@heroui/react';
import AdvancedSearchPopover from './AdvancedSearchPopover';

const resources = [
  { key: 'newsapi', label: 'NewsAPI' },
  { key: 'guardian', label: 'The Guardian' },
  { key: 'nytimes', label: 'NY Times' },
];

const SearchBar = ({ onResourceSelect, userCustomSorts }: any) => {
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleResourceChange = (keys: Set<string>) => {
    const selectedKeysArray = Array.from(keys);
    setSelectedResources(selectedKeysArray);
    onResourceSelect(selectedKeysArray);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-default-400/20 dark:bg-default-500/20 shadow-md rounded-lg mb-4">
      {/* Resource Selector */}
      <Select
        className="max-w-xs "
        classNames={{
          base: '',
          trigger:
            'border-none shadow-none h-10 font-normal text-white bg-default-400/20 dark:bg-default-600/20 hover:bg-default-400/80 dark:hover:bg-default-500/80',
          popoverContent: 'bg-default-600 dark:bg-default-700 text-white border-none',
        }}
        label="Select Resources"
        placeholder="Choose resources"
        selectionMode="multiple"
        selectedKeys={new Set(selectedResources)}
        onSelectionChange={handleResourceChange as (keys: SharedSelection) => void}
      >
        {resources.map((resource) => (
          <SelectItem key={resource.key} className="text-black">
            {resource.label}
          </SelectItem>
        ))}
      </Select>

      {/* Advanced Search Button */}
      <Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} placement="bottom-end">
        <PopoverTrigger>
          <Button
            startContent={<span>⚙️</span>}
            className="bg-transparent border-none text-default-500"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            Customize Your Feeds
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-white dark:bg-default-500 shadow-md rounded-lg">
          <AdvancedSearchPopover userCustomSorts={userCustomSorts} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;
