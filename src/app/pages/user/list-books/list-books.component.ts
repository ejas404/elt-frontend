import { Component, Input } from '@angular/core';
import { ResponseBook } from '../../../core/interfaces/book.interface';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.scss'
})
export class ListBooksComponent {
  @Input() books !: ResponseBook[];
}
