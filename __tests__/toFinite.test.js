import toFinite from '../src/toFinite.js';

describe('toFinite', () => {
  test('converts number to finite number', () => {
    expect(toFinite(3.2)).toBe(3.2);
    expect(toFinite(0)).toBe(0);
  });

  test('converts Infinity to maximum finite number', () => {
    expect(toFinite(Infinity)).toBeLessThan(Number.POSITIVE_INFINITY);
  });

  test('converts -Infinity to minimum finite number', () => {
    expect(toFinite(-Infinity)).toBeGreaterThan(Number.NEGATIVE_INFINITY);
  });

  test('converts NaN to 0', () => {
    expect(toFinite(NaN)).toBe(0);
  });

  test('converts string number to finite number', () => {
    expect(toFinite('3.2')).toBe(3.2);
  });
});