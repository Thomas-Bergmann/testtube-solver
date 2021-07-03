import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TubeState, TestTube, addColorToTube, selectTubes, resetTubes, selectTube, selectActiveTube, applyTubes } from 'src/store/tube';
import { ColorState, Color, ColorCounter, addColor, incrementColor, selectColors, RGBColor, resetColors } from 'src/store/color';
import { Move } from 'src/store/move';
import { SolutionState, selectSolutionMoves, selectYourMoves, solveProblem, addMove, selectYourLastMove } from 'src/store/solution';
import { Level, LevelState, selectLevels } from 'src/store/level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  colors$: Observable<readonly ColorCounter[]>;
  tubes$: Observable<readonly TestTube[]>;
  yourMoves$: Observable<readonly Move[]>;
  solutionMoves$: Observable<readonly Move[]>;
  steps: readonly TestTube[] = [];
  levels$: Observable<readonly Level[]>;
  staticTubes: ReadonlyArray<TestTube> = [];
  staticActiveTube : TestTube = new TestTube();

  constructor(
    private readonly colorStore: Store<ColorState>,
    private readonly tubeStore: Store<TubeState>,
    private readonly solutionStore: Store<SolutionState>,
    readonly levelStore: Store<LevelState>
  ) {
    this.colors$ = colorStore.select(selectColors);
    this.tubes$ = tubeStore.select(selectTubes);
    this.yourMoves$ = tubeStore.select(selectYourMoves);
    this.solutionMoves$ = tubeStore.select(selectSolutionMoves);
    this.levels$ = levelStore.select(selectLevels);
    this.tubeStore.select(selectActiveTube).subscribe( t => this.staticActiveTube = t);
    this.solutionStore.select(selectYourLastMove).subscribe( m => this._applyMove(m));
  }

  ngOnInit(): void {
    this.tubes$.subscribe(t => this.staticTubes = t);
  }

  _clickLevel(level: Level)
  {
    this.colorStore.dispatch(resetColors());
    this.tubeStore.dispatch(resetTubes());
    level.colors.forEach(c => {
      this.colorStore.dispatch(incrementColor({ color : c }));
      this.tubeStore.dispatch(addColorToTube({ color : c }));
    });
  }

  _clickColor(colorCounter: ColorCounter)
  {
    this.colorStore.dispatch(incrementColor({ color : colorCounter.color }))
    this.tubeStore.dispatch(addColorToTube({ color : colorCounter.color }))
  }

  _solveProblem()
  {
    this.solutionStore.dispatch(solveProblem({ tubes : this.staticTubes }));
  }

  _clickMove(move: Move)
  {
    this.steps = move.getTubesAfterMove();
  }

  _selectTube(tube: TestTube)
  {
    if (this.staticActiveTube == undefined || this.staticActiveTube.isEmpty() || this.staticActiveTube == tube)
    {
      this.tubeStore.dispatch(selectTube({ tube : tube }));
    } else {
      this.solutionStore.dispatch(addMove({ tubes : this.staticTubes, source : this.staticActiveTube, target : tube }));
    }
  }

  _applyMove(move: Move)
  {
    if (move !== undefined)
    {
      this.tubeStore.dispatch(applyTubes({ tubes : move.apply() }));
    }
  }
}
