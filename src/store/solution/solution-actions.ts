import { createAction, props } from '@ngrx/store';
import { Move } from '../move';
import { TestTube } from '../tube';

export const solveProblem = createAction(
  'Solve Problem',
  props<{ tubes : ReadonlyArray<TestTube> }>()
);

export const addMove = createAction(
  'Add Move',
  props<{ tubes: ReadonlyArray<TestTube>, source : TestTube, target : TestTube }>()
);

export const resetMoves = createAction('Reset Moves');
