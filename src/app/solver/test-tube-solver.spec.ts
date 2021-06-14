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
  it('solve level 165', () => {
    const tube1 = new TestTube().init(Color.AZURE).init(Color.GRAY).init(Color.GREEN).init(Color.BLUE);
    const tube2 = new TestTube().init(Color.PINK).init(Color.GREEN).init(Color.BLUE).init(Color.RED);
    const tube3 = new TestTube().init(Color.BROWN).init(Color.GREEN).init(Color.FOREST).init(Color.AZURE);
    const tube4 = new TestTube().init(Color.PURPLE).init(Color.ORANGE).init(Color.PINK).init(Color.YELLOW);
    const tube5 = new TestTube().init(Color.FOREST).init(Color.BROWN).init(Color.GREEN).init(Color.RED);
    const tube6 = new TestTube().init(Color.PURPLE).init(Color.ORANGE).init(Color.PURPLE).init(Color.BLUE);
    const tube7 = new TestTube().init(Color.CYAN).init(Color.ORANGE).init(Color.BROWN).init(Color.RED);
    const tube8 = new TestTube().init(Color.YELLOW).init(Color.AZURE).init(Color.ORANGE).init(Color.AZURE);
    const tube9 = new TestTube().init(Color.PINK).init(Color.GRAY).init(Color.GRAY).init(Color.PINK);
    const tubeA = new TestTube().init(Color.FOREST).init(Color.FOREST).init(Color.BLUE).init(Color.YELLOW);
    const tubeB = new TestTube().init(Color.RED).init(Color.BROWN).init(Color.CYAN).init(Color.PURPLE);
    const tubeC = new TestTube().init(Color.CYAN).init(Color.YELLOW).init(Color.CYAN).init(Color.GRAY);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, tube6, tube7, tube8, tube9,
      tubeA, tubeB, tubeC,
      new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 175', () => {
    const tube1 = new TestTube().init(Color.ORANGE).init(Color.GREEN).init(Color.RED).init(Color.PURPLE);
    const tube2 = new TestTube().init(Color.YELLOW).init(Color.BROWN).init(Color.PINK).init(Color.PINK);
    const tube3 = new TestTube().init(Color.ORANGE).init(Color.GRAY).init(Color.AZURE).init(Color.BLUE);
    const tube4 = new TestTube().init(Color.CYAN).init(Color.BLUE).init(Color.YELLOW).init(Color.ORANGE);
    const tube5 = new TestTube().init(Color.PINK).init(Color.BLUE).init(Color.BLUE).init(Color.GREEN);
    const tube6 = new TestTube().init(Color.BROWN).init(Color.GRAY).init(Color.PURPLE).init(Color.AZURE);
    const tube7 = new TestTube().init(Color.FOREST).init(Color.PINK).init(Color.RED).init(Color.BROWN);

    const tube8 = new TestTube().init(Color.ORANGE).init(Color.GRAY).init(Color.FOREST).init(Color.CYAN);
    const tube9 = new TestTube().init(Color.RED).init(Color.GREEN).init(Color.FOREST).init(Color.AZURE);
    const tubeA = new TestTube().init(Color.AZURE).init(Color.CYAN).init(Color.YELLOW).init(Color.RED);
    const tubeB = new TestTube().init(Color.GREEN).init(Color.GRAY).init(Color.BROWN).init(Color.YELLOW);
    const tubeC = new TestTube().init(Color.PURPLE).init(Color.FOREST).init(Color.CYAN).init(Color.PURPLE);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, tube6, tube7, tube8, tube9,
      tubeA, tubeB, tubeC,
      new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    // solver.printMoves(moves);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 227', () => {
    const tube1 = new TestTube().init(Color.PINK).init(Color.AZURE).init(Color.YELLOW).init(Color.CYAN);
    const tube2 = new TestTube().init(Color.PINK).init(Color.BROWN).init(Color.RED).init(Color.FOREST);
    const tube3 = new TestTube().init(Color.AZURE).init(Color.GRAY).init(Color.ORANGE).init(Color.CYAN);
    const tube4 = new TestTube().init(Color.FOREST).init(Color.RED).init(Color.GRAY).init(Color.PINK);
    const tube5 = new TestTube().init(Color.CYAN).init(Color.YELLOW).init(Color.RED).init(Color.CYAN);
    const tube6 = new TestTube().init(Color.AZURE).init(Color.PURPLE).init(Color.GREEN).init(Color.PINK);
    const tube7 = new TestTube().init(Color.PURPLE).init(Color.FOREST).init(Color.BLUE).init(Color.GRAY);

    const tube8 = new TestTube().init(Color.GRAY).init(Color.ORANGE).init(Color.YELLOW).init(Color.PURPLE);
    const tube9 = new TestTube().init(Color.YELLOW).init(Color.ORANGE).init(Color.BLUE).init(Color.BROWN);
    const tubeA = new TestTube().init(Color.BROWN).init(Color.AZURE).init(Color.PURPLE).init(Color.FOREST);
    const tubeB = new TestTube().init(Color.RED).init(Color.ORANGE).init(Color.BLUE).init(Color.GREEN);
    const tubeC = new TestTube().init(Color.BROWN).init(Color.BLUE).init(Color.GREEN).init(Color.GREEN);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, tube6, tube7, tube8, tube9,
      tubeA, tubeB, tubeC,
      new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    // solver.printMoves(moves);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
  it('solve level 483', () => {
    const tube1 = new TestTube().init(Color.BROWN).init(Color.PURPLE).init(Color.CYAN).init(Color.PINK);
    const tube2 = new TestTube().init(Color.BLUE).init(Color.CYAN).init(Color.FOREST).init(Color.BLUE);
    const tube3 = new TestTube().init(Color.ORANGE).init(Color.RED).init(Color.AZURE).init(Color.CYAN);
    const tube4 = new TestTube().init(Color.GREEN).init(Color.YELLOW).init(Color.YELLOW).init(Color.GREEN);
    const tube5 = new TestTube().init(Color.PINK).init(Color.BLUE).init(Color.GRAY).init(Color.AZURE);
    const tube6 = new TestTube().init(Color.AZURE).init(Color.FOREST).init(Color.BLUE).init(Color.PURPLE);
    const tube7 = new TestTube().init(Color.BROWN).init(Color.ORANGE).init(Color.YELLOW).init(Color.FOREST);

    const tube8 = new TestTube().init(Color.BROWN).init(Color.YELLOW).init(Color.AZURE).init(Color.GRAY);
    const tube9 = new TestTube().init(Color.GREEN).init(Color.RED).init(Color.PINK).init(Color.ORANGE);
    const tubeA = new TestTube().init(Color.GRAY).init(Color.ORANGE).init(Color.PINK).init(Color.PURPLE);
    const tubeB = new TestTube().init(Color.BROWN).init(Color.GREEN).init(Color.FOREST).init(Color.RED);
    const tubeC = new TestTube().init(Color.GRAY).init(Color.RED).init(Color.PURPLE).init(Color.CYAN);
    const tubes = Array<TestTube>(tube1, tube2, tube3, tube4, tube5, tube6, tube7, tube8, tube9,
      tubeA, tubeB, tubeC,
      new TestTube(), new TestTube());
    const moves = solver.getSolution(tubes);
    solver.printMoves(moves);
    expect(solver.isFinished(moves[moves.length - 1].apply())).toBe(true);
  });
});
