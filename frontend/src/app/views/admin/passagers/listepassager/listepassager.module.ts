import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListepassagerRoutingModule } from './listepassager-routing.module';
import { ListepassagerComponent } from './listepassager/listepassager.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListepassagerComponent
  ],
  imports: [
    CommonModule,
    ListepassagerRoutingModule,FormsModule
  ]
})
export class ListepassagerModule { }
