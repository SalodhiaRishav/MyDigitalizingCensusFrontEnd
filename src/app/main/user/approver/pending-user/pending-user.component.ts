import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import{UserService} from './../../../../services/user.service';
import{ApproverRequestService} from './../../../../services/approverequest.service';

import{User} from './../../../../models/User.model';


@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {

  UserPendingList:User[];
  constructor(private userService : UserService,
    private approverRequestService :ApproverRequestService) { }

  ngOnInit() {
    this.approverRequestService.GetPendingUserList();
  }
  

}
