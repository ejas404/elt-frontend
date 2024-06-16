import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetailsTableModel } from '../../interfaces/table.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxCommunicateService {
  // private messageSource = new BehaviorSubject<UserDetailsTableModel >({name : "", _id : '', email : ''})
  // currentUser = this.messageSource.asObservable()

  // constructor() { }
  // setChatUser(user : UserDetailsTableModel){
  //   this.messageSource.next(user)
  // }
}
