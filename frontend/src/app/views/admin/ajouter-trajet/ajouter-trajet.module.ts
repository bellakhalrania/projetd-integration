import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterTrajetRoutingModule } from './ajouter-trajet-routing.module';
import { AjouterTrajetComponent } from './ajouter-trajet/ajouter-trajet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterTrajetComponent
  ],
  imports: [
    CommonModule,
    AjouterTrajetRoutingModule,FormsModule,HttpClientModule
  ]
})
export class AjouterTrajetModule { }
