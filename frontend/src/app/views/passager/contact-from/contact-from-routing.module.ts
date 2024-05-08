import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFromComponent } from './contact-from/contact-from.component';

const routes: Routes = [
  {path:'',component:ContactFromComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFromRoutingModule { }
