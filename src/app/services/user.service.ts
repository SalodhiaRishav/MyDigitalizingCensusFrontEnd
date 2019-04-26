import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserListFetchedEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  public UserData : any;
  public UserList:User[];
  url:string='http://localhost:1305/api/user';
  constructor( private http: HttpClient) {
    this.http.get(this.url).subscribe((data : any)=>{
      
        this.UserData=data;
        this.UserListFetchedEvent.emit(true);
        this.UserList=data.data;
    })
  }

  PostUser(user:User)
  {
    return this.http.post(this.url,user);
  }

  isThisEmailAllowed(email:string)
  {
    let foundeduser:User=this.UserList.find((user:User)=>{
      return user.email === email;
    })
    if(foundeduser)
    {
      return false;
    }
    return true;
  }

  isThisAdhaarAllowed(adhaarNumber:string)
  {
    let foundeduser:User=this.UserList.find((user:User)=>{
      return user.aadharNumber === adhaarNumber;
    })
    if(foundeduser)
    {
      return false;
    }
    return true;
  }



  
   
  
   

  



  
}
