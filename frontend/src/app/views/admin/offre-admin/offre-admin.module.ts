import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OffreAdminRoutingModule } from './offre-admin-routing.module';
import { OffreAdminComponent } from './offre-admin/offre-admin.component';


@NgModule({
  declarations: [
    OffreAdminComponent
  ],
  imports: [
    CommonModule,
    OffreAdminRoutingModule,
    FormsModule
  ]
})
export class OffreAdminModule { }
