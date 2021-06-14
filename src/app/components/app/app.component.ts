import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, addColor, clickColor, selectActiveColor, selectColors } from 'src/store/app';
import { Color, ColorCounter } from 'src/store/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'testtube-solver';
  availableColors$: Observable<readonly ColorCounter[]>;
  activeColor$: Observable<Color|undefined>;
  demo1Color : ColorCounter = { color:Color.AZURE, counter:3};
  demo2Color : ColorCounter = { color:Color.BROWN, counter:1};

  constructor(private readonly store: Store<AppState>) {
    this.availableColors$ = store.select(selectColors);
    this.activeColor$ = store.select(selectActiveColor);
  }

  ngOnInit(): void {
    this.availableColors$.subscribe((c) => console.log("mod available colors", c));
    this.activeColor$.subscribe((c) => console.log("mod active color", c?.toString()));
    this.store.dispatch(addColor({ color : Color.RED }));
    this.store.dispatch(clickColor({ color : Color.BLUE }));
    // this.store.dispatch(clickColor({ color : Color.AZURE }));
    // this.store.dispatch(clickColor({ color : Color.BLUE }));
    // this.store.dispatch(clickColor({ color : Color.RED }));
  }

  _clickColor(colorCounter: ColorCounter)
  {
    this.store.dispatch(clickColor({ color : colorCounter.color }))
  }
}
