import { TestTube } from "src/store/tube";
import { Move } from "src/store/move";
import { Color } from "src/store/color";

export class TestTubeSolver {
    usedSteps = Array<String>();

    constructor() { }

    getSolution(tubes: readonly TestTube[]): Array<Move> {
        return this.getNextStep(tubes, new Array<Move>());
    }

    printMoves(moves: Move[]) {
        var result = "";
        for (var i = 0; i < moves.length; i++) {
            result = result + moves[i].toString() + " ";
        }
        console.log(result);
    }

    getStep(tubes: readonly TestTube[]): String {
        return tubes.map((t) => t.hash()).join(";");
    }

    getSummary(tubes: TestTube[]): boolean {
        var colorMap = new Map<Color, number>();
        for (var i = 0; i < tubes.length; i++) {
            var tube = tubes[i];
            var colors = tube.getColors();
            for (var j = 0; j < colors.length; j++) {
                var color = colors[j];
                var amount = colorMap.get(color);
                if (amount === undefined) {
                    colorMap.set(color, 1);
                } else {
                    amount++;
                    colorMap.set(color, amount);
                }
            }
        }
        colorMap.forEach((value, key) => console.log(key, value));
        return true;
    }

    private getNextStep(tubes: readonly TestTube[], previousMoves: Move[]): Array<Move> {
        var hash = this.getStep(tubes);
        if (this.usedSteps.includes(hash))
        {
            return new Array<Move>();
        }
        this.usedSteps.push(hash);
        // console.log("pre:", previousMoves);
        var possibleMoves = this.findPossibleMoves(tubes);
        if (possibleMoves.length == 0) {
            return new Array<Move>();
        }
        var sortedMoves = this.sortMoves(possibleMoves);
        if (this.isFinished(sortedMoves[0].apply())) {
            return previousMoves.concat(sortedMoves[0]);
        }
        for (var i = 0; i < sortedMoves.length; i++) {
            var option = this.getNextStep(sortedMoves[i].apply(), previousMoves.concat(sortedMoves[i]));
            if (option.length > 0 && this.isFinished(option[option.length - 1].apply())) {
                return option;
            }
        }
        return new Array<Move>();
    }

    private sortMoves(moves: Move[]): Array<Move> {
        return moves.sort((a, b) => this.getWeightOfStep(a.apply()) - this.getWeightOfStep(b.apply()));
    }

    isFinished(tubes: TestTube[]): boolean {
        for (var source = 0; source < tubes.length; source++) {
            if (!tubes[source].isFinished()) {
                return false;
            }
        }
        return true;
    }

    private getWeightOfStep(tubes: TestTube[]): number {
        var result = 0;
        for (var source = 0; source < tubes.length; source++) {
            result += this.getWeightOfTube(tubes[source]);
        }
        return result;
    }

    private getWeightOfTube(tube: TestTube): number {
        if (tube.isEmpty() || tube.isFinished()) {
            return 0;
        }
        return tube.getNumberOfColorSwitches() + 1;
    }

    private findPossibleMoves(tubes: readonly TestTube[]): Array<Move> {
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
