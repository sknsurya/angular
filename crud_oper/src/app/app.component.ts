import { Component } from '@angular/core';
import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud_oper';
  userlist: any
  name: any;
  email: any;

  constructor(private appService: AppService) { }

  get() {
    this.appService.getalluser().subscribe(data => {
      this.userlist = data;
    }
    )
  }
  // insertuser() {
  //   this.appService.insertalluser(name: this.name, this.email: this.email).subscribe((newuser) => {
  //    console.log(newuser)
  //    this.router.navigate(['../'])
  //   }
  //   )
  // }
}
