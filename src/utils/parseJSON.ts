// parse json with try catch and generic type
export const parseJSON = <T>(stringifiedJson: string): T | null => {
  let parsed: T | null = null;

  try {
    parsed = JSON.parse(stringifiedJson) as T;
  } catch (err) {
    console.error('parseJSON: %s', stringifiedJson);
  }

  return parsed;
};
