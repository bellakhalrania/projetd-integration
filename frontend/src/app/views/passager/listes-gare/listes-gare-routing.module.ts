import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGareComponent } from '../../admin/list-gare/list-gare/list-gare.component';
import { ListesGareComponent } from './listes-gare/listes-gare.component';

const routes: Routes = [
  {path:'',component:ListesGareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesGareRoutingModule { }
