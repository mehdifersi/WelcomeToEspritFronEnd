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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent
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
