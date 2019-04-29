import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class ApproverAuthGuardService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  Observable<boolean> | Promise<boolean> {
  if (this.userService.isUserLoggedInAsApprover) {
    return true;
  }
  else {
    this.router.navigate(['/login']);
  }
}
}