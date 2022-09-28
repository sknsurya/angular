import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'user-list',
    pathMatch:'full'
  },
  {
    path:'user-list',
    component:UserListComponent
  },
  {
    path:'user-list/add-user',
    component:FormComponent
  },
  {
    path:'user-list/edit-user/:userId',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
