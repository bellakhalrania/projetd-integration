import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffreProfileRoutingModule } from './chauffre-profile-routing.module';
import { ChauffreProfileComponent } from './chauffre-profile/chauffre-profile.component';


@NgModule({
  declarations: [
    ChauffreProfileComponent
  ],
  imports: [
    CommonModule,
    ChauffreProfileRoutingModule
  ]
})
export class ChauffreProfileModule { }
