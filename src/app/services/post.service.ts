import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURI;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient , private srvRouter: Router) { }


  getAllPost():Observable<any>
  {
    console.log('URL: ', apiURL);
    return this.http.get<any>(`${apiURL}`);
  }

  createPost(obj: any): Observable<any>
  {
    return this.http.post(`${apiURL}/create`, obj);
  }
}
