import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import{UserService} from './../../../../services/user.service';
import{ApproverRequestService} from './../../../../services/approverequest.service';

import{User} from './../../../../models/User.model';

@Component({
  selector: 'app-accepted-user',
  templateUrl: './accepted-user.component.html',
  styleUrls: ['./accepted-user.component.css']
})
export class AcceptedUserComponent implements OnInit {

 
  UserDeclinedList:User[];
  constructor(private userService : UserService,
    private approverRequestService :ApproverRequestService) { }

  ngOnInit() {
    this.approverRequestService.GetApprovedUserList();
  }

}
