import { parseJSON } from './parseJSON';

// read from local storage indirectly
export const readFromLocalStorage = <T>(key: string): T | null => {
  const item: string | null = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  return parseJSON<T>(item) ?? null;
};
