import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CreateBook, ResponseBook } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http : HttpClient,
    ) { }

  createBook(formData : CreateBook) : Observable<ResponseBook> {
    return this.http.post<ResponseBook>(`${environment.API_URL}/book/create`,formData)
  }

  updateBook(formData : ResponseBook) {
    return this.http.put<ResponseBook>(`${environment.API_URL}/book/update`,formData)
  }

  deleteBook(id : string){
    return this.http.delete<ResponseBook>(`${environment.API_URL}/book/${id}`)
  }

  getAuthorBooks(id : string){
    return this.http.get<ResponseBook[]>(`${environment.API_URL}/book/author/${id}`)
  }

  getAllBooks(){
    return this.http.get<ResponseBook[]>(`${environment.API_URL}/book`)
  }
}
