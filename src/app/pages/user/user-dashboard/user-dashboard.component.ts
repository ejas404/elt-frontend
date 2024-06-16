import { ChangeDetectionStrategy, Component } from '@angular/core';
import { decodeUserToken } from '../../../core/utils/jwt.helper';
import { UserData } from '../../../core/interfaces/auth.interface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  userName !: string;
  constructor(){}

  ngOnInit(){
    const userData = decodeUserToken() as UserData
    this.userName = userData.fullName;
  }
}
