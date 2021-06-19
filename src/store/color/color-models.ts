
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
  [Color.YELLOW, '#f1da58'],
  [Color.ORANGE, '#e88c42'],
  [Color.RED, '#c52a23'],
  [Color.AZURE, '#55a3e5'],
  [Color.BLUE, '#3a2ec3'],
  [Color.CYAN, '#62d67c'],
  [Color.GREEN, '#78960e'],
  [Color.FOREST, '#106533'],
  [Color.PINK, '#ea5e7b'],
  [Color.PURPLE, '#722b93'],
  [Color.GRAY, '#636465'],
  [Color.BROWN, '#7e4a07']
]);

export const FontColor = new Map<Color, string>([
  [Color.BROWN, 'rgb(255,255,255)'],
  [Color.PURPLE, 'rgb(255,255,255)'],
  [Color.BLUE, 'rgb(255,255,255)'],
  [Color.FOREST, 'rgb(255,255,255)'],
  [Color.GRAY, 'rgb(255,255,255)'],
]);
