import { isLowerCase } from './isLowerCase';

describe('isLowerCase Tests', () => {
  it('returns true for all lowercase letters', () => {
    expect(isLowerCase('hello')).toBe(true);
  });

  it('returns false for uppercase letters', () => {
    expect(isLowerCase('Hello')).toBe(false);
  });

  it('returns false for all uppercase letters', () => {
    expect(isLowerCase('HELLO')).toBe(false);
  });

  it('returns false for numbers', () => {
    expect(isLowerCase('123')).toBe(false);
  });

  it('returns false for mixed alphanumeric characters', () => {
    expect(isLowerCase('hello123')).toBe(false);
  });

  it('returns false for special characters', () => {
    expect(isLowerCase('hello!')).toBe(false);
  });

  // Additional test cases can be added here
});
