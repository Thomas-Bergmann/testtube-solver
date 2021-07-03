import { Action, createReducer, on } from '@ngrx/store';

import { Color } from "../color";
import { LevelState } from './level-models';

export const levelFeatureKey = 'levelState';

var level_0 : Color[] = [];

var level_2 : Color[] = [
  Color.BLUE  , Color.ORANGE  , Color.BLUE  , Color.ORANGE
  , Color.ORANGE  , Color.BLUE  , Color.ORANGE  , Color.BLUE
];

var level_3: Color[] = [
  Color.BLUE  , Color.ORANGE  , Color.RED  , Color.BLUE
  , Color.ORANGE  , Color.ORANGE  , Color.RED  , Color.BLUE
  , Color.RED  , Color.BLUE  , Color.ORANGE  , Color.RED
];

var level_4: Color[] = [
  Color.BLUE  , Color.RED  , Color.ORANGE  , Color.ORANGE
  , Color.BLUE  , Color.RED  , Color.BLUE  , Color.RED
  , Color.ORANGE  , Color.BLUE  , Color.RED  , Color.ORANGE
];
var level_5: Color[] = [
  Color.AZURE  , Color.ORANGE  , Color.BLUE  , Color.PINK
  , Color.ORANGE  , Color.AZURE  , Color.BLUE  , Color.PINK
  , Color.PINK  , Color.RED  , Color.ORANGE  , Color.RED
  , Color.ORANGE  , Color.PINK  , Color.RED  , Color.BLUE
  , Color.AZURE  , Color.AZURE  , Color.RED  , Color.BLUE
];
var level_159: Color[] = [
  Color.BROWN  , Color.ORANGE  , Color.GRAY  , Color.BROWN
  , Color.PURPLE  , Color.CYAN  , Color.GREEN  , Color.PINK
  , Color.RED  , Color.ORANGE  , Color.GREEN  , Color.GRAY
  , Color.PINK  , Color.BROWN  , Color.RED  , Color.BLUE
  , Color.FOREST  , Color.BLUE  , Color.YELLOW  , Color.ORANGE
  , Color.BLUE  , Color.ORANGE  , Color.AZURE  , Color.YELLOW
  , Color.CYAN  , Color.AZURE  , Color.AZURE  , Color.BLUE
  , Color.GREEN  , Color.FOREST  , Color.PURPLE  , Color.PINK
  , Color.YELLOW  , Color.FOREST  , Color.AZURE  , Color.GREEN
  , Color.CYAN  , Color.BROWN  , Color.GRAY  , Color.PURPLE
  , Color.CYAN  , Color.GRAY  , Color.PURPLE  , Color.FOREST
  , Color.PINK  , Color.RED  , Color.RED  , Color.YELLOW
];
var level_165: Color[] = [
  Color.AZURE  , Color.GRAY  , Color.GREEN  , Color.BLUE
  , Color.PINK  , Color.GREEN  , Color.BLUE  , Color.RED
  , Color.BROWN  , Color.GREEN  , Color.FOREST  , Color.AZURE
  , Color.PURPLE  , Color.ORANGE  , Color.PINK  , Color.YELLOW
  , Color.FOREST  , Color.BROWN  , Color.GREEN  , Color.RED
  , Color.PURPLE  , Color.ORANGE  , Color.PURPLE  , Color.BLUE
  , Color.CYAN  , Color.ORANGE  , Color.BROWN  , Color.RED
  , Color.YELLOW  , Color.AZURE  , Color.ORANGE  , Color.AZURE
  , Color.PINK  , Color.GRAY  , Color.GRAY  , Color.PINK
  , Color.FOREST  , Color.FOREST  , Color.BLUE  , Color.YELLOW
  , Color.RED  , Color.BROWN  , Color.CYAN  , Color.PURPLE
  , Color.CYAN  , Color.YELLOW  , Color.CYAN  , Color.GRAY
];
var level_175: Color[] = [
  Color.ORANGE  , Color.GREEN  , Color.RED  , Color.PURPLE
  , Color.YELLOW  , Color.BROWN  , Color.PINK  , Color.PINK
  , Color.ORANGE  , Color.GRAY  , Color.AZURE  , Color.BLUE
  , Color.CYAN  , Color.BLUE  , Color.YELLOW  , Color.ORANGE
  , Color.PINK  , Color.BLUE  , Color.BLUE  , Color.GREEN
  , Color.BROWN  , Color.GRAY  , Color.PURPLE  , Color.AZURE
  , Color.FOREST  , Color.PINK  , Color.RED  , Color.BROWN

  , Color.ORANGE  , Color.GRAY  , Color.FOREST  , Color.CYAN
  , Color.RED  , Color.GREEN  , Color.FOREST  , Color.AZURE
  , Color.AZURE  , Color.CYAN  , Color.YELLOW  , Color.RED
  , Color.GREEN  , Color.GRAY  , Color.BROWN  , Color.YELLOW
  , Color.PURPLE  , Color.FOREST  , Color.CYAN  , Color.PURPLE
];
var level_227: Color[] = [
  Color.PINK  , Color.AZURE  , Color.YELLOW  , Color.CYAN
  , Color.PINK  , Color.BROWN  , Color.RED  , Color.FOREST
  , Color.AZURE  , Color.GRAY  , Color.ORANGE  , Color.CYAN
  , Color.FOREST  , Color.RED  , Color.GRAY  , Color.PINK
  , Color.CYAN  , Color.YELLOW  , Color.RED  , Color.CYAN
  , Color.AZURE  , Color.PURPLE  , Color.GREEN  , Color.PINK
  , Color.PURPLE  , Color.FOREST  , Color.BLUE  , Color.GRAY

  , Color.GRAY  , Color.ORANGE  , Color.YELLOW  , Color.PURPLE
  , Color.YELLOW  , Color.ORANGE  , Color.BLUE  , Color.BROWN
  , Color.BROWN  , Color.AZURE  , Color.PURPLE  , Color.FOREST
  , Color.RED  , Color.ORANGE  , Color.BLUE  , Color.GREEN
  , Color.BROWN  , Color.BLUE  , Color.GREEN  , Color.GREEN
];
var level_483: Color[] = [
  Color.BROWN  , Color.PURPLE  , Color.CYAN  , Color.PINK
  , Color.BLUE  , Color.CYAN  , Color.FOREST  , Color.BLUE
  , Color.ORANGE  , Color.RED  , Color.AZURE  , Color.CYAN
  , Color.GREEN  , Color.YELLOW  , Color.YELLOW  , Color.GREEN
  , Color.PINK  , Color.BLUE  , Color.GRAY  , Color.AZURE
  , Color.AZURE  , Color.FOREST  , Color.BLUE  , Color.PURPLE
  , Color.BROWN  , Color.ORANGE  , Color.YELLOW  , Color.FOREST

  , Color.BROWN  , Color.YELLOW  , Color.AZURE  , Color.GRAY
  , Color.GREEN  , Color.RED  , Color.PINK  , Color.ORANGE
  , Color.GRAY  , Color.ORANGE  , Color.PINK  , Color.PURPLE
  , Color.BROWN  , Color.GREEN  , Color.FOREST  , Color.RED
  , Color.GRAY  , Color.RED  , Color.PURPLE  , Color.CYAN
];
var level_675 : Color[] = [
  Color.ORANGE, Color.ORANGE, Color.PURPLE, Color.CYAN
  , Color.AZURE, Color.AZURE, Color.RED, Color.ORANGE
  , Color.GREEN, Color.BLUE, Color.PURPLE, Color.PINK
  , Color.GRAY, Color.PINK, Color.CYAN, Color.BROWN
  , Color.BROWN, Color.CYAN, Color.FOREST, Color.GREEN
  , Color.YELLOW, Color.ORANGE, Color.RED, Color.BLUE
  , Color.RED, Color.FOREST, Color.YELLOW, Color.PINK

  , Color.BLUE, Color.YELLOW, Color.PURPLE, Color.RED
  , Color.GREEN, Color.BLUE, Color.GRAY, Color.BROWN
  , Color.PINK, Color.PURPLE, Color.GREEN, Color.FOREST
  , Color.AZURE, Color.GRAY, Color.BROWN, Color.AZURE
  , Color.FOREST, Color.GRAY, Color.YELLOW, Color.CYAN ];

var level_705 : Color[] = [
  Color.CYAN, Color.RED, Color.GRAY, Color.PINK
  , Color.PURPLE, Color.RED, Color.BLUE, Color.GREEN
  , Color.YELLOW, Color.CYAN, Color.PURPLE, Color.PINK
  , Color.BLUE, Color.RED, Color.AZURE, Color.BROWN
  , Color.ORANGE, Color.ORANGE, Color.AZURE, Color.PURPLE
  , Color.CYAN, Color.BLUE, Color.BLUE, Color.YELLOW
  , Color.RED, Color.PINK, Color.PURPLE, Color.YELLOW

  , Color.FOREST, Color.FOREST, Color.GREEN, Color.GRAY
  , Color.AZURE, Color.FOREST, Color.BROWN, Color.AZURE
  , Color.FOREST, Color.GREEN, Color.YELLOW, Color.ORANGE
  , Color.ORANGE, Color.GREEN, Color.PINK, Color.GRAY
  , Color.GRAY, Color.CYAN, Color.BROWN, Color.BROWN ];

const initialState : LevelState = {
levels : [
  { level: 0, colors: level_0},
  /*
  { level: 2, colors: level_2},
  { level: 3, colors: level_3},
  { level: 4, colors: level_4},
  { level: 5, colors: level_5}, */
  { level: 159, colors: level_159},
  { level: 165, colors: level_165},
  { level: 175, colors: level_175},
  { level: 227, colors: level_227},
  { level: 483, colors: level_483},
  { level: 675, colors: level_675},
  { level: 705, colors: level_705},
]}

const _levelReducer = createReducer(
    initialState
)

export function levelReducer(state: LevelState | undefined, action: Action) {
  return _levelReducer(state, action);
}