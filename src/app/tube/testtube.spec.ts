import { Color } from './color.enum';
import { Testtube } from './testtube';

describe('Testtube', () => {
  it('should create an empty test tube', () => {
    var initial = Array<Color>();
    var tube = new Testtube(initial);
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
    var tube = new Testtube(initial);
    expect(tube).toBeTruthy();
    expect(tube.isEmpty()).toBe(false);
    expect(tube.isFull()).toBe(false);
    expect(tube.isColorMatching(Color.ORANGE)).toBe(true);
    expect(tube.isColorMatching(Color.RED)).toBe(false);
  });
});
