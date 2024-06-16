import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { AuthService } from '../../core/service/auth/auth.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        ReactiveFormsModule,
        RouterModule,
        MatDatepickerModule,
        MatFormFieldModule,
         MatInputModule, 
         MatIconModule
    ],
    exports : [
        LoginComponent,
        SignupComponent
    ],
    providers : [
        AuthService,
        provideNativeDateAdapter()
    ]
})
export class AuthenticationModule { }
