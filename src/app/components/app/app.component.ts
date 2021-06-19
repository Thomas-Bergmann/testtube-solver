import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TubeState, TestTube, addColorToTube, selectTubes } from 'src/store/tube';
import { ColorState, Color, ColorCounter, addColor, incrementColor, selectColors, RGBColor } from 'src/store/color';
import { Move } from 'src/store/move';
import { SolutionState, selectMoves, solveProblem } from 'src/store/solution';

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
  staticTubes: ReadonlyArray<TestTube> = [];

  constructor(
    private readonly colorStore: Store<ColorState>,
    private readonly tubeStore: Store<TubeState>,
    private readonly solutionStore: Store<SolutionState>
  ) {
    this.colors$ = colorStore.select(selectColors);
    this.tubes$ = tubeStore.select(selectTubes);
    this.moves$ = tubeStore.select(selectMoves);
  }

  ngOnInit(): void {
    RGBColor.forEach((value: String, key: Color) => {
      this.colorStore.dispatch(addColor({ color : key }));
    });
    this.tubes$.subscribe(t => this.staticTubes = t);
    this.initColors();
  }
  initColors(): void {
    var colors : Color[] = [Color.ORANGE, Color.ORANGE, Color.PURPLE, Color.CYAN ];
    colors.push(Color.AZURE, Color.AZURE, Color.RED, Color.ORANGE);
    colors.push(Color.GREEN, Color.BLUE, Color.PURPLE, Color.PINK);
    colors.push(Color.GRAY, Color.PINK, Color.CYAN, Color.BROWN);
    colors.push(Color.BROWN, Color.CYAN, Color.FOREST, Color.GREEN);
    colors.push(Color.YELLOW, Color.ORANGE, Color.RED, Color.BLUE);
    colors.push(Color.RED, Color.FOREST, Color.YELLOW, Color.PINK);

    colors.push(Color.BLUE, Color.YELLOW, Color.PURPLE, Color.RED);
    colors.push(Color.GREEN, Color.BLUE, Color.GRAY, Color.BROWN);
    colors.push(Color.PINK, Color.PURPLE, Color.GREEN, Color.FOREST);
    colors.push(Color.AZURE, Color.GRAY, Color.BROWN, Color.AZURE);
    colors.push(Color.FOREST, Color.GRAY, Color.YELLOW, Color.CYAN);

    colors.forEach(c => this._clickColor({ color : c, counter: 1}))
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
}
