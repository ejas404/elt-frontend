import { Component, Input } from '@angular/core';
import { ResponseBook } from '../../../core/interfaces/book.interface';
import { BookService } from '../../../core/service/book/book.service';
import { ChatBoxCommunicateService } from '../../../core/service/chat/chat-box-communicate.service';
import { SnackbarService } from '../../../core/service/shared/snackbar/snackbar.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.scss'
})
export class ListBooksComponent {

  destroy$ = new Subject<void>()

  @Input() books: ResponseBook[] = []

  constructor(
    private bookService: BookService,
    private comService: ChatBoxCommunicateService,
    private snBarService: SnackbarService
  ) { }


  ngOnInit(){
    this.waitUpdation()
  }

  deleteBook(id: string) {
    if (!confirm("Deleting the book")) return;
    this.bookService.deleteBook(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: res => {
        console.log(res)
        this.books = this.books.filter(each => each.id !== id);
        this.snBarService.openSnackBar("book deleted success fully")
      },
      error: err => {
        this.snBarService.openSnackBar(err.message.message || "failed to delete")
      }
    })
  }

  waitUpdation(){
    this.comService.bookListUpdation
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        if(res.status == "add"){
          this.books = [...this.books, res.book]
        }else{
          const book = this.books.find(each => each.id == res.book.id);
          if(!book) return;
          Object.assign(book,res.book);
        }
      }
    })
  }

  callUpdate(id: string) {
    this.comService.setUpdate(id)
  }

  ngOnDestroy(){
    this.destroy$.next()
  }

}
