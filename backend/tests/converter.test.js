import { describe, test, expect } from 'vitest';
import convertToRoman from '../src/converter.js';

describe('Roman Numeral Conversion', () => {
  test('Converts 1 to I', () => {
    expect(convertToRoman(1)).toBe('I');
  });

  test('Converts 3999 to MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });

  test('Handles invalid numbers', () => {
    expect(convertToRoman(0)).toBe('Invalid input');
    expect(convertToRoman(4000)).toBe('Invalid input');
    expect(convertToRoman('hello')).toBe('Invalid input');
  });
});
