import { Action, createReducer, on } from '@ngrx/store';

import { TestTube, TubeState } from "./tube-models";
import { addColorToTube } from "./tube-actions";
import { Color } from "../color/color-models";

export const tubeFeatureKey = 'tubeState';
const initialState : TubeState = {
    tubes : [new TestTube(), new TestTube()]
}

const _tubeReducer = createReducer(
    initialState,
    on(addColorToTube, (state, action) => _addColorToState(state, action.color)),
);

export function tubeReducer(state: TubeState | undefined, action: Action) {
    return _tubeReducer(state, action);
}

function _addColorToState(state:TubeState, color:Color):TubeState
{
  return ({
    ...state,
    tubes: _addColorToTubes(state.tubes, color),
  });
}

function _addColorToTubes(tubes : ReadonlyArray<TestTube>, color : Color) : ReadonlyArray<TestTube>
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
  var countColors = _countColors(result);
  while (result.length < countColors + 2)
  {
    result.push(new TestTube());
  }
  return result;
}

function _countColors(tubes : ReadonlyArray<TestTube>) : number
{
  var colors = new Map<Color, number>();
  tubes.forEach(t => t.content.forEach(c => colors.set(c, 1)));
  return colors.size;
}