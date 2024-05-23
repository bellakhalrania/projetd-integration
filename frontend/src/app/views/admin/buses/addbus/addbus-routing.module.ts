import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusModule } from './addbus.module';
import { AddbusComponent } from './addbus/addbus.component';

const routes: Routes = [
  {path:'',component:AddbusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddbusRoutingModule { }
