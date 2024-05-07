import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileAdminRoutingModule } from './profile-admin-routing.module';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';


@NgModule({
  declarations: [
    ProfileAdminComponent
  ],
  imports: [
    CommonModule,
    ProfileAdminRoutingModule
  ]
})
export class ProfileAdminModule { }
