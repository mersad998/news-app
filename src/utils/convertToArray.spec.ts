import { convertToArray } from './convertToArray';

describe('convertToArray', () => {
  it('should convert a set of strings into an array', () => {
    const set = new Set(['apple', 'banana', 'cherry']);
    const result = convertToArray(set);

    expect(result).toEqual(['apple', 'banana', 'cherry']);
    expect(Array.isArray(result)).toBe(true);
  });

  it('should return an empty array for an empty set', () => {
    const set = new Set<string>();
    const result = convertToArray(set);

    expect(result).toEqual([]);
  });

  it('should maintain order of insertion', () => {
    const set = new Set(['first', 'second', 'third']);
    const result = convertToArray(set);

    expect(result).toEqual(['first', 'second', 'third']);
  });
});
