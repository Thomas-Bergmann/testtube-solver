import { Color } from "../tube/color.enum";
import { TestTube } from "../tube/testtube";

export class Move {
    private sourceTube: TestTube;
    private targetTube: TestTube;
    private color: Color;
    private amount: number;

    constructor(source: TestTube, target: TestTube) {
        this.sourceTube = source;
        this.targetTube = target;
        this.color = source.getLatestColor();
        this.amount = source.getAmountOfLatestColor();
    }

    getColor(): Color {
        return this.color;
    }

    isPossible(): boolean {
        return this.targetTube.isEmpty() ||
            this.color == this.targetTube.getLatestColor()
            && this.targetTube.hasSpace(this.amount);
    }
}
