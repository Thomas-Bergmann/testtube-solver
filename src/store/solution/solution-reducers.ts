import { Action, createReducer, on } from '@ngrx/store';
import { TestTubeSolver } from 'src/app/solver/test-tube-solver';
import { TestTube } from '../tube';
import { solveProblem } from './solution-actions';

import { SolutionState } from "./solution-models";

export const solutionFeatureKey = 'solutionState';
const initialState : SolutionState = {
    moves : []
}

const _solutionReducer = createReducer(
    initialState,
    on(solveProblem, (state, action) => _solveProblem(state, action.tubes)),
);

export function solutionReducer(state: SolutionState | undefined, action: Action) {
    return _solutionReducer(state, action);
}

function _solveProblem(state: SolutionState, tubes : ReadonlyArray<TestTube>)
{
    var solver = new TestTubeSolver();
    return ({
        ...state,
        moves: solver.getSolution(tubes),
    });
}