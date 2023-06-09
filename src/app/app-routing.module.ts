import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./frontoffice/login/login.component";
import {SignUpComponent} from "./frontoffice/sign-up/sign-up.component";
import {HomeComponent} from "./frontoffice/home/home.component";
import {NavbarComponent} from "./frontoffice/nav-bar/nav-bar.component";
import {SidebarComponent} from "./backoffice/sidebar/sidebar.component";
import {NavbarbackComponent} from"./backoffice/navbarback/navbarback.component"
import { HomebackComponent } from './backoffice/homeback/homeback.component';
import { TablesbackComponent } from './backoffice/tablesback/tablesback.component';
import { AddOffreComponent } from './backoffice/add-offre/add-offre.component';
import {UploadUsersComponent} from "./backoffice/upload-users/upload-users.component";
import {InterviewsComponent} from "./backoffice/interviews/interviews.component";
import {AdminDashboardComponent} from "./backoffice/admin-dashboard/admin-dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,},
  {path:'signup',component:SignUpComponent,children:[
      {path:'login',component:LoginComponent,},

    ]},
  {path:'nav',component:NavbarComponent},
  {path:'side',component: SidebarComponent},
  {path:'up',component: NavbarbackComponent,children:[
      {path:'uploadUser',component:UploadUsersComponent},
      {path:'tablous',component:TablesbackComponent},
    ]},
  {path:'homeback',component:HomebackComponent},
  {path:'offre',component:AddOffreComponent},
  {path:'interview',component:InterviewsComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},



  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
