import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddchauffeurRoutingModule } from './addchauffeur-routing.module';
import { AddchauffeurComponent } from './addchauffeur/addchauffeur.component';


@NgModule({
  declarations: [
    AddchauffeurComponent
  ],
  imports: [
    CommonModule,
    AddchauffeurRoutingModule
  ]
})
export class AddchauffeurModule { }
