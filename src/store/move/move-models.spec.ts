import { Move } from './move-models';
import { Color } from '../color/color-models';
import { TestTube } from '../tube/tube-models';

describe('Move', () => {
  it('should be possible', () => {
    var tube1 = new TestTube().init(Color.ORANGE);
    var tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE);
    var tubes = new Array<TestTube>();
    tubes.push(tube1, tube2);
    var move = new Move(tubes, 0, 1);
    expect(move.getColor()).toBe(Color.ORANGE);
    expect(move.isPossible()).toBe(true);
  });
  it('should not be possible - wrong color', () => {
    var tube1 = new TestTube().init(Color.RED);
    var tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE);
    var tubes = new Array<TestTube>();
    tubes.push(tube1, tube2);
    var move = new Move(tubes, 0, 1);
    expect(move.getColor()).toBe(Color.RED);
    expect(move.isPossible()).toBe(false);
  });
  it('should not be possible - useless', () => {
    var tube1 = new TestTube().init(Color.RED).init(Color.RED);
    var tube2 = new TestTube();
    var tubes = new Array<TestTube>();
    tubes.push(tube1, tube2);
    var move = new Move(tubes, 0, 1);
    expect(move.isPossible()).toBe(false);
  });
  it('move to same color', () => {
    // create source tubes
    var source1 = new TestTube().init(Color.RED);
    var source2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE);
    var source3 = new TestTube().init(Color.ORANGE).init(Color.RED);
    var sourceTubes = new Array<TestTube>();
    sourceTubes.push(source1, source2, source3);
    var move = new Move(sourceTubes, 0, 2);
    expect(move.isPossible()).toBe(true);
    // create target test tubes
    var target1 = new TestTube();
    var target2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE);
    var target3 = new TestTube().init(Color.ORANGE).init(Color.RED).init(Color.RED);
    var targetTubes = new Array<TestTube>();
    targetTubes.push(target1, target2, target3);
    expect(move.apply()).toEqual(targetTubes);
  });
  it('move to same color - but not all', () => {
    // create source tubes
    var source1 = new TestTube().init(Color.RED).init(Color.RED).init(Color.RED);
    var source2 = new TestTube().init(Color.ORANGE).init(Color.RED);
    var sourceTubes = new Array<TestTube>();
    sourceTubes.push(source1, source2);
    var move = new Move(sourceTubes, 0, 1);
    expect(move.isPossible()).toBe(true);
    var target1 = new TestTube().init(Color.RED);
    var target2 = new TestTube().init(Color.ORANGE).init(Color.RED).init(Color.RED).init(Color.RED);
    var targetTubes = new Array<TestTube>();
    targetTubes.push(target1, target2);
    expect(move.apply()).toEqual(targetTubes);
  });
});
