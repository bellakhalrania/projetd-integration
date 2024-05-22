import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrajetComponent } from '../../admin/list-trajet/list-trajet/list-trajet.component';
import { ListesTrajetComponent } from './listes-trajet/listes-trajet.component';

const routes: Routes = [
  {path:'',component:ListesTrajetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesTrajetRoutingModule { }
