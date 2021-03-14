import { TestTubeSolver } from './test-tube-solver';
import { Color } from '../tube/color.enum';
import { TestTube } from '../tube/testtube';
import { Move } from './move';

describe('TestTubeSolver', () => {
  const solver = new TestTubeSolver();
  it('should create an instance', () => {
    expect(solver).toBeTruthy();
  });
  it('solve level 1', () => {
    const tube1 = new TestTube().init(Color.ORANGE);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE).init(Color.ORANGE);
    const tubes = Array<TestTube>(tube1, tube2);
    const moves = new Array<Move>();
    moves.push(new Move(tubes, 0, 1));
    expect(solver.getSolution(tubes)).toEqual(moves);
  });
  it('solve level 2', () => {
    const tube1 = new TestTube().init(Color.BLUE).init(Color.ORANGE).init(Color.BLUE).init(Color.ORANGE);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.BLUE).init(Color.ORANGE).init(Color.BLUE);
    const tube3 = new TestTube();
    const tubes = Array<TestTube>(tube1, tube2, tube3);
    const moves = solver.getSolution(tubes);
    solver.printMoves(moves);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
});
