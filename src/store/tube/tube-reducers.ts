import { Action, createReducer, on } from '@ngrx/store';

import { TestTube, TubeState } from "./tube-models";
import { addColorToTube } from "./tube-actions";
import { Color } from "../color/color-models";

const initialState : TubeState = {
    tubes : []
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
  return result;
}
