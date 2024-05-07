import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';

const routes: Routes = [
  {path:"",component:ProfileAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileAdminRoutingModule { }
