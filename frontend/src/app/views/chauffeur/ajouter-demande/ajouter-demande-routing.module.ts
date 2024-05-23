import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterDemandeComponent } from './ajouter-demande/ajouter-demande.component';

const routes: Routes = [
  {path:'',component:AjouterDemandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterDemandeRoutingModule { }
