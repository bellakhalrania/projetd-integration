import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListebusComponent } from './listebus/listebus.component';

const routes: Routes = [
  {path:'',component:ListebusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListebusRoutingModule { }
