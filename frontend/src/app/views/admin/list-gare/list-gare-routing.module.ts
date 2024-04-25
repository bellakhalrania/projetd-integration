import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGareComponent } from './list-gare/list-gare.component';

const routes: Routes = [
  {
    path:'',component:ListGareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGareRoutingModule { }
