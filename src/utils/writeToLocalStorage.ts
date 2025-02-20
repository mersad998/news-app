// write to local storage indirectly
export const writeToLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value ?? ''));
};
