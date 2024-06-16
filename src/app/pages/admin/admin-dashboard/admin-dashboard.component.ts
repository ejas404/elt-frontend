import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth/auth.service';
import { AdminDashboardService } from '../../../core/service/admin/admin-dash.service';
import { TableHeaderModel, UserDetailsTableModel } from '../../../core/interfaces/table.interface';
import { ADMIN_TABLE_HEADERS } from '../../../core/constant/table';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent {

  userList : UserDetailsTableModel [] = [];
  tableHeader : TableHeaderModel [] = [];

  constructor(
    private authService: AuthService,
    private adminDash : AdminDashboardService
  ) { }

  ngOnInit() {
    this.fetchUserList()
    this.tableHeader = ADMIN_TABLE_HEADERS
  }

  fetchUserList() {
    this.adminDash.getUserList()
    .pipe(take(1))
    .subscribe({
      next : res => {
        this.userList = res
      },
      error : err =>{
        console.log(err)
      }
    })
  }

  logout() {
    this.authService.logout()
  }

}
