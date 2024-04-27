import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';


@NgModule({
  declarations: [
    AdminDashbordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
