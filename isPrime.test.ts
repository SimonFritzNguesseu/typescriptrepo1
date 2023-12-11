import { isPrime } from './isPrime';

describe('isPrime Tests', () => {
  it('returns true for a prime number', () => {
    expect(isPrime(5)).toBe(true);
  });

  it('returns false for a non-prime number', () => {
    expect(isPrime(4)).toBe(false);
  });

  it('returns false for 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('returns false for 0', () => {
    expect(isPrime(0)).toBe(false);
  });

  it('returns false for a negative number', () => {
    expect(isPrime(-3)).toBe(false);
  });

  // Additional test cases can be added here
});
