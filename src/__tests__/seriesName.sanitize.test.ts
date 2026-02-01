import { SeriesName } from '../utils/seriesName';

describe('SeriesName input sanitization', () => {
  it('should strip single quotes from series name', () => {
    const s = new SeriesName("'batman vol 2'");
    expect(s.toSlug()).toBe('Batman_Vol_2');
  });

  it('should strip double quotes from series name', () => {
    const s = new SeriesName('"batman vol 2"');
    expect(s.toSlug()).toBe('Batman_Vol_2');
  });

  it('should handle unquoted input', () => {
    const s = new SeriesName('batman vol 2');
    expect(s.toSlug()).toBe('Batman_Vol_2');
  });

  it('should not break for extra spaces or mixed quotes', () => {
    const s = new SeriesName('  "batman vol 2"  ');
    expect(s.toSlug()).toBe('Batman_Vol_2');
  });
});
