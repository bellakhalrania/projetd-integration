import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { PassagerLayoutComponent } from './layouts/passager-layout/passager-layout.component';


const routes: Routes = [
  {path:'',component:FrontLayoutComponent},
  
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'list-gare',loadChildren:()=>import('./views/admin/list-gare/list-gare.module').then(m=>m.ListGareModule)},
    {path:'ajouter-gare',loadChildren:()=>import('./views/admin/ajouter-gare/ajouter-gare.module').then(m=>m.AjouterGareModule)},
    {path:'offre',loadChildren:()=>import('./views/admin/offre-admin/offre-admin.module').then(m=>m.OffreAdminModule)},
    {path:'users',loadChildren:()=>import('./views/admin/users/users.module').then(m=>m.UsersModule)},
    {path:'Profile',loadChildren:()=>import('./views/admin/profile-admin/profile-admin.module').then(m=>m.ProfileAdminModule)},
  ]},
  {path:'passager',component:PassagerLayoutComponent,children:[
    {path:'start',loadChildren:()=>import('./views/passager/start-passager/start-passager.module').then(m=>m.StartPassagerModule)},
    {path:'contact',loadChildren:()=>import('./views/passager/contact-from/contact-from.module').then(m=>m.ContactFromModule)},
  ]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
