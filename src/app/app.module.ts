import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './components/app/app.component';
import { ColorComponent } from './components/color/color.component';
import { ColorCounterComponent } from './components/color-counter/color-counter.component';
import { TubeComponent } from './components/tube/tube.component';
import { MoveComponent } from './components/move/move.component';
import { LevelComponent } from './components/level/level.component';

import { colorReducer } from '../store/color/color-reducers';
import { tubeReducer } from '../store/tube/tube-reducers';
import { environment } from '../environments/environment';
import { ColorModule } from '../store/color/color-modules';
import { TubeModule } from '../store/tube/tube-modules';
import { solutionReducer } from 'src/store/solution/solution-reducers';
import { LevelModule, levelReducer } from 'src/store/level';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ColorCounterComponent,
    TubeComponent,
    MoveComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      colorState: colorReducer,
      tubeState: tubeReducer,
      solutionState: solutionReducer,
      levelState: levelReducer
    }),
    ColorModule,
    TubeModule,
    LevelModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
