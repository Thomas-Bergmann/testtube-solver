import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromTubes from './tube-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(fromTubes.tubeFeatureKey, fromTubes.tubeReducer)
  ],
})
export class TubeModule {}
