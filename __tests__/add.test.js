// __tests__/add.test.js
import add from '../src/add.js';

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('returns the number if second argument is undefined', () => {
    expect(add(5, undefined)).toBe(5);
  });

  test('returns the number if first argument is undefined', () => {
    expect(add(undefined, 7)).toBe(7);
  });

  test('concatenates strings when both arguments are strings', () => {
    expect(add('a', 'b')).toBe('ab');
  });

  test('concatenates string and number as strings', () => {
    expect(add('a', 1)).toBe('a1');
  });
});