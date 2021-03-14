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
    expect(tube.isEmpty()).toBe(false);
    expect(tube.isFull()).toBe(false);
    expect(tube.isColorMatching(Color.ORANGE)).toBe(true);
    expect(tube.isColorMatching(Color.RED)).toBe(false);
  });
  it('should count latest color', () => {
    var tube = new TestTube().init(Color.RED).init(Color.ORANGE);
    expect(tube.getAmountOfLatestColor()).toBe(1);
    var tube = new TestTube().init(Color.RED).init(Color.ORANGE).init(Color.ORANGE);
    expect(tube.getAmountOfLatestColor()).toBe(2);
  });
  it('should be finished', () => {
    var tube = new TestTube().init(Color.RED).init(Color.ORANGE);
    expect(tube.isFinished()).toBe(false);
    var tube = new TestTube();
    expect(tube.isFinished()).toBe(true);
    var tube = new TestTube().init(Color.ORANGE).init(Color.ORANGE).init(Color.ORANGE).init(Color.ORANGE);
    expect(tube.isFinished()).toBe(true);
    var tube = new TestTube().init(Color.ORANGE).init(Color.ORANGE).init(Color.ORANGE);
    expect(tube.isFinished()).toBe(false);
  });
  it('should has space', () => {
    var tube = new TestTube().init(Color.RED).init(Color.ORANGE);
    expect(tube.hasSpace(3)).toBe(false);
    expect(tube.hasSpace(2)).toBe(true);
  });
});
