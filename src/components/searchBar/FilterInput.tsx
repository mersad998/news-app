import { FC, ChangeEvent } from 'react';
import { Input } from '@heroui/react';

interface FilterInputProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const FilterInput: FC<FilterInputProps> = ({ id, value, onChange, label }) => (
  <div className="flex items-center space-x-2">
    <label htmlFor={id} className="w-20 capitalize">
      {label}:
    </label>
    <Input id={id} value={value} onChange={onChange} placeholder={`Enter ${label}`} className="flex-1" />
  </div>
);

export default FilterInput;
