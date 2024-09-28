import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListechauffeurRoutingModule } from './listechauffeur-routing.module';
import { ListechauffeurComponent } from './listechauffeur/listechauffeur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListechauffeurComponent
  ],
  imports: [
    CommonModule,
    ListechauffeurRoutingModule,FormsModule
  ]
})
export class ListechauffeurModule { }
