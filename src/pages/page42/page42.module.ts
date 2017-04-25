import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page42 } from './page42';

@NgModule({
  declarations: [
    Page42,
  ],
  imports: [
    IonicPageModule.forChild(Page42),
  ],
  exports: [
    Page42
  ]
})
export class Page42Module {}
