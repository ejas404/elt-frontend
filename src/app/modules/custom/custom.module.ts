import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/reusableComponents/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoutBtn } from '../../shared/buttons/logout.btn';
import { TableComponent } from '../../shared/reusableComponents/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ChatUserListComponent } from '../../shared/reusableComponents/chat-user-list/chat-user-list.component';
import { TimeStampConvertPipe } from '../../shared/pipes/timestamp-convert.pipe';




@NgModule({
    declarations: [
        NavbarComponent,
        LogoutBtn,
        TableComponent,
        ChatUserListComponent,
        TimeStampConvertPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        FormsModule
    ],
    exports: [
        NavbarComponent,
        LogoutBtn,
        TableComponent,
        ChatUserListComponent,
        TimeStampConvertPipe
    ]
})
export class CustomModule { }
