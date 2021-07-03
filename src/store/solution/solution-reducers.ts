import { Action, createReducer, on } from '@ngrx/store';
import { TestTubeSolver } from 'src/app/solver/test-tube-solver';
import { Move } from '../move';
import { findTube, TestTube } from '../tube';
import { addMove, resetMoves, solveProblem } from './solution-actions';

import { SolutionState } from "./solution-models";

export const solutionFeatureKey = 'solutionState';
const initialState : SolutionState = {
    solution_moves : [],
    your_moves: []
}

const _solutionReducer = createReducer(
    initialState,
    on(solveProblem, (state, action) => _solveProblem(state, action.tubes)),
    on(addMove, (state, action) => _addMove(state, action.tubes, action.source, action.target)),
    on(resetMoves, (state, action) => _resetMoves(state)),
);

export function solutionReducer(state: SolutionState | undefined, action: Action) {
    return _solutionReducer(state, action);
}

function _solveProblem(state: SolutionState, tubes : ReadonlyArray<TestTube>)
{
    var solver = new TestTubeSolver();
    return ({
        ...state,
        solution_moves: solver.getSolution(tubes),
    });
}

function _resetMoves(state: SolutionState)
{
    return ({
        ...state,
        your_moves: [],
        solution_moves: []
    });
}

function _addMove(state: SolutionState, tubes : ReadonlyArray<TestTube>, source : TestTube, target : TestTube)
{
    var move = new Move(tubes, findTube(tubes, source), findTube(tubes, target));
    return ({
        ...state,
        your_moves: move.isPossible() ? _addMoveToYourMoves(state.your_moves, move) : state.your_moves,
    });
}

function _addMoveToYourMoves(moves: readonly Move[], move: Move) {
    var result : Move[] = [];
    moves.forEach(m => result.push(m));
    result.push(move);
    return result;
}
