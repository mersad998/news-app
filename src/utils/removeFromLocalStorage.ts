// remove from local storage indirectly
export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
