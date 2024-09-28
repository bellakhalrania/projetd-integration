import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddchauffeurRoutingModule } from './addchauffeur-routing.module';
import { AddchauffeurComponent } from './addchauffeur/addchauffeur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddchauffeurComponent
  ],
  imports: [
    CommonModule,
    AddchauffeurRoutingModule,FormsModule
  ]
})
export class AddchauffeurModule { }
