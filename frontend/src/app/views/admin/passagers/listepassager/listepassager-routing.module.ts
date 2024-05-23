import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListepassagerComponent } from './listepassager/listepassager.component';

const routes: Routes = [
  {path:'',component:ListepassagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListepassagerRoutingModule { }
