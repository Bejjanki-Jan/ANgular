import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './albums.service';

export interface Album{
  userId:string;
  id: number;
  title: number;
}
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private album:AlbumsService) { }

  dataSource:any;
  ngOnInit() {
    this.dataSource = this.album.getalbums();
  }

  displayedColumns= ['userId','id','title','delete' ];
  

  delete(id){
    this.album.deleteAlbum(id).subscribe( res=>{
      console.log(res); 
    }   
    )
  }

  
}
