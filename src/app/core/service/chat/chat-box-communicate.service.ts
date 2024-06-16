import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatBoxCommunicateService {
  private messageSource = new Subject<any>()
  update = this.messageSource.asObservable()

  constructor() { }
  
  setUpdate(id : string){
    this.messageSource.next(id)
  }
}
