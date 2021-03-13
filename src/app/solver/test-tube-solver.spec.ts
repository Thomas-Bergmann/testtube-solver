import { TestTubeSolver } from './test-tube-solver';
import { Color } from '../tube/color.enum';
import { TestTube } from '../tube/testtube';

describe('TestTubeSolver', () => {
  it('should create an instance', () => {
    const tube1 = new TestTube().init(Color.ORANGE);
    const tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE).init(Color.ORANGE);
    const tubes = Array<TestTube>(tube1, tube2);
    expect(new TestTubeSolver(tubes)).toBeTruthy();
  });
});
