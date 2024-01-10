import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const loginGuard: CanActivateFn = () => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);
  if (userService.loggedIn) {
    return true;
  }

  router.navigate(['login']);
  return false;
};
