import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ColorState, Color, ColorCounter, addColor, incrementColor, selectColors } from '../../../store/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'testtube-solver';
  availableColors$: Observable<readonly ColorCounter[]>;
  demo1Color : ColorCounter = { color:Color.AZURE, counter:3};
  demo2Color : ColorCounter = { color:Color.BROWN, counter:1};

  constructor(private readonly store: Store<ColorState>) {
    this.availableColors$ = store.select(selectColors);
    console.log("store", store);
  }

  ngOnInit(): void {
    this.availableColors$.subscribe((c) => console.log("mod available colors", c));
    this.store.dispatch(addColor({ color : Color.RED }));
    this.store.dispatch(incrementColor({ color : Color.BLUE }));
    // this.store.dispatch(clickColor({ color : Color.AZURE }));
    // this.store.dispatch(clickColor({ color : Color.BLUE }));
    // this.store.dispatch(clickColor({ color : Color.RED }));
  }

  _clickColor(colorCounter: ColorCounter)
  {
    // this.store.dispatch(clickColor({ color : colorCounter.color }))
  }
}
