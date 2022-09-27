import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { subscribeOn } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
