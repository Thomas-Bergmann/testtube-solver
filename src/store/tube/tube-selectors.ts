import { createSelector, createFeatureSelector } from '@ngrx/store';

import { TubeState } from './tube-models';
import { tubeFeatureKey } from './tube-reducers';

const selectFeature = createFeatureSelector<TubeState>(tubeFeatureKey);

export const selectTubes = createSelector(
  selectFeature,
  (state: TubeState) => state.tubes
);

export const selectActiveTube = createSelector(
  selectFeature,
  (state: TubeState) => state.tubes[state.active_tube]
);
