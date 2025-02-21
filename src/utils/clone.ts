export const clone = <T extends unknown>(data: T): T => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (_error: unknown) {
    console.warn('_error: ', _error);
    return data;
  }
};
