import { readFromLocalStorage } from './readFromLocalStorage';

describe('readFromLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return parsed JSON data when valid JSON is stored', () => {
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    localStorage.setItem(key, JSON.stringify(value));

    const result = readFromLocalStorage<typeof value>(key);
    expect(result).toEqual(value);
  });

  it('should return null when the key does not exist', () => {
    const result = readFromLocalStorage<unknown>('nonExistingKey');
    expect(result).toBeNull();
  });

  it('should return null when the stored value is not valid JSON', () => {
    const key = 'invalidKey';
    localStorage.setItem(key, '{name:John, age:30}'); // Invalid JSON

    const result = readFromLocalStorage<unknown>(key);
    expect(result).toBeNull();
  });

  it('should return null when localStorage contains an empty string', () => {
    const key = 'emptyKey';
    localStorage.setItem(key, '');

    const result = readFromLocalStorage<unknown>(key);
    expect(result).toBeNull();
  });

  it('should return parsed primitive values if stored as JSON', () => {
    const key = 'numberKey';
    localStorage.setItem(key, JSON.stringify(42));

    const result = readFromLocalStorage<number>(key);
    expect(result).toBe(42);
  });

  it('should return parsed boolean values if stored as JSON', () => {
    const key = 'boolKey';
    localStorage.setItem(key, JSON.stringify(true));

    const result = readFromLocalStorage<boolean>(key);
    expect(result).toBe(true);
  });
});
