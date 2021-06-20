import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromLevels from './level-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(fromLevels.levelFeatureKey, fromLevels.levelReducer)
  ],
})
export class LevelModule {}
