import { isPositiveInteger, isNonNegativeNumber, printNumberWithCommas, isGrantsValid } from './utils';
import defaultGrant from './defaultGrant';

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

  it('tests single grant is invalid', () => {
    expect(isGrantsValid([defaultGrant()])).toBe(false);
    expect(isGrantsValid([{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: null
    }])).toBe(false);
    expect(isGrantsValid([{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '',
      strikeDate: new Date(2019, 0)
    }])).toBe(false);
    expect(isGrantsValid([{
      sharesGranted: '10000',
      totalShares: '',
      strikePrice: '0.001',
      strikeDate: new Date(2019, 0)
    }])).toBe(false);
    expect(isGrantsValid([{
      sharesGranted: '',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2019, 0)
    }])).toBe(false);
  });

  it('tests multiple grants is invalid', () => {
    expect(isGrantsValid([{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2019, 0)
    },{
      sharesGranted: '',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2019, 0)
    }])).toBe(false);
  });

  it('tests single grant is valid', () => {
    expect(isGrantsValid([{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2019, 0)
    }])).toBe(true);
  });

  it('tests multiple grants is valid', () => {
    expect(isGrantsValid([{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2019, 0)
    },{
      sharesGranted: '1000',
      totalShares: '8000000',
      strikePrice: '0.002',
      strikeDate: new Date(2020, 0)
    }])).toBe(true);
  });

});
