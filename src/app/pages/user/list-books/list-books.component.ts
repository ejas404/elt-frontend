import { Component, Input } from '@angular/core';
import { ResponseBook } from '../../../core/interfaces/book.interface';
import { BookService } from '../../../core/service/book/book.service';
import { ChatBoxCommunicateService } from '../../../core/service/chat/chat-box-communicate.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.scss'
})
export class ListBooksComponent {
  @Input() books !: ResponseBook[];

  constructor(
    private bookService : BookService,
    private comService : ChatBoxCommunicateService
    ){}

  deleteBook(id : string){
    this.bookService.deleteBook(id).subscribe({
      next : res =>{
        console.log(res)
      }
    })
  }

  callUpdate(id : string){
    this.comService.setUpdate(id)
  }
}
