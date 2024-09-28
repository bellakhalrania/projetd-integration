import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

import { PassagerLayoutComponent } from './layouts/passager-layout/passager-layout.component';
import { ChauffeurLayoutComponent } from './layouts/chauffeur-layout/chauffeur-layout.component';
import { DestinationComponent } from './views/front/destination/destination.component';


const routes: Routes = [
  {path:'',component:FrontLayoutComponent},
  
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'list-gare',loadChildren:()=>import('./views/admin/list-gare/list-gare.module').then(m=>m.ListGareModule)},
    {path:'ajouter-gare',loadChildren:()=>import('./views/admin/ajouter-gare/ajouter-gare.module').then(m=>m.AjouterGareModule)},
<<<<<<< HEAD
 
    
    

    
=======
    {path:'list-trajet',loadChildren:()=>import('./views/admin/list-trajet/list-trajet.module').then(m=>m.ListTrajetModule)},
    {path:'ajouter-trajet',loadChildren:()=>import('./views/admin/ajouter-trajet/ajouter-trajet.module').then(m=>m.AjouterTrajetModule)},
>>>>>>> de59388368497a142bae1294a48cb4f00d339d00
    {path:'offre',loadChildren:()=>import('./views/admin/offre-admin/offre-admin.module').then(m=>m.OffreAdminModule)},
    {path:'users',loadChildren:()=>import('./views/admin/users/users.module').then(m=>m.UsersModule)},
    {path:'profile',loadChildren:()=>import('./views/admin/profile-admin/profile-admin.module').then(m=>m.ProfileAdminModule)},
    {path:'profile',loadChildren:()=>import('./views/admin/profile-admin/profile-admin.module').then(m=>m.ProfileAdminModule)},
    {path:'addchauffeur',loadChildren:()=>import('./views/admin/chauffeurs/addchauffeur/addchauffeur.module').then(m=>m.AddchauffeurModule)},
    {path:'listechauffeur',loadChildren:()=>import('./views/admin/chauffeurs/listechauffeur/listechauffeur.module').then(m=>m.ListechauffeurModule)},
    {path:'addbus',loadChildren:()=>import('./views/admin/buses/addbus/addbus.module').then(m=>m.AddbusModule)},
    {path:'listebus',loadChildren:()=>import('./views/admin/buses/listebus/listebus.module').then(m=>m.ListebusModule)},
    {path:'addpassager',loadChildren:()=>import('./views/admin/passagers/addpassager/addpassager.module').then(m=>m.AddpassagerModule)},
    {path:'listepassager',loadChildren:()=>import('./views/admin/passagers/listepassager/listepassager.module').then(m=>m.ListepassagerModule)},
  ]},


  {path:'passager',component:PassagerLayoutComponent,children:[
    {path:'start',loadChildren:()=>import('./views/passager/start-passager/start-passager.module').then(m=>m.StartPassagerModule)},
    {path:'contact',loadChildren:()=>import('./views/passager/contact-from/contact-from.module').then(m=>m.ContactFromModule)},
    {path:'liste-gare',loadChildren:()=>import('./views/passager/listes-gare/listes-gare.module').then(m=>m.ListesGareModule)},
    {path:'liste-trajet',loadChildren:()=>import('./views/passager/listes-trajet/listes-trajet.module').then(m=>m.ListesTrajetModule)},
    {path:'profile',loadChildren:()=>import('./views/passager/chauffre-profile/chauffre-profile.module').then(m=>m.ChauffreProfileModule)},
    
  ]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'destination',component:DestinationComponent},
  {path:'chauffeur',component:ChauffeurLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/chauffeur/dashboard/dashboard/dashboard.module').then(m=>m.DashboardchauffeurModule)},
    {path:'ajouterDemande',loadChildren:()=>import('./views/chauffeur/ajouter-demande/ajouter-demande.module').then(m=>m.AjouterDemandeModule)},
    {path:'ajouterReclamation',loadChildren:()=>import('./views/chauffeur/ajouter-reclamation/ajouter-reclamation/ajouter-reclamation.module').then(m=>m.AjouterReclamationModule)},

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
