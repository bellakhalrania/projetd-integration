import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent},
  
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'list-gare',loadChildren:()=>import('./views/admin/list-gare/list-gare.module').then(m=>m.ListGareModule)},
    {path:'ajouter-gare',loadChildren:()=>import('./views/admin/ajouter-gare/ajouter-gare.module').then(m=>m.AjouterGareModule)},
    {path:'offre',loadChildren:()=>import('./views/admin/offre-admin/offre-admin.module').then(m=>m.OffreAdminModule)},
  ]},
  {path:'login',component:LoginComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
