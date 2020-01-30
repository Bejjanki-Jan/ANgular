import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {posts} from './actions.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http:HttpClient) { }

 postsurl = 'https://jsonplaceholder.typicode.com/posts/'
  getposts(){
    return this.http.get(this.postsurl)
  }

  getpostbyid(id):Observable<posts>{
    return this.http.get<posts>(this.postsurl+id,{})
  }
 editpost(i){ 
  let bodyObj = {
    userId: 123,
    id: 4,
    title: "new title",
  };
   return this.http.put(this.postsurl+i, bodyObj, {})
 }

}
