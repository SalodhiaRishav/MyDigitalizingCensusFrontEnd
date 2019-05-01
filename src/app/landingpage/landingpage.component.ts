import { Component, OnInit } from '@angular/core';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private houseService:HouseService) { }

  ngOnInit() {
    this.houseService.GetAllHouse().subscribe((data:any)=>{
      if(data.success)
      {
        console.log(data);
      }
      else
      {

        console.log(data.message)
      }
    })
  }

}
