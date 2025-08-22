import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const guestGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.isLoggedIn()) {
    return true; 
  } else {
    return false;
  }
};
