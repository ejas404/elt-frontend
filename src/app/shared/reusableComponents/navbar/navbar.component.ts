import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../../core/interfaces/menus';
import { USER_MENU_LIST } from '../../../core/constant/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menu !: MenuItem[];
  @Input() role !: string;
  @Output() logoutEvent = new EventEmitter();

  constructor() {
   
  }

  ngOnInit(){
    this.menu = USER_MENU_LIST
  }

  logout() {
    this.logoutEvent.emit()
  }
}
