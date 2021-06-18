import { Color } from 'src/store/color';

export interface TubeState {
    tubes: ReadonlyArray<TestTube>;
}

export class TestTube {
    content = Array<Color>();

    constructor() { }

    init(color: Color): TestTube {
        this.content.push(color);
        return this;
    }
    getColors(): Array<Color> {
        return this.content;
    }

    isFull(): boolean {
        return 4 == this.content.length;
    }

    hash(): String {
        return this.content.join(",");
    }

    isFinished(): boolean {
        if (this.isEmpty()) {
            return true;
        }
        if (!this.isFull()) {
            return false;
        }
        var color = this.content[0];
        for (var i = 1; i < 4; i++) {
            if (color != this.content[i]) {
                return false;
            }
        }
        return true;
    }

    isColorMatching(color: Color): boolean {
        return this.isEmpty() || this.getLatestColor() == color;
    }

    isEmpty(): boolean {
        return this.content.length == 0;
    }

    getLatestColor(): Color {
        if (this.isEmpty()) {
            return Color.FREE;
        }
        return this.content[this.content.length - 1];
    }

    getAmountOfLatestColor(): number {
        var result = 2;
        var color = this.getLatestColor();
        while (this.content[this.content.length - result] == color) {
            result++;
        }
        return result - 1;
    }

    hasSpace(requiredSpace: number): boolean {
        return requiredSpace < 5 - this.content.length;
    }

    add(color: Color, amount: number): TestTube {
        var result = new TestTube();
        for (var i = 0; i < this.content.length; i++) {
            result.init(this.content[i]);
        }
        for (var i = 0; i < amount; i++) {
            result.init(color);
        }
        return result;
    }

    remove(amount: number): TestTube {
        var result = new TestTube();
        for (var i = 0; i < this.content.length - amount; i++) {
            result.init(this.content[i]);
        }
        return result;
    }

    getNumberOfColorSwitches(): number {
        var result = 0;
        for (var i = 1; i < this.content.length; i++) {
            if (this.content[i - 1] != this.content[i]) {
                result++;
            }
        }
        return result;
    }
}
