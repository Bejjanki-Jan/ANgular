import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from "./albums.component";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { }

  albumsurl = 'https://jsonplaceholder.typicode.com/albums'
  getalbums(){
    return this.http.get<Album>(this.albumsurl)
  }

  createAlbum(album: Album)  {
    return this.http.post<Album>(this.albumsurl + "/" + album.id, album, {}
    )
  }

  deleteAlbum(Id: string): Observable<number> {
    return this.http.delete<number>(this.albumsurl + "/" + Id)  }

}
