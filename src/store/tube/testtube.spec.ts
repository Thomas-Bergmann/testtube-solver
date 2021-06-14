import { Color } from 'src/store/color/color.enum';
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
  it('should remove color', () => {
    var source = new TestTube().init(Color.RED).init(Color.ORANGE);
    var result = new TestTube().init(Color.RED);
    expect(source.remove(1)).toEqual(result);
    var source = new TestTube().init(Color.RED).init(Color.ORANGE).init(Color.ORANGE);
    expect(source.remove(2)).toEqual(result);
  });
  it('should add color', () => {
    var source = new TestTube().init(Color.ORANGE).init(Color.RED);
    var result = new TestTube().init(Color.ORANGE).init(Color.RED).init(Color.RED).init(Color.RED);
    expect(source.add(Color.RED, 2)).toEqual(result);
  });
  it('should count color switches', () => {
    var tube = new TestTube().init(Color.ORANGE).init(Color.RED);
    expect(tube.getNumberOfColorSwitches()).toBe(1);
    var tube = new TestTube().init(Color.ORANGE).init(Color.RED).init(Color.RED).init(Color.ORANGE);
    expect(tube.getNumberOfColorSwitches()).toBe(2);
  });
  it('should define hash', () => {
    var tube = new TestTube().init(Color.ORANGE).init(Color.RED);
    expect(tube.hash()).toEqual("ORANGE,RED");
  });
});
