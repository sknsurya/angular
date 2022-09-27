import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  addUser: any;
 

  constructor(private httpClient:HttpClient) { }
  getalluser(){
   return this.httpClient.get("http://localhost:3000/getuser")
  }

  adduser(body : any){
    return this.httpClient.post(environment.appurl+'/getuser',body)
  }

  // insertalluser(){
  //   return this.httpClient.post("http://localhost:3000/insertuser")
  // }
}
