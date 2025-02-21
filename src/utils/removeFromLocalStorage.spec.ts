import { removeFromLocalStorage } from './removeFromLocalStorage';

describe('removeFromLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should remove an existing item from localStorage', () => {
    const key = 'testKey';
    localStorage.setItem(key, 'testValue');

    removeFromLocalStorage(key);

    expect(localStorage.getItem(key)).toBeNull();
  });

  it('should not throw an error when removing a non-existing key', () => {
    expect(() => removeFromLocalStorage('nonExistingKey')).not.toThrow();
  });

  it('should do nothing if localStorage is already empty', () => {
    localStorage.clear();

    removeFromLocalStorage('someKey');

    expect(localStorage.length).toBe(0);
  });
});
