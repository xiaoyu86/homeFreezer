import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodEditPage } from './food-edit';

@NgModule({
  declarations: [
    FoodEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodEditPage),
  ],
})
export class FoodEditPageModule {}
