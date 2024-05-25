import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',component:AjouterReclamationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AjouterReclamationRoutingModule { }
