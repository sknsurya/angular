import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
userlist:any
  constructor(private appservice:AppService) { }

  ngOnInit(){
  this.getAlluser()
  }
      getAlluser(){
        this.appservice.getAlluser().subscribe((userdata) => {
        this.userlist=userdata
      })
    
    }  
}
