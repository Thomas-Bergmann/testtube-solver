import { Color } from "../color";
import { TestTube } from "../tube";

export class Move {
    private tubes: readonly TestTube[];
    private source: number;
    private target: number;
    private color: Color;
    private amount: number;

    constructor(tubes: readonly TestTube[], source: number, target: number) {
        this.tubes = tubes;
        this.source = source;
        this.target = target;
        if (tubes.length == 0)
        {
            this.color = Color.FREE;
            this.amount = 1;
        } else {
            this.color = tubes[this.source].getLatestColor();
            // min free places and amount of top color
            this.amount = tubes[this.target].getSpace() < tubes[this.source].getAmountOfLatestColor() ? tubes[this.target].getSpace() : tubes[this.source].getAmountOfLatestColor();
        }
    }

    getSource(): number {
        return this.source;
    }

    getTarget(): number {
        return this.target;
    }
    getTubesBeforeMove(): readonly TestTube[] {
        return this.tubes;
    }
    getTubesAfterMove(): readonly TestTube[] {
        return this.apply();
    }

    toString(): String {
        return this.color.toString() + "(" + (this.source + 1) + ":" + (this.target+1) + ")";
    }

    getColor(): Color {
        return this.color;
    }

    isPossible(): boolean {
        var targetTube = this.tubes[this.target];
        var sourceTube = this.tubes[this.source];
        // fill not in empty tube if source has only one color
        if (targetTube.isEmpty() && sourceTube.getNumberOfColorSwitches() ==0)
        {
            return false;
        }
        return targetTube.isEmpty() ||
            this.color == targetTube.getLatestColor()
            && targetTube.hasSpace(this.amount);
    }

    apply(): Array<TestTube> {
        var result = Array<TestTube>();
        var sourceTubeUpdated = this.tubes[this.source].remove(this.amount);
        var targetTubeUpdated = this.tubes[this.target].add(this.color, this.amount);
        for (var i = 0; i < this.tubes.length; i++) {
            if (i == this.source) {
                result.push(sourceTubeUpdated);
            } else if (i == this.target) {
                result.push(targetTubeUpdated);
            } else {
                result.push(this.tubes[i]);
            }
        }
        return result;
    }
}
