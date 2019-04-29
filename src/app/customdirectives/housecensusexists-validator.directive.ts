import { Directive } from '@angular/core';
import { AsyncValidator,ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import {Observable} from 'rxjs';
import { HouseService } from '../services/house.service';




@Directive({
  selector: '[appHousecensusexistsValidator]',
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:HousecensusexistsValidatorDirective,multi:true}]
  
})
export class HousecensusexistsValidatorDirective implements AsyncValidator {

  constructor(private houseService : HouseService) { }

  validate(control: import("@angular/forms").AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    
    return new Promise((resolve,reject)=>{
      this.houseService.getHouseById(control.value).subscribe((data:any)=>{
        if(data.success){
          resolve(null);
        }
        else
        {
        resolve({'appHousecensusexistsValidator':true})

        }
      })
      
      // if(this.houseService.isThisHouseNumberAllowed(control.value)){  
      //   console.log('here')    
      //   resolve(null);
      // }
      // else
      // {
      //   console.log('there');
      //   resolve({'appHousecensusexistsValidator':true})
      // }
    })
  }

}
