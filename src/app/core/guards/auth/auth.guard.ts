import { CanActivateFn, Router } from '@angular/router';
import { isUserToken } from '../../utils/jwt.helper';
import { inject } from '@angular/core';
import { SnackbarService } from '../../service/shared/snackbar/snackbar.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const snackBar = inject(SnackbarService)
  if(!isUserToken()){
    router.navigateByUrl('/');
    snackBar.openSnackBar('please login...');
    return false;
  }
  return true;
};
