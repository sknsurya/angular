import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutAsComponent } from './about-as/about-as.component';
import { ContectComponent } from './contect/contect.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';



const routes: Routes = [
  {
    path: "homecomponent",
    component: HomeComponent
  },
  {
    path: "aboutascomponent",
    component: AboutAsComponent, children: [{
      path: 'comp1',
      component: Component1Component
    }, {
      path: 'comp2',
      component: Component2Component
    }]
  },
  { path: "contectcomponent", component: ContectComponent },
  {
    path: "**",
    component: ErrormsgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
