import { Color } from "../tube/color.enum";
import { TestTube } from "../tube/testtube";

export class Move {
    sourceTube : TestTube;
    targetTube : TestTube;
    private color : Color;

    constructor(source: TestTube, target: TestTube)
    {
        this.sourceTube = source;
        this.targetTube = target;
        this.color = source.getLatestColor();
    }

    getColor():Color
    {
        console.log("Color", this.color);
        return this.color;
    }
}
