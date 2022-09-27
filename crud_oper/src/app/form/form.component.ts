import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form : any;
  email : any;
  name:any;
  constructor(private appservice:AppService) { }

  ngOnInit(): void {
  }

  updateuser(){

  }

  adduser(){
 this.appservice.addUser({name:this.name,email:this.email}).subscribe((newUser: any)=>{
      console.log(newUser)
  }
)};
}