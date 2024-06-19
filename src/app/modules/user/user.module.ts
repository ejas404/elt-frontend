import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../pages/user/profile/profile.component';
import { UserDashboardComponent } from '../../pages/user/user-dashboard/user-dashboard.component';
import { CustomModule } from '../custom/custom.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { UserProfileService } from '../../core/service/user/user-profile.service';
import { BooksComponent } from '../../pages/user/books/books.component';
import { AddBookComponent } from '../../pages/user/add-book/add-book.component';
import { ListBooksComponent } from '../../pages/user/list-books/list-books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



export const routes = [
  { path: '', component: UserDashboardComponent },
  { path: 'books', component: BooksComponent }
]


@NgModule({
  declarations: [
    ProfileComponent,
    UserDashboardComponent,
    BooksComponent,
    AddBookComponent,
    ListBooksComponent,
  ],
  imports: [
    CommonModule,
    CustomModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [UserProfileService]
})
export class UserModule { }
