import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChauffreProfileComponent } from './chauffre-profile/chauffre-profile.component';

const routes: Routes = [
  {path:'',component:ChauffreProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChauffreProfileRoutingModule { }
