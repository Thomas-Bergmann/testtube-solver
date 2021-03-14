import { TestTube } from "../tube/testtube";
import { Move } from "../solver/move";

export class TestTubeSolver {
    constructor() {}

    getSolution(tubes:TestTube[]): Array<Move> {
        var possibleMoves = this.findPossibleMoves(tubes);
        var result = Array<Move>();
        for (var nextMove = 0; nextMove < possibleMoves.length; nextMove++) {
            var tubesAfterMove = possibleMoves[nextMove].apply();
            if (this.getWeightOfStep(tubesAfterMove) == 0) {
                result.push(possibleMoves[nextMove]);
                return result;
            }
        }
        return result;
    }

    private getWeightOfStep(tubes:TestTube[]): number {
        var result = 0;
        for (var source = 0; source < tubes.length; source++) {
            result += this.getWeightOfTube(tubes[source]);
        }
        return result;
    }
    private getWeightOfTube(tube:TestTube): number {
        var result = 0;
        if (tube.isEmpty() || tube.isFinished) {
            return result;
        }
        return tube.getNumberOfColorSwitches() + 1;
    }

    private findPossibleMoves(tubes:TestTube[]): Array<Move> {
        var possibleMoves = Array<Move>();
        for (var source = 0; source < tubes.length; source++) {
            for (var target = 0; target < tubes.length; target++) {
                if (source != target) {
                    var move = new Move(tubes, source, target);
                    if (move.isPossible()) {
                        possibleMoves.push(move);
                    }
                }
            }
        }
        return possibleMoves;
    }
}
