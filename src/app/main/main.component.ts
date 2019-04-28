import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router }    from '@angular/router';
import{UserService} from './../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentLoggedInUser:string='home';
  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.userLoggedInEvent.subscribe((data)=>{
    
      if(data==='home')
      {
        this.router.navigate(['/login']);
      }
      else if(data==='volunteer')
      {
        this.router.navigate(['/house']);
      }else if(data==='approver')
      {
        this.router.navigate(['/pending']);
      }
      this.currentLoggedInUser=data;
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
