import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchauffeurComponent } from './addchauffeur/addchauffeur.component';

const routes: Routes = [
  {path:'',component:AddchauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddchauffeurRoutingModule { }
