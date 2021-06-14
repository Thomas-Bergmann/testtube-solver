import { SystemJsNgModuleLoader } from '@angular/core';
import { Action, createReducer, on } from '@ngrx/store';
import { Color } from 'src/app/tube/color.enum';
import { TestTube } from 'src/app/tube/testtube';
import { clickTube, clickColor } from './app-actions';
import { AppState } from './app-selector';

export const initialState : AppState = {
  availableColors : [Color.GREEN, Color.ORANGE, Color.AZURE],
  usedColors : new Map(),
  tubes : [new TestTube(), new TestTube()]
}

const _appReducer = createReducer(
  initialState,
  on(clickTube, (state, action) => _clickTube(state, action.tubeIndex)),
  on(clickColor, (state, action) => _clickColor(state, action.color)),
);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}

function _clickTube(state:AppState, tubeIndex:number):AppState
{
  return ({ ...state,
    activeTube: state.activeTube == undefined ? tubeIndex : undefined,
  });
}

function _clickColor(state:AppState, color:Color):AppState
{
  var usedColor = state.usedColors.get(color);
  // add new color (and one tube)
  if (usedColor === undefined)
  {
    var newTubes = Object.assign([], state.tubes);
    newTubes.concat(new TestTube());
    var result : AppState = ({
      ...state,
      activeColor: color,
      availableColors: _removeColor(state.availableColors, color),
      usedColors: _addUsedColor(state.usedColors, color),
      tubes: _addColor(newTubes, color)
    });
    console.log("add color result state", color, result);
    return result;
  }
  // clicked color is used fully
  if (usedColor == 4)
  {
    return state;
  }
  // clicked color can be filled
  return ({
    ...state,
    activeColor: color,
    tubes: _addColor(state.tubes, color),
    usedColors: _addUsedColor(state.usedColors, color)
  });
}

function _removeColor(colors : ReadonlyArray<Color>, color : Color) : ReadonlyArray<Color>
{
  const index = colors.indexOf(color, 0);
  if (index > -1) {
    var result = Object.assign([], colors); // copy colors to result
    result.splice(index, 1);
    return result;
  }
  return colors;
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

function _addUsedColor(colors: Map<Color, number>, color: Color) : Map<Color, number> {
  var result = new Map<Color, number>();
  colors.forEach((amount, colorInMap) => {
    result.set(colorInMap, color == colorInMap ? amount.valueOf() + 1 : amount);
  });
  if (result.get(color) === undefined)
  {
    result.set(color, 1);
  }
  console.log("add new color result", result);
  return result;
}
