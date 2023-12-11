import { getGenitive } from './getGenitive';

describe('getGenitive Tests', () => {
  it('adds an s to a regular name', () => {
    expect(getGenitive('Jonatan')).toBe('Jonatans');
    expect(getGenitive('Anna')).toBe('Annas');
  });

  it('does not add an s to names ending in s', () => {
    expect(getGenitive('Claes')).toBe('Claes');
    expect(getGenitive('Hampus')).toBe('Hampus');
  });

  it('adds an s to names ending in a', () => {
    expect(getGenitive('Johanna')).toBe('Johannas');
  });

  // Additional test cases can be added here
});
