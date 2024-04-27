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


@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,

    AppRoutingModule,LayoutsModule,ListGareModule,
    DashboardModule,AjouterGareModule,FormsModule,HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
