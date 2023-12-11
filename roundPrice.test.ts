import { roundPrice } from './roundPrice';

describe('Price Formatting with Pattern Tests', () => {
  it('formats price with currency symbol after the amount', () => {
    expect(roundPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
  });

  it('formats price with currency symbol before the amount', () => {
    expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
  });

  it('formats price with currency code and space before the amount', () => {
    expect(roundPrice(1024.2048, 'USD %PRICE%')).toBe('USD 1024.20');
  });

  // Additional test cases can be added here
});
