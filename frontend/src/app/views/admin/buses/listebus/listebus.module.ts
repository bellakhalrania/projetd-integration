import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListebusRoutingModule } from './listebus-routing.module';
import { ListebusComponent } from './listebus/listebus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListebusComponent
  ],
  imports: [
    CommonModule,
    ListebusRoutingModule,FormsModule
  ]
})
export class ListebusModule { }
