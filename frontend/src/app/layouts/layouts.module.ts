import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,RouterModule,RouterOutlet,RouterLink
  ]
})
export class LayoutsModule { }
