import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpassagerRoutingModule } from './addpassager-routing.module';
import { AddpassagerComponent } from './addpassager/addpassager.component';


@NgModule({
  declarations: [
    AddpassagerComponent
  ],
  imports: [
    CommonModule,
    AddpassagerRoutingModule
  ]
})
export class AddpassagerModule { }
