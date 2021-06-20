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
    const tube1 = new TestTube().init(Color.AZURE).init(Color.ORANGE).init(Color.BLUE).init(Color.PINK);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.AZURE).init(Color.BLUE).init(Color.PINK);
    const tube3 = new TestTube().init(Color.PINK).init(Color.RED).init(Color.ORANGE).init(Color.RED);
    const tube4 = new TestTube().init(Color.ORANGE).init(Color.PINK).init(Color.RED).init(Color.BLUE);
    const tube5 = new TestTube().init(Color.AZURE).init(Color.AZURE).init(Color.RED).init(Color.BLUE);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 159', () => {
    const tube1 = new TestTube().init(Color.BROWN).init(Color.ORANGE).init(Color.GRAY).init(Color.BROWN);
    const tube2 = new TestTube().init(Color.PURPLE).init(Color.CYAN).init(Color.GREEN).init(Color.PINK);
    const tube3 = new TestTube().init(Color.RED).init(Color.ORANGE).init(Color.GREEN).init(Color.GRAY);
    const tube4 = new TestTube().init(Color.PINK).init(Color.BROWN).init(Color.RED).init(Color.BLUE);
    const tube5 = new TestTube().init(Color.FOREST).init(Color.BLUE).init(Color.YELLOW).init(Color.ORANGE);
    const tube6 = new TestTube().init(Color.BLUE).init(Color.ORANGE).init(Color.AZURE).init(Color.YELLOW);
    const tube7 = new TestTube().init(Color.CYAN).init(Color.AZURE).init(Color.AZURE).init(Color.BLUE);
    const tube8 = new TestTube().init(Color.GREEN).init(Color.FOREST).init(Color.PURPLE).init(Color.PINK);
    const tube9 = new TestTube().init(Color.YELLOW).init(Color.FOREST).init(Color.AZURE).init(Color.GREEN);
    const tubeA = new TestTube().init(Color.CYAN).init(Color.BROWN).init(Color.GRAY).init(Color.PURPLE);
    const tubeB = new TestTube().init(Color.CYAN).init(Color.GRAY).init(Color.PURPLE).init(Color.FOREST);
    const tubeC = new TestTube().init(Color.PINK).init(Color.RED).init(Color.RED).init(Color.YELLOW);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, tube6, tube7, tube8, tube9,
      tubeA, tubeB, tubeC,
      new TestTube(), new TestTube());
    // solver.getSummary(tubes);
    const moves = solver.getSolution(tubes);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
});
