import { Component, OnInit } from '@angular/core';
import{UserService} from './../../../../services/user.service';
import{ApproverRequestService} from './../../../../services/approverequest.service';

import{User} from './../../../../models/User.model';

@Component({
  selector: 'app-declined-user',
  templateUrl: './declined-user.component.html',
  styleUrls: ['./declined-user.component.css']
})
export class DeclinedUserComponent implements OnInit {

  isUserListEmpty:boolean=true;
  UserDeclinedList:User[];
  constructor(private userService : UserService,
    private approverRequestService :ApproverRequestService) { }

  ngOnInit() {
    this.getDeclinedList();
  }

  getDeclinedList()
  {
    this.approverRequestService.GetDeclinedUserList().then((data)=>{
     
     if(data===null)
     {
      this.isUserListEmpty=true;
     }
     else
      {
        this.UserDeclinedList=data;
        this.isUserListEmpty=false;
      }
    })
  }

}
