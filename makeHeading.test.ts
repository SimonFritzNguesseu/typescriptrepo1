import { makeHeading } from './makeHeading';

describe('HTML Heading Creation Tests', () => {
  it('creates an H1 heading', () => {
    expect(makeHeading('Hello', 1)).toBe('<h1>Hello</h1>');
  });

  it('creates an H2 heading', () => {
    expect(makeHeading('Next level', 2)).toBe('<h2>Next level</h2>');
  });

  it('throws an error for invalid heading levels', () => {
    expect(() => makeHeading('Invalid', 0)).toThrow('Invalid heading level');
    expect(() => makeHeading('Invalid', 7)).toThrow('Invalid heading level');
    expect(() => makeHeading('Invalid', 3.5)).toThrow('Invalid heading level');
  });

  // Additional test cases can be added here
});
