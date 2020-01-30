import { Component, OnInit } from '@angular/core';
import { ActionsService } from "./actions.service";
export interface posts{
  userId : string;
  id: number;
  title :string;
  body: string
}
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor( private action:ActionsService) { }
  dataSource:any
  post=[];
  ngOnInit() {
    this.dataSource = this.action.getposts();
  }

  displayedColumns= ['userId','id','title' ,'edit'];
  

  

  edit(i){
    console.log(i);
    this.action.editpost(i).subscribe(
      res => {
        console.log(res);
        
      }
    )
  }

  postbyid(id){
    console.log(id);
    
    this.dataSource = this.action.getpostbyid(id).subscribe(
      res =>{
        console.log(res); 
      }
    )
  }
 
}
