import { createSelector } from '@ngrx/store';
import { Color } from 'src/app/tube/color.enum';
import { TestTube } from 'src/app/tube/testtube';

export interface AppState {
  availableColors: ReadonlyArray<Color>;
  usedColors: Map<Color, number>;
  tubes: ReadonlyArray<TestTube>;
  activeColor?: Color;
  activeTube?: number;
}

export const selectAvailableColors = (state: AppState) => state.availableColors;
export const selectActiveColor = (state: AppState) => state.activeColor;
export const selectTubes = (state: AppState) => state.tubes;
