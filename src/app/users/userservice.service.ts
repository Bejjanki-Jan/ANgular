import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from "./users.component";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http: HttpClient) {  }

  Usersurl = 'https://jsonplaceholder.typicode.com/users';

  getreports(){
    return this.http.get<User>(this.Usersurl);
  }

  postreports(user:User){
    console.log(user);
    return this.http.post<User>(this.Usersurl, user)
  }

  }

