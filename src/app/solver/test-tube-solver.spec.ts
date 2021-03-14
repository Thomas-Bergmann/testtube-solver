import { TestTubeSolver } from './test-tube-solver';
import { Color } from '../tube/color.enum';
import { TestTube } from '../tube/testtube';
import { Move } from './move';

describe('TestTubeSolver', () => {
  it('should create an instance', () => {
    expect(new TestTubeSolver()).toBeTruthy();
  });
  it('solve level 1', () => {
    const tube1 = new TestTube().init(Color.ORANGE);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE).init(Color.ORANGE);
    const tubes = Array<TestTube>(tube1, tube2);
    const solver = new TestTubeSolver();
    const moves = new Array<Move>();
    moves.push(new Move(tubes, 0, 1));
    expect(solver.getSolution(tubes)).toEqual(moves);
  });
});
