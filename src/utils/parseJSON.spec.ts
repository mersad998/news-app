import { parseJSON } from './parseJSON';

describe('parseJSON', () => {
  it('should parse a valid JSON string', () => {
    const jsonString = '{"name":"John","age":30}';
    const result = parseJSON<{ name: string; age: number }>(jsonString);

    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should return null for an invalid JSON string', () => {
    const invalidJson = '{name:"John",age:30}'; // Invalid JSON format
    const result = parseJSON<{ name: string; age: number }>(invalidJson);

    expect(result).toBeNull();
  });

  it('should return null for an empty string', () => {
    const result = parseJSON<unknown>('');
    expect(result).toBeNull();
  });

  it('should parse an array JSON string', () => {
    const jsonString = '[1, 2, 3, 4]';
    const result = parseJSON<number[]>(jsonString);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should parse a boolean JSON string', () => {
    const jsonString = 'true';
    const result = parseJSON<boolean>(jsonString);

    expect(result).toBe(true);
  });

  it('should parse a number JSON string', () => {
    const jsonString = '42';
    const result = parseJSON<number>(jsonString);

    expect(result).toBe(42);
  });
});
