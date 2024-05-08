import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPassagerRoutingModule } from './start-passager-routing.module';
import { StartPassagerComponent } from './start-passager/start-passager.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    StartPassagerComponent
  ],
  imports: [
    CommonModule,
    StartPassagerRoutingModule,
    RouterLink
  ]
})
export class StartPassagerModule { }
