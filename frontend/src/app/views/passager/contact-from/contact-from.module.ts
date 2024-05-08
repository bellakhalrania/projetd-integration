import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFromRoutingModule } from './contact-from-routing.module';
import { ContactFromComponent } from './contact-from/contact-from.component';


@NgModule({
  declarations: [
    ContactFromComponent
  ],
  imports: [
    CommonModule,
    ContactFromRoutingModule
  ]
})
export class ContactFromModule { }
