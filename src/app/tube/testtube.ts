import { Color } from './color.enum';

export class Testtube {
    content = Array<Color>();

    constructor(initial: Color[]) {
        for (var i = 0; i < initial.length; i++) {
            this.content[i] = initial[i];
        }
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

    isColorMatching(color: Color): boolean {
        return this.isEmpty() || this.getLatestColor() == color;
    }

    isEmpty(): boolean
    {
        return this.content.length == 0;
    }

    getLatestColor(): Color {
        if (this.isEmpty()) {
            return Color.FREE;
        }
        return this.content[this.content.length - 1];
    }
}
