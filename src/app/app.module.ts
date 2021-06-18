import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './components/app/app.component';
import { ColorComponent } from './components/color/color.component';
import { colorReducer } from '../store/color/color-reducers';
import { tubeReducer } from '../store/tube/tube-reducers';
import { environment } from '../environments/environment';
import { ColorModule } from '../store/color/color-modules';
import { TubeModule } from '../store/tube/tube-modules';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      colorState: colorReducer,
      tubeState: tubeReducer,
    }),
    ColorModule,
    TubeModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
