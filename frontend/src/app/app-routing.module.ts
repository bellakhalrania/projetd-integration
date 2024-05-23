import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { PassagerLayoutComponent } from './layouts/passager-layout/passager-layout.component';
import { ChauffeurLayoutComponent } from './layouts/chauffeur-layout/chauffeur-layout.component';


const routes: Routes = [
  {path:'',component:FrontLayoutComponent},
  
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'list-gare',loadChildren:()=>import('./views/admin/list-gare/list-gare.module').then(m=>m.ListGareModule)},
    {path:'ajouter-gare',loadChildren:()=>import('./views/admin/ajouter-gare/ajouter-gare.module').then(m=>m.AjouterGareModule)},
    {path:'list-trajet',loadChildren:()=>import('./views/admin/list-trajet/list-trajet.module').then(m=>m.ListTrajetModule)},
    {path:'ajouter-trajet',loadChildren:()=>import('./views/admin/ajouter-trajet/ajouter-trajet.module').then(m=>m.AjouterTrajetModule)},
    {path:'offre',loadChildren:()=>import('./views/admin/offre-admin/offre-admin.module').then(m=>m.OffreAdminModule)},
    {path:'users',loadChildren:()=>import('./views/admin/users/users.module').then(m=>m.UsersModule)},
    {path:'profile',loadChildren:()=>import('./views/admin/profile-admin/profile-admin.module').then(m=>m.ProfileAdminModule)},
  ]},
  {path:'passager',component:PassagerLayoutComponent,children:[
    {path:'start',loadChildren:()=>import('./views/passager/start-passager/start-passager.module').then(m=>m.StartPassagerModule)},
    {path:'contact',loadChildren:()=>import('./views/passager/contact-from/contact-from.module').then(m=>m.ContactFromModule)},
    {path:'liste-gare',loadChildren:()=>import('./views/passager/listes-gare/listes-gare.module').then(m=>m.ListesGareModule)},
    {path:'liste-trajet',loadChildren:()=>import('./views/passager/listes-trajet/listes-trajet.module').then(m=>m.ListesTrajetModule)},
    {path:'liste-chauffeur',loadChildren:()=>import('./views/passager/chauffre-profile/chauffre-profile.module').then(m=>m.ChauffreProfileModule)},
  ]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'chauffeur',component:ChauffeurLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/chauffeur/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'/ajouterDemande',loadChildren:()=>import('./views/chauffeur/ajouterDemande/ajouter-demande/ajouter-demande.module').then(m=>m.ajouterDemandeModule)},

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
