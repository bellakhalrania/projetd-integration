import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpassagerComponent } from './addpassager/addpassager.component';

const routes: Routes = [
  {path:'',component:AddpassagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpassagerRoutingModule { }
