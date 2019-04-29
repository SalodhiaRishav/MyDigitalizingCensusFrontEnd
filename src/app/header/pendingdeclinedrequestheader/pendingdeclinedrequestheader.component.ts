import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingdeclinedrequestheader',
  templateUrl: './pendingdeclinedrequestheader.component.html',
  styleUrls: ['./pendingdeclinedrequestheader.component.css']
})
export class PendingdeclinedrequestheaderComponent implements OnInit {

  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit() {
  }

  onLogOut()
  {
    this.userService.userLoggedOutEvent.emit(true);
    alert('You are going to logout');
    this.userService.isUserLoggedInAsApprover=false;
    this.userService.isUserLoggedInAsVolunteer=false;
        this.router.navigate(['/login']);
  }
}
