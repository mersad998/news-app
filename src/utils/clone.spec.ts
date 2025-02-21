import { clone } from './clone';

describe('clone function', () => {
  it('should deeply clone an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = clone(obj);

    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj); // Ensure it's a new object
    expect(clonedObj.b).not.toBe(obj.b); // Ensure deep cloning
  });

  it('should deeply clone an array', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = clone(arr);

    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr); // Ensure it's a new array
    expect(clonedArr[1]).not.toBe(arr[1]); // Ensure deep cloning
    expect(clonedArr[2]).not.toBe(arr[2]); // Ensure nested array is cloned
  });

  it('should return primitive values unchanged', () => {
    expect(clone(42)).toBe(42);
    expect(clone('hello')).toBe('hello');
    expect(clone(true)).toBe(true);
    expect(clone(null)).toBe(null);
    expect(clone(undefined)).toBe(undefined);
  });

  it('should handle circular references gracefully', () => {
    const obj: any = { a: 1 };
    obj.self = obj;

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    const clonedObj = clone(obj);
    expect(clonedObj).toBe(obj); // Should return the original object
    expect(consoleWarnSpy).toHaveBeenCalledWith('_error: ', expect.any(Error));

    consoleWarnSpy.mockRestore();
  });
});
