import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { ListGareModule } from './views/admin/list-gare/list-gare.module';
import { DashboardModule } from './views/admin/dashboard/dashboard.module';
import { DashboardchauffeurModule } from './views/chauffeur/dashboard/dashboard/dashboard.module';
import { AjouterDemandeModule } from './views/chauffeur/ajouter-demande/ajouter-demande.module';

import { AjouterGareModule } from './views/admin/ajouter-gare/ajouter-gare.module';

import { AjouterTrajetModule } from './views/admin/ajouter-trajet/ajouter-trajet.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { UsersModule } from './views/admin/users/users.module';
import { StartPassagerModule } from './views/passager/start-passager/start-passager.module';
import { ContactFromModule } from './views/passager/contact-from/contact-from.module';
import { ListesGareModule } from './views/passager/listes-gare/listes-gare.module';
import { ListesTrajetModule } from './views/passager/listes-trajet/listes-trajet.module';
import { ChauffreProfileModule } from './views/passager/chauffre-profile/chauffre-profile.module';/*
import { ServicesComponent } from './views/front/services/services.component';*/

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from './views/front/navbar/navbar.component';
import { OffreAdminService } from './views/admin/offre-admin/offre-admin/offre-admin.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,SignupComponent, 

import { AddpassagerModule } from './views/admin/passagers/addpassager/addpassager.module';
import { ListepassagerModule } from './views/admin/passagers/listepassager/listepassager.module';
import { AddbusModule } from './views/admin/buses/addbus/addbus.module';
import { ListebusModule } from './views/admin/buses/listebus/listebus.module';
import { AddchauffeurModule } from './views/admin/chauffeurs/addchauffeur/addchauffeur.module';
import { ListechauffeurModule } from './views/admin/chauffeurs/listechauffeur/listechauffeur.module';

import { DestinationComponent } from './views/front/destination/destination.component';







@NgModule({
  declarations: [

    AppComponent,LoginComponent,SignupComponent, 
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,CommonModule,

    AppComponent,LoginComponent,SignupComponent,

   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,BrowserAnimationsModule,
    FormsModule,CommonModule,

    AppRoutingModule,LayoutsModule,ListGareModule,
    DashboardModule,AjouterGareModule,HttpClientModule,
    UsersModule,StartPassagerModule,ContactFromModule,
    ListesGareModule,ChauffreProfileModule,AjouterTrajetModule,ListesTrajetModule,
    AddpassagerModule,ListepassagerModule,AddbusModule,ListebusModule,
    AddchauffeurModule,ListechauffeurModule,
    MatCheckboxModule,
    MatChipsModule,

    ReactiveFormsModule,
    MatStepperModule,
    MatDatepickerModule,

    MatStepperModule,AjouterDemandeModule,
    MatDatepickerModule,DashboardchauffeurModule,

    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    NgbModule,
    FormsModule,
    
    
  ],
  providers: [
    OffreAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
