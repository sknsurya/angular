import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
addUser() {
throw new Error('Method not implemented.');
}
updateUser() {
throw new Error('Method not implemented.');
}
userlist:any
  constructor(private appservice:AppService,private routes:ActivatedRoute,private aroute:Router) { }

  ngOnInit(){
  this.getAlluser()
  }
      getAlluser(){
        this.appservice.getAlluser().subscribe((userdata) => {
        this.userlist=userdata
      })
    
    }  
    editUser(id:Number){
      this.aroute.navigate(['edit-user',id],{relativeTo:this.routes})
    }
    deleteUser(id:number){

    }
}
