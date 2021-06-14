import { Color, ColorCounter } from 'src/store/color';
import { TestTube } from 'src/store/tube';

export interface AppState {
  colors: ReadonlyArray<ColorCounter>;
  tubes: ReadonlyArray<TestTube>;
  activeColor?: Color;
  activeTube?: number;
}

export const selectColors = (state: AppState) => state.colors;
export const selectActiveColor = (state: AppState) => state.activeColor;
export const selectTubes = (state: AppState) => state.tubes;
