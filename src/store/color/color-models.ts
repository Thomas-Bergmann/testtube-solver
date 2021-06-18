
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
  [Color.FREE, 'rgb(190, 190, 190)'],
  [Color.RED, 'rgb(255, 0, 0)'],
  [Color.BLUE, 'rgb(0,0,255)'],
  [Color.AZURE, 'rgb(153,221,255)'], // columbia blue
  [Color.BROWN, 'rgb(196,98,16)']
]);

export const FontColor = new Map<Color, string>([
  [Color.BROWN, 'rgb(255,255,255)'],
]);
