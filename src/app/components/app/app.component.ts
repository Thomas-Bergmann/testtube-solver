import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TubeState, TestTube, addColorToTube, selectTubes, resetTubes } from 'src/store/tube';
import { ColorState, Color, ColorCounter, addColor, incrementColor, selectColors, RGBColor, resetColors } from 'src/store/color';
import { Move } from 'src/store/move';
import { SolutionState, selectMoves, solveProblem } from 'src/store/solution';
import { Level, LevelState, selectLevels } from 'src/store/level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'testtube-solver';
  colors$: Observable<readonly ColorCounter[]>;
  tubes$: Observable<readonly TestTube[]>;
  moves$: Observable<readonly Move[]>;
  steps: readonly TestTube[] = [];
  levels$: Observable<readonly Level[]>;
  staticTubes: ReadonlyArray<TestTube> = [];

  constructor(
    private readonly colorStore: Store<ColorState>,
    private readonly tubeStore: Store<TubeState>,
    private readonly solutionStore: Store<SolutionState>,
    private readonly levelStore: Store<LevelState>
  ) {
    this.colors$ = colorStore.select(selectColors);
    this.tubes$ = tubeStore.select(selectTubes);
    this.moves$ = tubeStore.select(selectMoves);
    this.levels$ = levelStore.select(selectLevels);
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
}
