import { validateZip } from './validateZip';

describe('Zip Code Validation Tests', () => {
  it('should return true for a valid 5-digit zip code', () => {
    expect(validateZip('12345')).toBe(true);
  });

  it('should return false for a 4-digit zip code', () => {
    expect(validateZip('1234')).toBe(false);
  });

  it('should return false for a 6-digit zip code', () => {
    expect(validateZip('123456')).toBe(false);
  });

  it('should return false for a non-numeric zip code', () => {
    expect(validateZip('abcde')).toBe(false);
  });

  // Additional test cases can be added here
});
