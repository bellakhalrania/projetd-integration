import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterGareComponent } from './ajouter-gare/ajouter-gare.component';

const routes: Routes = [
  {path:'',component:AjouterGareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterGareRoutingModule { }
