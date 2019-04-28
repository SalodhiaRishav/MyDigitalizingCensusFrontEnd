import { Component, OnInit } from '@angular/core';
import{UserService} from './../../../../services/user.service';
import{ApproverRequestService} from './../../../../services/approverequest.service';

import{User} from './../../../../models/User.model';

@Component({
  selector: 'app-accepted-user',
  templateUrl: './accepted-user.component.html',
  styleUrls: ['./accepted-user.component.css']
})
export class AcceptedUserComponent implements OnInit {

 
  isUserListEmpty:boolean=true;
  UserAcceptedList:User[];
  constructor(private userService : UserService,
    private approverRequestService :ApproverRequestService) { }

  ngOnInit() {
 this.getAcceptedList();
  }
  getAcceptedList()
  {
    this.approverRequestService.GetApprovedUserList().then((data)=>{
     if(data==null)
     {
      this.isUserListEmpty=true;
     }
     else
      {
        console.log(data);
        this.UserAcceptedList=data;
        this.isUserListEmpty=false;
      }
    })
  }

}
