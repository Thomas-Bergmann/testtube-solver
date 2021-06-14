import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, clickColor, selectActiveColor, selectAvailableColors } from './store/app';
import { Color } from './tube/color.enum';
import { TestTube } from './tube/testtube';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'testtube-solver';
  availableColors$: Observable<readonly Color[]>;
  activeColor$: Observable<Color|undefined>;

  constructor(private readonly store: Store<AppState>) {
    this.availableColors$ = store.select(selectAvailableColors);
    this.activeColor$ = store.select(selectActiveColor);
  }
  ngOnInit(): void {
    this.store.dispatch(clickColor({ color : Color.BLUE }));
    this.store.dispatch(clickColor({ color : Color.AZURE }));
  }

  _clickColor(color: Color)
  {
    this.store.dispatch(clickColor({ color : Color.AZURE }))
  }
}
