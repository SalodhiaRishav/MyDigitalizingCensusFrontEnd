import { Component, OnInit } from '@angular/core';
import{UserService} from './../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentHeader:string='home';
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.userLoggedInEvent.subscribe((data)=>{
      this.currentHeader=data;
    })
  }

}
