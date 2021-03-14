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
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 3', () => {
    const tube1 = new TestTube().init(Color.BLUE).init(Color.ORANGE).init(Color.RED).init(Color.BLUE);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE).init(Color.RED).init(Color.BLUE);
    const tube3 = new TestTube().init(Color.RED).init(Color.BLUE).init(Color.ORANGE).init(Color.RED);
    const tubes = Array<TestTube>(tube1, tube2, tube3, new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 4', () => {
    const tube1 = new TestTube().init(Color.BLUE).init(Color.RED).init(Color.ORANGE).init(Color.ORANGE);
    const tube2 = new TestTube().init(Color.BLUE).init(Color.RED).init(Color.BLUE).init(Color.RED);
    const tube3 = new TestTube().init(Color.ORANGE).init(Color.BLUE).init(Color.RED).init(Color.ORANGE);
    const tubes = Array<TestTube>(tube1, tube2, tube3, new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 5', () => {
    const tube1 = new TestTube().init(Color.AQUA).init(Color.ORANGE).init(Color.BLUE).init(Color.PINK);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.AQUA).init(Color.BLUE).init(Color.PINK);
    const tube3 = new TestTube().init(Color.PINK).init(Color.RED).init(Color.ORANGE).init(Color.RED);
    const tube4 = new TestTube().init(Color.ORANGE).init(Color.PINK).init(Color.RED).init(Color.BLUE);
    const tube5 = new TestTube().init(Color.AQUA).init(Color.AQUA).init(Color.RED).init(Color.BLUE);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
});
