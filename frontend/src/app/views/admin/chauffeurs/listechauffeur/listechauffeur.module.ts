import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListechauffeurRoutingModule } from './listechauffeur-routing.module';
import { ListechauffeurComponent } from './listechauffeur/listechauffeur.component';


@NgModule({
  declarations: [
    ListechauffeurComponent
  ],
  imports: [
    CommonModule,
    ListechauffeurRoutingModule
  ]
})
export class ListechauffeurModule { }
