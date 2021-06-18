import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TubeState, TestTube, addColorToTube, selectTubes } from 'src/store/tube';
import { ColorState, Color, ColorCounter, addColor, incrementColor, selectColors, RGBColor } from '../../../store/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'testtube-solver';
  colors$: Observable<readonly ColorCounter[]>;
  tubes$: Observable<readonly TestTube[]>;

  constructor(
    private readonly colorStore: Store<ColorState>,
    private readonly tubeStore: Store<TubeState>
  ) {
    this.colors$ = colorStore.select(selectColors);
    this.tubes$ = tubeStore.select(selectTubes);
  }

  ngOnInit(): void {
    RGBColor.forEach((value: String, key: Color) => {
      this.colorStore.dispatch(addColor({ color : key }));
    });
  }

  _clickColor(colorCounter: ColorCounter)
  {
    this.colorStore.dispatch(incrementColor({ color : colorCounter.color }))
    this.tubeStore.dispatch(addColorToTube({ color : colorCounter.color }))
  }
}
