import { Color } from "../tube/color.enum";
import { TestTube } from "../tube/testtube";

export class Move {
    private tubes: Array<TestTube>;
    private source: number;
    private target: number;
    private color: Color;
    private amount: number;

    constructor(tubes: TestTube[], source: number, target: number) {
        this.tubes = tubes;
        this.source = source;
        this.target = target;
        this.color = tubes[this.source].getLatestColor();
        this.amount = tubes[this.source].getAmountOfLatestColor();
    }

    toString(): String {
        return this.color.toString() + "(" + (this.source + 1) + ":" + (this.target+1) + ")";
    }

    getColor(): Color {
        return this.color;
    }

    isPossible(): boolean {
        var targetTube = this.tubes[this.target];
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
