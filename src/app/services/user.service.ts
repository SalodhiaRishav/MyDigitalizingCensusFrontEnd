import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/User.model';
import { LoginUser } from '../models/LoginUser.model';
import { LoginedUser } from '../models/LoginedUser.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserListFetchedEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  public userLoggedInEvent:EventEmitter<string>=new EventEmitter<string>();
  public userLoggedOutEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
  public loginedUserEvent:EventEmitter<LoginedUser>=new EventEmitter<LoginedUser>();
  public isUserLoggedInAsVolunteer:boolean=false;
  public isUserLoggedInAsApprover:boolean=false;


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

  GetUsers()
  {
    return this.http.get(this.url);
  }
  PostUser(user: User, image: string, name: string)
  {
    return this.http.post(this.url,{user,image,name});
  }

  PostLoginUser(loginUser:LoginUser)
  {
    let loginurl='http://localhost:1305/api/login';
    return this.http.post(loginurl,loginUser);
  }

  isThisEmailAllowed(email:string)
  {
   
      if(this.UserList==null)
      {
        return true;
      }

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

     if(this.UserList==null)
     {
       return true;
     }
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
