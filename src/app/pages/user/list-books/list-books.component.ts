import { Component, Input } from '@angular/core';
import { ResponseBook } from '../../../core/interfaces/book.interface';
import { BookService } from '../../../core/service/book/book.service';
import { ChatBoxCommunicateService } from '../../../core/service/chat/chat-box-communicate.service';
import { SnackbarService } from '../../../core/service/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.scss'
})
export class ListBooksComponent {
  @Input() books !: ResponseBook[];

  constructor(
    private bookService : BookService,
    private comService : ChatBoxCommunicateService,
    private snBarService : SnackbarService
    ){}

  deleteBook(id : string){
    if(!confirm("Deleting the book")) return;
    this.bookService.deleteBook(id).subscribe({
      next : res =>{
        console.log(res)
        this.books = this.books.filter(each => each.id !== id);
        this.snBarService.openSnackBar("book deleted success fully")
      },
      error : err => {
        this.snBarService.openSnackBar(err.message.message || "failed to delete")
      }
    })
  }

  callUpdate(id : string){
    this.comService.setUpdate(id)
  }
}
