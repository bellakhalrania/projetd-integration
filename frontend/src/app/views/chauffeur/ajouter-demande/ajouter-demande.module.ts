import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AjouterDemandeRoutingModule } from './ajouter-demande-routing.module';
import { AjouterDemandeComponent } from './ajouter-demande/ajouter-demande.component';

@NgModule({
  declarations: [
    AjouterDemandeComponent
  ],
  imports: [
    CommonModule,
    AjouterDemandeRoutingModule,
    FormsModule 
  ]
})
export class AjouterDemandeModule { }
