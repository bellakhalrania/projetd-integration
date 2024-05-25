import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterReclamationRoutingModule } from './ajouter-reclamation-routing.module';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';


@NgModule({
  declarations: [
    AjouterReclamationComponent
  ],
  imports: [
    CommonModule,
    AjouterReclamationRoutingModule
  ]
})
export class AjouterReclamationModule { }
