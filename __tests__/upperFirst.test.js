import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  test('uppercases the first character only', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('returns empty string for empty input', () => {
    expect(upperFirst('')).toBe('');
  });

  test('works with single character', () => {
    expect(upperFirst('a')).toBe('A');
  });
});