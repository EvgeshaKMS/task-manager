import '@testing-library/jest-dom';
import { formatDate, formatDateToOriginal } from './formatDate';

describe('date formatting', () => {
  it('should test transform date format from YYYY-MM-DD to DD.MM.YYYY', function () {
    expect(formatDate('1234-12-13')).toBe('13.12.1234');
    expect(formatDate('')).toBe('');
  });
  it('should test transform date format from DD.MM.YYYY to YYYY-MM-DD', function () {
    expect(formatDateToOriginal('13.12.1234')).toBe('1234-12-13');
    expect(formatDateToOriginal('')).toBe('');
  });
});
