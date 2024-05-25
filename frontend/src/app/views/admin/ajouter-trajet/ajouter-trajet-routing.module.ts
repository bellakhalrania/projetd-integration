import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterTrajetComponent } from './ajouter-trajet/ajouter-trajet.component';

const routes: Routes = [
  {path:'',component:AjouterTrajetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterTrajetRoutingModule { }
