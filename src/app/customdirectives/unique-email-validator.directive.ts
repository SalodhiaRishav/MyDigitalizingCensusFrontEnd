import { Directive } from '@angular/core';
import { AsyncValidator,ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import {Observable} from 'rxjs';
import { UserService } from '../services/user.service';
import { reject } from 'q';

@Directive({
  selector: '[appUniqueEmail]',
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:UniqueEmailValidatorDirective,multi:true}]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {
  constructor(private userService : UserService) { }

  validate(control: import("@angular/forms").AbstractControl): Promise<ValidationErrors|null> | Observable<ValidationErrors | null> {
  return new Promise((resolve,reject)=>{
    if(this.userService.isThisEmailAllowed(control.value)){      
      resolve(null);
    }
    else
    {
      resolve({'appUniqueEmail':true})

    }
  })
   
  }
  


}
