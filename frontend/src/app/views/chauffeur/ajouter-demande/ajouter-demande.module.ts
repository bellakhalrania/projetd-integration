import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterDemandeRoutingModule } from './ajouter-demande-routing.module';
import { AjouterDemandeComponent } from './ajouter-demande/ajouter-demande.component';


@NgModule({
  declarations: [
    AjouterDemandeComponent
  ],
  imports: [
    CommonModule,
    AjouterDemandeRoutingModule
  ]
})
export class AjouterDemandeModule { }
