import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListebusComponent } from '../../buses/listebus/listebus/listebus.component';
import { ListechauffeurComponent } from './listechauffeur/listechauffeur.component';

const routes: Routes = [
  {path:'',component:ListechauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListechauffeurRoutingModule { }
