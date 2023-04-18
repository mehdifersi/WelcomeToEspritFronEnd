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
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,},
  {path:'signup',component:SignUpComponent},
  {path:'nav',component:NavbarComponent},
  {path:'side',component: SidebarComponent},
  {path:'up',component: NavbarbackComponent},
  {path:'homeback',component:HomebackComponent},
  {path:'tablous',component:TablesbackComponent},
  {path:'offre',component:AddOffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
