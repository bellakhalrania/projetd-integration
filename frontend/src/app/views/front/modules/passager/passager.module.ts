import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassagerRoutingModule } from './passager-routing.module';
import { PassagerDashbordComponent } from './components/passager-dashbord/passager-dashbord.component';


@NgModule({
  declarations: [
    PassagerDashbordComponent
  ],
  imports: [
    CommonModule,
    PassagerRoutingModule
  ]
})
export class PassagerModule { }
