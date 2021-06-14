import { Action, createReducer, on } from '@ngrx/store';
import { Color, ColorCounter } from 'src/store/color';
import { TestTube } from 'src/store/tube';
import { addColor, clickColor } from './app-actions';
import { AppState } from './app-selector';

export const initialState : AppState = {
  colors : [],
  tubes : [new TestTube(), new TestTube()],
  activeColor: Color.AZURE
}

const _appReducer = createReducer(
  initialState,
  on(addColor, (state, action) => _addColorToApp(state, action.color)),
  on(clickColor, (state, action) => _clickColorToApp(state, action.color)),
);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}

function _addColorToApp(state:AppState, color:Color):AppState
{
  return ({
    ...state,
    activeColor: color,
    colors: _addColorToColors(state.colors, color),
  });
}

function _clickColorToApp(state:AppState, color:Color):AppState
{
  var positionColor = _findColor(state.colors, color);
  // clicked color is used fully
  if (positionColor > -1 && state.colors[positionColor].counter == 4)
  {
    return state;
  }
  // add new color (and one tube)
  var newTubes : TestTube[] = Object.assign([], state.tubes);
  if (positionColor == -1 || positionColor == 0)
  {
    console.log("add tube for new color", color);
    newTubes.push(new TestTube());
  }
  return ({
    ...state,
    activeColor: color,
    colors: _addUsedColor(state.colors, color),
    tubes: _addColor(newTubes, color)
  });
}

function _addColor(tubes : ReadonlyArray<TestTube>, color : Color) : ReadonlyArray<TestTube>
{
  var doReplace = true;
  var result : TestTube[] = [];
  for (var _i = 0; _i < tubes.length; _i++) {
    var tube = tubes[_i];
    if (doReplace && !tube.isFull())
    {
      result.push(tube.add(color, 1));
      doReplace = false;
    }
    else{
      result.push(tube);
    }
  }
  return result;
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
    // console.log("result of _addUsedColor", color, result);
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
