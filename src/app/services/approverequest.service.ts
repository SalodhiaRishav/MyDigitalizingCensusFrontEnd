import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/User.model';
import { LoginUser } from '../models/LoginUser.model';
@Injectable({
  providedIn: 'root'
})
export class ApproverRequestService {
private userstatuslist :any=null;
  constructor( private http: HttpClient) {
    
  }

  GetDeclinedUserList()
  {
    let loginurl='http://localhost:1305/api/usercurrentrequeststatus';
  
    this.http.get(loginurl).subscribe((data:any)=>{

      if(data.Success)
      {
        let userList:User[]=[];
        console.log(data.Data);
        var pendinguserList=data.Data.filter((status:any)=>status.UserRequestType===0)
        for(let i=0;i<pendinguserList.length;++i)
        {
          let userurl='http://localhost:1305/api/user/'+pendinguserList[i].UserId;
         this.http.get(userurl).subscribe((data : User)=>{
           userList.push(data);
         })
        }
        console.log(userList)
      }
    })

    
    
  }



  GetPendingUserList()
  {
    let loginurl='http://localhost:1305/api/usercurrentrequeststatus';
  
    this.http.get(loginurl).subscribe((data:any)=>{

      if(data.Success)
      {
        let userList:User[]=[];
        console.log(data.Data);
        var pendinguserList=data.Data.filter((status:any)=>status.UserRequestType===1)
        for(let i=0;i<pendinguserList.length;++i)
        {
          let userurl='http://localhost:1305/api/user/'+pendinguserList[i].UserId;
         this.http.get(userurl).subscribe((data : User)=>{
           userList.push(data);
         })
        }
        console.log(userList)
      }
    })

    
    
  }
}