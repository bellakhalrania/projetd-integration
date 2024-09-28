import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterGareRoutingModule } from './ajouter-gare-routing.module';
import { AjouterGareComponent } from './ajouter-gare/ajouter-gare.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AjouterGareComponent
  ],
  imports: [
    CommonModule,
    AjouterGareRoutingModule,FormsModule,HttpClientModule
  ]
})
export class AjouterGareModule { }
