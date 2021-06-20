import { Color } from "../color";

export interface LevelState {
    levels: ReadonlyArray<Level>;
}

export class Level {
    level: number;
    colors: ReadonlyArray<Color>;

    constructor(level : number, colors : ReadonlyArray<Color>)
    {
        this.level = level;
        this.colors = colors;
    }
}
