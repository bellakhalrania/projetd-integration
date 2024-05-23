import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListepassagerRoutingModule } from './listepassager-routing.module';
import { ListepassagerComponent } from './listepassager/listepassager.component';


@NgModule({
  declarations: [
    ListepassagerComponent
  ],
  imports: [
    CommonModule,
    ListepassagerRoutingModule
  ]
})
export class ListepassagerModule { }
