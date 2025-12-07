import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  test('returns value when it is not null or undefined', () => {
    expect(defaultTo(5, 10)).toBe(5);
  });

  test('returns default value when value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('returns default value when value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('returns NaN when value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBeNaN();
  });
});