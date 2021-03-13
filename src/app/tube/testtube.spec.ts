import { Color } from './color.enum';
import { TestTube } from './testtube';

describe('TestTube', () => {
  it('should create an empty test tube', () => {
    var tube = new TestTube();
    expect(tube).toBeTruthy();
    expect(tube.isEmpty()).toBe(true);
    expect(tube.isFull()).toBe(false);
    expect(tube.isColorMatching(Color.ORANGE)).toBe(true);
    expect(tube.isColorMatching(Color.RED)).toBe(true);
  });

  it('should match to latest color', () => {
    var tube = new TestTube().init(Color.RED).init(Color.ORANGE);
    expect(tube).toBeTruthy();
    expect(tube.isEmpty()).toBe(false);
    expect(tube.isFull()).toBe(false);
    expect(tube.isColorMatching(Color.ORANGE)).toBe(true);
    expect(tube.isColorMatching(Color.RED)).toBe(false);
  });
});
