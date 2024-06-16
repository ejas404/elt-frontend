import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../core/service/auth/auth.service';
import { SnackbarService } from '../../core/service/shared/snackbar/snackbar.service';
import { removeToken, setToken } from '../../core/utils/jwt.helper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private snbarService: SnackbarService,
    private router : Router
  ) { }

  loginForm !: FormGroup;

  ngOnInit() {
      this.setLoginForm()
  }

  setLoginForm() {
    this.loginForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

  onLogin() {
    this.authService.login(this.loginForm.value)
    .pipe(take(1))
    .subscribe({
      next: (res) => {
        res["role"]="User";
        setToken(res.token as string)
        this.snbarService.openSnackBar('login successfully...')
        if(res.role =="Admin"){
          this.router.navigateByUrl('/admin')
        }else{
          this.router.navigateByUrl('/profile')
        } 
      },
      error: (err) => {
        removeToken()
        this.snbarService.openSnackBar(err.error.message)
      }

    })
  }

}
