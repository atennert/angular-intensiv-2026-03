import { CanMatchFn, Router } from '@angular/router';
import { UserStateService } from './user-state.service';
import { inject } from '@angular/core';

export const isUserAuthenticatedGuard: CanMatchFn = () => {
  const userState = inject(UserStateService);
  const router = inject(Router);
  return userState.isLoggedIn() ? true : router.createUrlTree(['/']);
};
