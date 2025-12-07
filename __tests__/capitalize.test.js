import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  test('capitalizes the first character and lowercases the rest', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('fRed')).toBe('Fred');
  });

  test('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('works with single character', () => {
    expect(capitalize('a')).toBe('A');
  });
});