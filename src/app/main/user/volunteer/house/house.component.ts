import { Component, OnInit ,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HouseService } from 'src/app/services/house.service';
import {House} from '../../../../models/House.model'

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  @ViewChild('houseRegisterForm') HouseRegisterForm:NgForm;
  constructor(private houseService : HouseService) { }

  defaultValue:string ="Rented";
  ngOnInit() {
  }

  onSubmit()
  {
    this.houseService.addHouse(this.HouseRegisterForm.value).subscribe((data:any)=>{
     if(data.success)
     {
       let message:string;
       message=data.message+'\n your house census id is : '+ data.data.id;
       

      alert(message);
      this.HouseRegisterForm.reset();
     }
    })
  }
}
