import { Component, OnInit } from '@angular/core';
import{UserService} from './../../../../services/user.service';
import{ApproverRequestService} from './../../../../services/approverequest.service';

import{User} from './../../../../models/User.model';
import{UserCurrentRequestStatus} from './../../../../models/UserCurrentRequestStatus.model';


@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {

  isUserListEmpty:boolean=true;
  UserPendingList:User[];
  constructor(private userService : UserService,
    private approverRequestService :ApproverRequestService) { }



  ngOnInit() {
    
    this.getPendingList();
  }

  getPendingList()
  {
    this.approverRequestService.GetPendingUserList().then((data)=>{
     if(data==null)
     {
      this.isUserListEmpty=true;
     }
     else
      {
        this.UserPendingList=data;
        this.isUserListEmpty=false;
      }
    })
  }

  onAccept(userId:number)
  {
    let userCurrentRequestStatus:UserCurrentRequestStatus=new UserCurrentRequestStatus();
    userCurrentRequestStatus.UserId=userId;
    userCurrentRequestStatus.UserRequestType=2;
    this.approverRequestService.UpdateStatus(userCurrentRequestStatus).subscribe((data:any)=>{
    //  let idx= this.UserPendingList.findIndex((status)=>{
    //     return status.id===userId;
    //   })
    
      this.getPendingList();
      alert(data.message)
    })
    
  
   
  }
  
  onDecline(userId:number)
  {
    let userCurrentRequestStatus:UserCurrentRequestStatus=new UserCurrentRequestStatus();
    userCurrentRequestStatus.UserId=userId;
    userCurrentRequestStatus.UserRequestType=0;
    this.approverRequestService.UpdateStatus(userCurrentRequestStatus).subscribe((data:any)=>{
     
      this.getPendingList();
      alert(data.message)
    })
    

  }

}
