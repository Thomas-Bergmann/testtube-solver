import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ColorState } from './color-models';
import { colorFeatureKey } from './color-reducers';

const selectFeature = createFeatureSelector<ColorState>(colorFeatureKey);

export const selectColors = createSelector(
  selectFeature,
  (state: ColorState) => state.colors
);
