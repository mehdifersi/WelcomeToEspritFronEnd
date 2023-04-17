import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./frontoffice/login/login.component";
import {SignUpComponent} from "./frontoffice/sign-up/sign-up.component";
import {HomeComponent} from "./frontoffice/home/home.component";
import {NavbarComponent} from "./frontoffice/nav-bar/nav-bar.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,},
  {path:'signup',component:SignUpComponent},
  {path:'nav',component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
