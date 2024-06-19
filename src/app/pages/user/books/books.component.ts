import { Component } from '@angular/core';
import { ResponseBook } from '../../../core/interfaces/book.interface';
import { BookService } from '../../../core/service/book/book.service';
import { decodeUserToken } from '../../../core/utils/jwt.helper';
import { UserData } from '../../../core/interfaces/auth.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  books !: ResponseBook[] ;

  constructor(
    private bookService : BookService
  ){}

    ngOnInit(){
      const userData = decodeUserToken() as UserData
      this.fetchBooks(userData.userId)
    }

    fetchBooks(id  : string){
      this.bookService.getAuthorBooks(id).subscribe({
        next : res => {
          this.books = res;
        }
      })
    }

}
