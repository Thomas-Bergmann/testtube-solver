import { createAction, props } from '@ngrx/store';
import { TestTube } from '../tube';

export const solveProblem = createAction(
  'Solve Problem',
  props<{ tubes : ReadonlyArray<TestTube> }>()
);
