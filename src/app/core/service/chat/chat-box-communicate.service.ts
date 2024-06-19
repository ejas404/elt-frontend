import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponseBook } from '../../interfaces/book.interface';


@Injectable({
  providedIn: 'root'
})
export class ChatBoxCommunicateService {
  private messageSource = new Subject<any>()
  private delete = new Subject<any>()
  private book = new Subject<{status : string, book : ResponseBook}>()

  update = this.messageSource.asObservable()
  isDelete = this.delete.asObservable()
  bookListUpdation = this.book.asObservable()

  constructor() { }
  
  setUpdate(id : string){
    this.messageSource.next(id)
  }

  changeBook(status : string , book : ResponseBook){
    this.book.next({status, book})
  }

  bookDeleted(id : string){
    this.delete.next(id)
  }
}
