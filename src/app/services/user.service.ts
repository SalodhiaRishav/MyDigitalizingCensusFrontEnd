import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string='http://localhost:1305/api/user';
  constructor( private http: HttpClient) { }

  public check():void{
    this.http.get(this.url).subscribe((data)=>{
      console.log(data);
    })
  }
  
}
