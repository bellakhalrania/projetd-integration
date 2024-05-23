import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbusRoutingModule } from './addbus-routing.module';
import { AddbusComponent } from './addbus/addbus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddbusComponent
  ],
  imports: [
    CommonModule,
    AddbusRoutingModule,FormsModule
  ]
})
export class AddbusModule { }
