import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';
import { SnackbarService } from '../../core/service/shared/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../core/utils/confirm-validator-helper';
import { take } from 'rxjs';
import { SignUpAuth } from '../../core/interfaces/auth.interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(
    private authService : AuthService,
    private snbarService : SnackbarService,
    private router : Router
  ){}

  signUpForm !: FormGroup;

  ngOnInit(){
    this.setSignUpform()
  }


  setSignUpform() {
    this.signUpForm = new FormGroup({
      userId: new FormControl('', [Validators.required , Validators.pattern('^[a-z0-9@#]{3,10}$')]),
      fullName: new FormControl('', [Validators.required]),
      birthdate: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required,  Validators.pattern('^(?=.*[a-z])(?=.*\\d)[a-z\\d!@#$&*]{8,16}$')]),
      confirmPassword: new FormControl('', Validators.required),
      biography: new FormControl('',[Validators.maxLength(250)])
    },
      {
        validators: confirmPasswordValidator
      }
    )
  }

  onSignUp() { 
    const birthdate = this.signUpForm.value.birthdate
    const formData : SignUpAuth =  {...this.signUpForm.value}
    formData['birthdate'] = birthdate.toISOString()

    console.log(formData);
    return

    this.authService.signUp(formData)
    .pipe(take(1))
    .subscribe({
      next : (res)=>{
        if(res.success){
          this.snbarService.openSnackBar(res.msg)
          this.router.navigateByUrl('/')
        }
      },
      error : (err) =>{
       this.snbarService.openSnackBar(err.error.message)
      }
    
    })
  }
}
