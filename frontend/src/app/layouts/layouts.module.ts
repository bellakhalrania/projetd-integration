import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { NavbarComponent } from '../views/front/navbar/navbar.component';
import { HomeComponent } from '../views/front/home/home.component';
import { ServicesComponent } from '../views/front/services/services.component';
import { AboutUsComponent } from '../views/front/about-us/about-us.component';
import { JoinUsComponent } from '../views/front/join-us/join-us.component';
import { ContactComponent } from '../views/front/contact/contact.component';
import { FooterComponent } from '../views/front/footer/footer.component';
import { PassagerLayoutComponent } from './passager-layout/passager-layout.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    JoinUsComponent,
    ContactComponent,
    FooterComponent,
    PassagerLayoutComponent,
   

    
  ],
  imports: [
    CommonModule,RouterModule,RouterOutlet,RouterLink
  ]
})
export class LayoutsModule { }
