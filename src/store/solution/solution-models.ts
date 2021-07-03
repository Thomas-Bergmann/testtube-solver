import { Move } from "../move";

export interface SolutionState {
    your_moves: ReadonlyArray<Move>;
    solution_moves: ReadonlyArray<Move>;
}
