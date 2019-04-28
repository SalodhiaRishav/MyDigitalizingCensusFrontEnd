import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router }    from '@angular/router';
import{UserService} from './../../../services/user.service';

@Component({
  selector: 'app-volunteer-header',
  templateUrl: './volunteer-header.component.html',
  styleUrls: ['./volunteer-header.component.css']
})
export class VolunteerHeaderComponent implements OnInit {

  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit() {
  }
  onLogOut()
  {
    this.userService.userLoggedOutEvent.emit(true);
    alert('You are going to logout');
        this.router.navigate(['/login']);
  }

}
