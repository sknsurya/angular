import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private httpClient: HttpClient) { }
  getAlluser() {
    return this.httpClient.get(environment.appurl + "/getuser")
  }

  addnewuser(body: any) {
    return this.httpClient.post(environment.appurl + '/insertuser', body)
  }
  getUserById(userDetail: any) {
    return this.httpClient.get(environment.appurl + '/getid', userDetail)
  }
  editUser(newUser: any) {
return this.httpClient.get(environment.appurl+'/updateuser',newUser)
  }
}
