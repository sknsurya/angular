import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 

  constructor(private httpClient:HttpClient) { }
  getalluser(){
    return this.httpClient.get(environment.appurl+"/getuser")
  }

  addnewuser(body:any){
    return this.httpClient.post(environment.appurl+'/insertuser',body)
  }
}
