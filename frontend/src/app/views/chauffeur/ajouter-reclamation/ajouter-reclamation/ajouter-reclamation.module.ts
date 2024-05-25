import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AjouterReclamationRoutingModule } from './ajouter-reclamation-routing.module';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';


@NgModule({
  declarations: [
    AjouterReclamationComponent
  ],
  imports: [
    CommonModule,
    AjouterReclamationRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AjouterReclamationModule { }
