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

  public StateArray = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");

  DefaultValuesState:string="Delhi";
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
     else
     {
       alert(data.message);
     }
     
    })
  }
}
