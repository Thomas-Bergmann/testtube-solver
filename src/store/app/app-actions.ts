import { createAction, props } from '@ngrx/store';
import { Color } from 'src/store/color';

export const addColor = createAction(
  'Add Color',
  props<{ color: Color }>()
);

export const clickColor = createAction(
  'Click Color',
  props<{ color: Color }>()
);
