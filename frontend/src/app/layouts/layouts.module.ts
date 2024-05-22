import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { NavbarComponent } from '../views/front/navbar/navbar.component';
import { HomeComponent } from '../views/front/home/home.component';

import { ServiceComponent } from '../views/front/service/service.component';

import { ContactComponent } from '../views/front/contact/contact.component';
import { PassagerLayoutComponent } from './passager-layout/passager-layout.component';
import { FooterComponent } from '../views/front/footer/footer.component';
import { ChauffeurLayoutComponent } from './chauffeur-layout/chauffeur-layout.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    PassagerLayoutComponent,
    FooterComponent,
    ChauffeurLayoutComponent
   

    
  ],
  imports: [
    CommonModule,RouterModule,RouterOutlet,RouterLink
  ]
})
export class LayoutsModule { }
