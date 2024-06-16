import { CanActivateFn, Router } from '@angular/router';
import { isAdminToken } from '../../utils/jwt.helper';
import { inject } from '@angular/core';
import { SnackbarService } from '../../service/shared/snackbar/snackbar.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const snackBar = inject(SnackbarService)
  if (!isAdminToken()) {
    router.navigateByUrl('/');
    snackBar.openSnackBar('please login...');
    return false;
  }
  return true;
};
