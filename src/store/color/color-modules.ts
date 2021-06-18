import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromColors from './color-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(fromColors.colorFeatureKey, fromColors.colorReducer)
  ],
})
export class ColorModule {}
