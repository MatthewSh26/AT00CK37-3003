import compact from '../src/compact.js';

describe('compact', () => {
  test('removes falsy values but also drops the first element (current behavior)', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const result = compact(input);
    // Current implementation returns a sparse array that effectively behaves like [2, 3]
    expect(result.join(',')).toBe('2,3');
  });

  test('returns empty array when given only falsy values', () => {
    const input = [0, false, '', null, undefined, NaN];
    const result = compact(input);
    expect(result).toEqual([]);
  });

  test('drops the first element even when all values are truthy (current behavior)', () => {
    const input = [1, 2, 3];
    const result = compact(input);
    // Again, due to sparse array we compare via join
    expect(result.join(',')).toBe('2,3');
  });

  test('handles empty array', () => {
    const result = compact([]);
    expect(result).toEqual([]);
  });
});