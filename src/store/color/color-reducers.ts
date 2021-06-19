import { Action, createReducer, on } from '@ngrx/store';
import { Color, ColorCounter, ColorState } from 'src/store/color';
import { addColor, incrementColor } from './color-actions';

export const colorFeatureKey = 'colorState';

const initialState : ColorState = {
  colors : []
}

const _colorReducer = createReducer(
  initialState,
  on(addColor, (state, action) => _addColorToState(state, action.color)),
  on(incrementColor, (state, action) => _incrementColorToState(state, action.color)),
);

export function colorReducer(state: ColorState | undefined, action: Action) {
  return _colorReducer(state, action);
}

function _addColorToState(state:ColorState, color:Color):ColorState
{
  return ({
    ...state,
    colors: _addColorToColors(state.colors, color),
  });
}

function _incrementColorToState(state:ColorState, color:Color):ColorState
{
  return ({
    ...state,
    colors: _addUsedColor(state.colors, color),
  });
}

function _addUsedColor(colors: ReadonlyArray<ColorCounter>, color: Color) : ReadonlyArray<ColorCounter> {
  var colorsWithNewOne = _addColorToColors(colors, color);
  var result : ColorCounter[] = [];
  colorsWithNewOne
    .forEach((entry) => {
      result.push({
        color: entry.color,
        counter: entry.color == color ? entry.counter + 1 : entry.counter
      });
    });
    return result;
}

function _findColor(colors: ReadonlyArray<ColorCounter>, color: Color) : number {
  var result = -1;
  colors
    .filter((entry) => entry.color == color)
    .forEach((entry) => result = entry.counter);
  return result;
}

function _addColorToColors(colors: ReadonlyArray<ColorCounter>, color: Color) : ReadonlyArray<ColorCounter> {
  var index = _findColor(colors, color);
  var result : Array<ColorCounter> = new Array();
  colors.forEach((e) => result.push(e));
  if (index == -1)
  {
    var newEntry : ColorCounter = { color: color, counter: 0 };
    result.push(newEntry);
  }
  // console.log("result of _addColorsToColors", color, result);
  return result;
}
