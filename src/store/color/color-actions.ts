import { createAction, props } from '@ngrx/store';
import { Color } from './color-models';

export const addColor = createAction(
  'Add Color',
  props<{ color: Color }>()
);

export const incrementColor = createAction(
  'Increment Color',
  props<{ color: Color }>()
);

export const resetColors = createAction(
  'Reset Color'
);
