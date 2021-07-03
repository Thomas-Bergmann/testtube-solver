import { createAction, props } from '@ngrx/store';
import { Color } from '../color/color-models';
import { TestTube } from './tube-models';

export const addColorToTube = createAction(
  'Add Color to Tube',
  props<{ color: Color }>()
);

export const resetTubes = createAction('Reset Tubes');

export const selectTube = createAction(
  'Select Tube',
  props<{ tube: TestTube }>()
);

export const deselectTube = createAction('Deselect Tube');

export const applyTubes = createAction(
  'Apply Tubes',
  props<{ tubes: ReadonlyArray<TestTube> }>()
);
