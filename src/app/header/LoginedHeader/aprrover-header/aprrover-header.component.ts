import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router }    from '@angular/router';
import{UserService} from './../../../services/user.service';

@Component({
  selector: 'app-aprrover-header',
  templateUrl: './aprrover-header.component.html',
  styleUrls: ['./aprrover-header.component.css']
})
export class AprroverHeaderComponent implements OnInit {

  
  constructor(private userService : UserService,
    private router: Router) { }
  onLogOut()
  {
    this.userService.userLoggedOutEvent.emit(true);
     alert('You are going to logout');
    this.userService.isUserLoggedInAsApprover=false;
    this.userService.isUserLoggedInAsVolunteer=false;
        this.router.navigate(['/login']);
       
        
    
  }
  ngOnInit() {
  }

}
