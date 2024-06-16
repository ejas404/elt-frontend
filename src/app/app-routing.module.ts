import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './core/guards/admin/admin.guard';
import { authGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate : [authGuard],
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    title : 'profile'
  },
  {
    path: "admin",
    component: AdminDashboardComponent,
    canActivate : [adminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    title : 'dashboard'
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
