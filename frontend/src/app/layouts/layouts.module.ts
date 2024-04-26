import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent
  ],
  imports: [
    CommonModule,RouterModule,RouterOutlet,RouterLink
  ]
})
export class LayoutsModule { }
