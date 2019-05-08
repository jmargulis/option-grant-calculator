import { isPositiveInteger } from './utils';
import { isNonNegativeNumber } from './utils';
import { printNumberWithCommas } from './utils';

describe('utils', () => {

  it('tests positive integers from strings', () => {
    expect(isPositiveInteger('-1')).toBe(false);
    expect(isPositiveInteger('0')).toBe(false);
    expect(isPositiveInteger('1')).toBe(true);
  });

  it('tests non-negative numbers from strings', () => {
    expect(isNonNegativeNumber('-1')).toBe(false);
    expect(isNonNegativeNumber('-0.001')).toBe(false);
    expect(isNonNegativeNumber('0.00')).toBe(true);
    expect(isNonNegativeNumber('0.001')).toBe(true);
    expect(isNonNegativeNumber('1.2')).toBe(true);
  });

  it('tests positive integers from strings', () => {
    expect(printNumberWithCommas(100)).toBe('100.00');
    expect(printNumberWithCommas(1000)).toBe('1,000.00');
    expect(printNumberWithCommas(0.01)).toBe('0.01');
    expect(printNumberWithCommas(1000.01)).toBe('1,000.01');
  });

});
