import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContectComponent } from './contect/contect.component';
import { AboutAsComponent } from './about-as/about-as.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContectComponent,
    AboutAsComponent,
    Component1Component,
    Component2Component,
    ErrormsgComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
