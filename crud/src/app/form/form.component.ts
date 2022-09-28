import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, RoutesRecognized } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: any
  email: any
  userId:any
  constructor(private appservice: AppService, private router:Router,private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  adduser() {
    console.log(this.name)
    this.appservice.addnewuser({"name" : this.name, "email" : this.email}).subscribe((body)=>{
      console.log(body)
      

    })
  }

  // getUserById(userId: any){
  //   this.appservice.getUserById(userId).subscribe((userDetail: any)=>{
  //     console.log(userDetail)
  //     this.name = userDetail['name']
  //     this.email = userDetail['email']
  //   })
  // }

  // updateUser(){
  //   this.appservice.editUser(this.userId,{"name":this.name,"email":this.email}).subscribe((newUser)=>{
  //     console.log(newUser)
  //     // this.router.navigate(['../'])

  //   })
  // }

}
