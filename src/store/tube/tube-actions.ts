import { createAction, props } from '@ngrx/store';
import { Color } from '../color/color-models';

export const addColorToTube = createAction(
  'Add Color to Tube',
  props<{ color: Color }>()
);

export const resetTubes = createAction(
  'Reset Tubes'
);
