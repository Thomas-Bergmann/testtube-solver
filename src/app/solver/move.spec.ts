import { Move } from './move';
import { Color } from '../tube/color.enum';
import { TestTube } from '../tube/testtube';

describe('Move', () => {
  it('should create an instance', () => {
    var tube1 = new TestTube().init(Color.ORANGE);
    var tube2 = new TestTube().init(Color.ORANGE).init(Color.ORANGE);
    var move = new Move(tube1, tube2);
    expect(move).toBeTruthy();
    expect(move.getColor()).toBe(Color.ORANGE);
  });
});
