import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../pages/user/profile/profile.component';
import { UserDashboardComponent } from '../../pages/user/user-dashboard/user-dashboard.component';
import { CustomModule } from '../custom/custom.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { UserProfileService } from '../../core/service/user/user-profile.service';


export const routes = [
  {path : '', component : UserDashboardComponent}
]


@NgModule({
  declarations: [
    ProfileComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatCardModule
  ],
  providers : [UserProfileService]
})
export class UserModule { }
