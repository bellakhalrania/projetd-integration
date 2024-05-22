import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListesTrajetRoutingModule } from './listes-trajet-routing.module';
import { ListesTrajetComponent } from './listes-trajet/listes-trajet.component';


@NgModule({
  declarations: [
    ListesTrajetComponent
  ],
  imports: [
    CommonModule,
    ListesTrajetRoutingModule
  ]
})
export class ListesTrajetModule { }
