import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGareRoutingModule } from './list-gare-routing.module';
import { ListGareComponent } from './list-gare/list-gare.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListGareComponent
  ],
  imports: [
    CommonModule,
    ListGareRoutingModule,HttpClientModule,FormsModule
  ]
})
export class ListGareModule { }
