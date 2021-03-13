import { TestTube } from "../tube/testtube";
import { Move } from "../solver/move";

export class TestTubeSolver {
    tubes = Array<TestTube>();

    constructor(initial: TestTube[]) {
        for (var i = 0; i < initial.length; i++) {
            this.tubes[i] = initial[i];
        }
    }
    getSolution(): Array<Move> {
        var result = Array<Move>();
        return result;
    }
}
