import { validateEmail } from './emailValidator';

describe('Email Validation Tests', () => {
  test('returns true for a valid email address', () => {
    expect(validateEmail('jonatan@gmail.com')).toBe(true);
  });

  test('returns false for an email address without a domain', () => {
    expect(validateEmail('jonatan@gmail')).toBe(false);
  });

  test('returns false for a string that lacks @ symbol', () => {
    expect(validateEmail('jonatan.com')).toBe(false);
  });
});
