import { createAction, props } from '@ngrx/store';
import { Color } from 'src/app/tube/color.enum';

export const clickTube = createAction(
  'Click Tube',
  props<{ tubeIndex: number }>()
);

export const clickColor = createAction(
  'Click Color',
  props<{ color: Color }>()
);
