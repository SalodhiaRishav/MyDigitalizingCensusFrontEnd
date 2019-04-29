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
    this.userService.userLoggedInEvent.subscribe((data:string)=>{
      
      if(data==='approver')
      {
       
        this.router.navigate(['/approver/pending']);
      }
      else if(data==='volunteer')
      {
       
        
       
          this.router.navigate(['/volunteer/house']);           
         
      
        
      }else if(data==='pendingvolunteerrequest')
      {
        this.userService.loginedUserEvent.subscribe((dataaa:LoginedUser)=>{
          console.log(dataaa);
          if(dataaa.userRequestStatus===1)
          {
           this.router.navigate(['/pendingrequest']);
          }
          else if(dataaa.userRequestStatus===0)
          {
           this.router.navigate(['/declinedrequest']);
          }})
      }
      else if(data==='home')
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
