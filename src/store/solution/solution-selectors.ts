import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SolutionState } from "./solution-models";
import { solutionFeatureKey } from './solution-reducers';

const selectFeature = createFeatureSelector<SolutionState>(solutionFeatureKey);

export const selectMoves = createSelector(
    selectFeature,
    (state: SolutionState) => state.moves
  );
