import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LevelState } from "./level-models";
import { levelFeatureKey } from './level-reducers';

const selectFeature = createFeatureSelector<LevelState>(levelFeatureKey);

export const selectLevels = createSelector(
    selectFeature,
    (state: LevelState) => state.levels
  );
