
export interface ColorState {
  colors: ReadonlyArray<ColorCounter>;
}

export interface ColorCounter {
  color: Color;
  counter: number;
}

export enum Color {
  FREE = "(empty)",
  BLUE = "BLUE",
  ORANGE = "ORANGE",
  RED = "RED",
  BROWN = "BROWN",
  GRAY = "GRAY",
  PINK = "PINK",
  GREEN = "GREEN",
  FOREST = "FOREST",
  CYAN = "CYAN",
  YELLOW = "YELLOW",
  PURPLE = "PURPLE",
  AZURE = "AZURE",
}

export const RGBColor = new Map<Color, string>([
  [Color.YELLOW, 'rgb(255,255,0)'],
  [Color.ORANGE, 'rgb(255, 153, 0)'],
  [Color.RED, 'rgb(255, 0, 0)'],
  [Color.AZURE, 'rgb(153,221,255)'], // columbia blue
  [Color.BLUE, 'rgb(0,0,255)'],
  [Color.CYAN, 'rgb(51, 204, 204)'],
  [Color.GREEN, 'rgb(51, 204, 51)'],
  [Color.FOREST, 'rgb(0, 102, 0)'],
  [Color.PINK, 'rgb(255, 102, 255)'],
  [Color.PURPLE, 'rgb(204, 0, 153)'],
  [Color.GRAY, 'rgb(102,102,102)'],
  [Color.BROWN, 'rgb(196,98,16)']
]);

export const FontColor = new Map<Color, string>([
  [Color.BROWN, 'rgb(255,255,255)'],
]);
