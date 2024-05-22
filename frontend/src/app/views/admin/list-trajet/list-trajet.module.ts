import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTrajetRoutingModule } from './list-trajet-routing.module';
import { ListTrajetComponent } from './list-trajet/list-trajet.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListTrajetComponent
  ],
  imports: [
    CommonModule,
    ListTrajetRoutingModule,HttpClientModule,FormsModule
  ]
})
export class ListTrajetModule { }
