import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { SignUpComponent } from './frontoffice/sign-up/sign-up.component';
import { NavbarComponent } from './frontoffice/nav-bar/nav-bar.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './frontoffice/footer/footer.component';
import {NgxPageScrollModule} from "ngx-page-scroll";
import { SidebarComponent } from './backoffice/sidebar/sidebar.component';
import { HomebackComponent } from './backoffice/homeback/homeback.component';
import { NavbarbackComponent } from './backoffice/navbarback/navbarback.component';

import { TablesbackComponent } from './backoffice/tablesback/tablesback.component';
import { AddOffreComponent } from './backoffice/add-offre/add-offre.component';

import { UploadUsersComponent } from './backoffice/upload-users/upload-users.component';

import { StudentDashboardComponent } from './backoffice/student-dashboard/student-dashboard.component';
import { InterviewsComponent } from './backoffice/interviews/interviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HomebackComponent,
    NavbarbackComponent,

    TablesbackComponent,
    AddOffreComponent,
    UploadUsersComponent

    StudentDashboardComponent,
    InterviewsComponent

  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
