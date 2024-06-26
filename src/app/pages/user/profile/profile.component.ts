import {  Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth/auth.service';
import { UserDetailsTableModel } from '../../../core/interfaces/table.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'

})
export class ProfileComponent {
  destroy$ = new Subject<void>()
  userList : UserDetailsTableModel [] = [];
  constructor(
    private authService: AuthService,
  ) { }

  logout() {
    this.authService.logout()
  }

  ngOnDestroy(){
    this.destroy$.next()
  }
}
