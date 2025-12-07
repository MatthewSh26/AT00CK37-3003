import divide from '../src/divide.js';

describe('divide', () => {
  test('returns 1 when dividing two non-zero numbers', () => {
    expect(divide(6, 4)).toBe(1);
    expect(divide(10, 2)).toBe(1);
  });

  test('returns NaN when divisor is 0', () => {
    expect(divide(6, 0)).toBeNaN();
  });
});