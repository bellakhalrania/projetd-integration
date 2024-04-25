import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreAdminRoutingModule } from './offre-admin-routing.module';
import { OffreAdminComponent } from './offre-admin/offre-admin.component';


@NgModule({
  declarations: [
    OffreAdminComponent
  ],
  imports: [
    CommonModule,
    OffreAdminRoutingModule
  ]
})
export class OffreAdminModule { }
