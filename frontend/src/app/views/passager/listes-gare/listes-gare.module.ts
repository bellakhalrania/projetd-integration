import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListesGareRoutingModule } from './listes-gare-routing.module';
import { ListesGareComponent } from './listes-gare/listes-gare.component';


@NgModule({
  declarations: [
    ListesGareComponent
  ],
  imports: [
    CommonModule,
    ListesGareRoutingModule
  ]
})
export class ListesGareModule { }
