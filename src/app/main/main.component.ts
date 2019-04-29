import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router }    from '@angular/router';
import{UserService} from './../services/user.service';
import { LoginedUser } from '../models/LoginedUser.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.userLoggedInEvent.subscribe((data)=>{
    
      
      if(data==='approver')
      {
        this.router.navigate(['/pending']);
      }
      else if(data==='volunteer')
      {
        this.userService.loginedUserEvent.subscribe((data:LoginedUser)=>{
         if(data.userRequestStatus===2)
         {
          this.router.navigate(['/house']);
         }
         else if(data.userRequestStatus===0)
         {
          this.router.navigate(['/declinedrequest']);
         }
         else
         {
          this.router.navigate(['/pendingrequest']);
           
         }
        })
        
      }else if(data==='home')
      {
        this.router.navigate(['/login']);
      }
    
    })
    this.userService.userLoggedOutEvent.subscribe((data:any)=>
    {
      if(data)
      {
        this.router.navigate(['/login']);
      }
    })
  }

}
