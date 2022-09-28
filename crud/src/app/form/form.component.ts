import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: any
  email: any
  constructor(private appservice: AppService) { }

  ngOnInit(): void {
  }
  adduser() {
    console.log(this.name)
    this.appservice.addnewuser({"name" : this.name, "email" : this.email}).subscribe((body)=>{
      console.log(body)
      

    })
  }

}
