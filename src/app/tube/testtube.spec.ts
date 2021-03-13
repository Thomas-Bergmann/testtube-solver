import { Color } from './color.enum';
import { TestTube } from './testtube';

describe('TestTube', () => {
  it('should create an empty test tube', () => {
    var initial = Array<Color>();
    var tube = new TestTube(initial);
    expect(tube).toBeTruthy();
    expect(tube.isEmpty()).toBe(true);
    expect(tube.isFull()).toBe(false);
    expect(tube.isColorMatching(Color.ORANGE)).toBe(true);
    expect(tube.isColorMatching(Color.RED)).toBe(true);
  });

  it('should match to latest color', () => {
    var initial = Array<Color>();
    initial[1] = Color.ORANGE;
    initial[0] = Color.RED;
    var tube = new TestTube(initial);
    expect(tube).toBeTruthy();
    expect(tube.isEmpty()).toBe(false);
    expect(tube.isFull()).toBe(false);
    expect(tube.isColorMatching(Color.ORANGE)).toBe(true);
    expect(tube.isColorMatching(Color.RED)).toBe(false);
  });
});
