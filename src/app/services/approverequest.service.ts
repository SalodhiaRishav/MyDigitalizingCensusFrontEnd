import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/User.model';
import {UserCurrentRequestStatus} from '../models/UserCurrentRequestStatus.model';

import { LoginUser } from '../models/LoginUser.model';
@Injectable({
  providedIn: 'root'
})
export class ApproverRequestService {

  public isPendingListFetched:EventEmitter<User[]>=new EventEmitter<User[]>();
private userstatuslist :any=null;
  constructor( private http: HttpClient) {
    
  }

   
  GetDeclinedUserList(): Promise<User[]|null>
  {
  
    return new Promise((resolve,reject)=>{
      let loginurl='http://localhost:1305/api/usercurrentrequeststatus';
    this.http.get(loginurl).subscribe((data:any)=>{
    
        if(data.success)
      {
        this.userstatuslist=data.data;
        let userList:User[]=[];
       // console.log(data.data);
        var pendinguserList=data.data.filter((status:any)=>status.userRequestType===0)
       if(pendinguserList.length==0)
       {
         resolve(null);
       }
        for(let i=0;i<pendinguserList.length;++i)
        {
          let userurl='http://localhost:1305/api/user/'+pendinguserList[i].userId;
         this.http.get(userurl).subscribe((data : User)=>{
           userList.push(data);
           
         })
        }
     //   this.isPendingListFetched.emit(userList);
  
    console.log(userList)
     resolve(userList);
        
        
      }

      })
      
    })

    
    
  }

  UpdateStatus(userCurrentRequestStatus:UserCurrentRequestStatus)
  {
    
    var item=this.userstatuslist.find((status)=>{
      return status.userId===userCurrentRequestStatus.UserId;
    })
    userCurrentRequestStatus.ID=item.id;
    userCurrentRequestStatus.CreatedOn=item.createdOn;
    
    let url='http://localhost:1305/api/usercurrentrequeststatus';
    return this.http.put(url,userCurrentRequestStatus);
  }



  GetPendingUserList(): Promise<User[]|null>
  {
  
    return new Promise((resolve,reject)=>{
      let loginurl='http://localhost:1305/api/usercurrentrequeststatus';
    this.http.get(loginurl).subscribe((data:any)=>{
    
        if(data.success)
      {
        this.userstatuslist=data.data;
        let userList:User[]=[];
       // console.log(data.data);
        var pendinguserList=data.data.filter((status:any)=>status.userRequestType===1)
       if(pendinguserList.length==0)
       {
         resolve(null);
       }
        for(let i=0;i<pendinguserList.length;++i)
        {
          let userurl='http://localhost:1305/api/user/'+pendinguserList[i].userId;
         this.http.get(userurl).subscribe((data : User)=>{
           userList.push(data);
         })
        }
     //   this.isPendingListFetched.emit(userList);
  
    
     resolve(userList);
        
        
      }

      })
      
    })

    
    
  }


  GetApprovedUserList(): Promise<User[]|null>
  {
  
    return new Promise((resolve,reject)=>{
      let loginurl='http://localhost:1305/api/usercurrentrequeststatus';
    this.http.get(loginurl).subscribe((data:any)=>{
    
        if(data.success)
      {
        this.userstatuslist=data.data;
        let userList:User[]=[];
       // console.log(data.data);
        var acceptedUserList=data.data.filter((status:any)=>status.userRequestType===2)
       if(acceptedUserList.length==0)
       {
         resolve(null);
       }
        for(let i=0;i<acceptedUserList.length;++i)
        {
          let userurl='http://localhost:1305/api/user/'+acceptedUserList[i].userId;
         this.http.get(userurl).subscribe((data : User)=>{
           userList.push(data);
         })
        }
     //   this.isPendingListFetched.emit(userList);
  
    
     resolve(userList);
        
        
      }

      })
      
    })

    
    
  }

  




  
}