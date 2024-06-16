import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../pages/admin/admin-dashboard/admin-dashboard.component';
import { CustomModule } from '../custom/custom.module';
import { AdminDashboardService } from '../../core/service/admin/admin-dash.service';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomModule
  ],
  providers : [
    AdminDashboardService
  ]
})
export class AdminModule { }
