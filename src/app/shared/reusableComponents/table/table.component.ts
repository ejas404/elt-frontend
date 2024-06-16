import { Component, Input } from '@angular/core';
import { UserData } from '../../../core/interfaces/auth.interface';
import { TableHeaderModel, UserDetailsTableModel } from '../../../core/interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tHeaders : TableHeaderModel [] = [{title : "Name", tBodyKey : "fullName"},{title : "usreId", tBodyKey : "userId"}]
  @Input() tBody : Array <UserDetailsTableModel> = [{fullName : "some", userId : "some@"},{fullName : "who", userId : "who@"}]
  
  displayedColumns !: string[] ;
  
  ngOnInit(){
    this.displayedColumns =['slNo',...this.tHeaders.map(each => each.tBodyKey)]
  }
}
