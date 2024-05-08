import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPassagerRoutingModule } from './start-passager-routing.module';
import { StartPassagerComponent } from './start-passager/start-passager.component';


@NgModule({
  declarations: [
    StartPassagerComponent
  ],
  imports: [
    CommonModule,
    StartPassagerRoutingModule
  ]
})
export class StartPassagerModule { }
