import { Directive } from '@angular/core';
import { AsyncValidator,ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import {Observable} from 'rxjs';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[appUniqueAdhaarValidator]',
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:UniqueAdhaarValidatorDirective,multi:true}]

})
export class UniqueAdhaarValidatorDirective  implements AsyncValidator {
  constructor(private userService : UserService) { }

  validate(control: import("@angular/forms").AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return new Promise((resolve,reject)=>{
      if(this.userService.isThisAdhaarAllowed(control.value)){      
        resolve(null);
      }
      else
      {
        resolve({'appUniqueAdhaarValidator':true})
      }
    })
  }

}
