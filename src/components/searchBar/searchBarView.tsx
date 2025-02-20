import { useState } from 'react';
import {
  Select,
  SelectItem,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  SharedSelection,
} from '@heroui/react';
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
      <div className="flex">
        <label
          htmlFor="resource-selector"
          className="w-20 capitalize text-default-400/80 flex items-center mx-2"
        >
          Resources:
        </label>
        <Select
          id="resource-selector"
          className="min-w-72"
          classNames={{
            base: '',
            trigger:
              'border-none shadow-none h-10 font-normal text-black dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600',
            popoverContent:
              'bg-white text-black dark:bg-gray-800 dark:text-white border-none',
          }}
          placeholder="Choose resources"
          selectionMode="multiple"
          selectedKeys={new Set(selectedResources)}
          onSelectionChange={handleResourceChange as (keys: SharedSelection) => void}
          aria-label="Select resources"
        >
          {resources.map((resource) => (
            <SelectItem key={resource.key} className="text-black dark:text-white">
              {resource.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Advanced Search Button */}
      <Popover
        isOpen={isPopoverOpen}
        onClose={() => setIsPopoverOpen(false)}
        placement="bottom-end"
      >
        <PopoverTrigger>
          <Button
            startContent={<span>⚙️</span>}
            className="bg-transparent border-none text-default-500 dark:text-white"
            onClick={() => setIsPopoverOpen((prev) => !prev)}
            aria-label="Customize feeds"
          >
            Customize Your Feeds
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-white text-black dark:bg-gray-800 dark:text-white shadow-md rounded-lg">
          <AdvancedSearchPopover userCustomSorts={userCustomSorts} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;
