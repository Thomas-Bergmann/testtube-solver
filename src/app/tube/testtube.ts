import { Color } from './color.enum';

export class TestTube {
    content = Array<Color>();

    constructor() { }

    init(color: Color): TestTube {
        this.content.push(color);
        return this;
    }

    add(color: Color, amount: number): boolean {
        if (this.isFull() || !this.isColorMatching(color)) {
            return false;
        }
        for (var i = 0; i < amount; i++) {
            this.content.push(color);
        }
        return true;
    }

    isFull(): boolean {
        return 4 == this.content.length;
    }

    isFinished(): boolean {
        if (this.isEmpty()) {
            return true;
        }
        if (!this.isFull()) {
            return false;
        }
        var color = this.content[0];
        for(var i=1; i<4;i++) {
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
        while(this.content[this.content.length - result] == color)
        {
            result++;
        }
        return result - 1;
    }

    hasSpace(requiredSpace: number):boolean {
        return requiredSpace < 5 - this.content.length;
    }
}
