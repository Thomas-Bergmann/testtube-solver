import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SolutionState } from "./solution-models";
import { solutionFeatureKey } from './solution-reducers';

const selectFeature = createFeatureSelector<SolutionState>(solutionFeatureKey);

export const selectSolutionMoves = createSelector(
    selectFeature,
    (state: SolutionState) => state.solution_moves
  );

export const selectYourMoves = createSelector(
  selectFeature,
  (state: SolutionState) => state.your_moves
);

export const selectYourLastMove = createSelector(
  selectFeature,
  (state: SolutionState) => state.your_moves[state.your_moves.length - 1]
);
