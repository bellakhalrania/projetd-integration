import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { ListGareModule } from './views/admin/list-gare/list-gare.module';
import { DashboardModule } from './views/admin/dashboard/dashboard.module';
import { AjouterGareModule } from './views/admin/ajouter-gare/ajouter-gare.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { UsersModule } from './views/admin/users/users.module';
import { StartPassagerModule } from './views/passager/start-passager/start-passager.module';
import { ContactFromModule } from './views/passager/contact-from/contact-from.module';
import { ListesGareModule } from './views/passager/listes-gare/listes-gare.module';
import { ChauffreProfileModule } from './views/passager/chauffre-profile/chauffre-profile.module';/*
import { ServicesComponent } from './views/front/services/services.component';*/


@NgModule({
  declarations: [
    AppComponent,LoginComponent,SignupComponent,
   
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    FormsModule,CommonModule,
    AppRoutingModule,LayoutsModule,ListGareModule,
    DashboardModule,AjouterGareModule,HttpClientModule,
    UsersModule,StartPassagerModule,ContactFromModule,
    ListesGareModule,ChauffreProfileModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
