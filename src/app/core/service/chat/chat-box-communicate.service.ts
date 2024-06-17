import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatBoxCommunicateService {
  private messageSource = new Subject<any>()
  private delete = new Subject<any>()

  update = this.messageSource.asObservable()
  isDelete = this.delete.asObservable()

  constructor() { }
  
  setUpdate(id : string){
    this.messageSource.next(id)
  }

  bookDeleted(id : string){
    this.delete.next(id)
  }
}
