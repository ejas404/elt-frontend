import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../../../core/interfaces/auth.interface';
import { decodeUserToken } from '../../../core/utils/jwt.helper';
import { BookService } from '../../../core/service/book/book.service';
import { CreateBook, ResponseBook } from '../../../core/interfaces/book.interface';
import { SnackbarService } from '../../../core/service/shared/snackbar/snackbar.service';
import { ChatBoxCommunicateService } from '../../../core/service/chat/chat-box-communicate.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})

export class AddBookComponent {

  destroy$ = new Subject<void>()
  form !: FormGroup;
  userData !: UserData
  isUpdate = false;
  @Input() books !: ResponseBook[];



  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private snbarService: SnackbarService,
    private comService: ChatBoxCommunicateService
  ) { }

  ngOnInit() {
    this.userData = decodeUserToken() as UserData

    this.form = this.fb.group({
      id: [undefined],
      title: ['', [Validators.required]],
      description: [''],
      publishedDate: ['', [Validators.required]],
      authorId: [this.userData.userId]
    });

    this.waitUpdate()

  }

  waitUpdate() {
    this.comService.update
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.isUpdate = true
          this.changeFormValue(res)
        }
      })
  }

  changeFormValue(id: string) {
    const book = this.books.find(each => each.id == id)
    if (!book) return;
    this.form.patchValue({
      id: book.id,
      title: book.title,
      description: book.description,
      publishedDate: book.publishedDate,
    });
  }

  onSubmit() {
    const publishedDate = this.form.value.publishedDate
    const formData: CreateBook = { ...this.form.value }
    if (typeof publishedDate !== "string") {
      formData['publishedDate'] = publishedDate.toISOString()
    }


    if (this.isUpdate) {
      console.log(formData)
      this.updateBook(formData)
      return;
    }
    this.addBook(formData)
  }

  updateBook(formData: any) {
    this.bookService.updateBook(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.comService.changeBook('update',res)
          this.snbarService.openSnackBar('book updated successfully')
        },
        error: (err) => {
          this.snbarService.openSnackBar(err.error.message)
        }
      })
  }

  addBook(formData: any) {
    this.bookService.createBook(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.comService.changeBook("add", res);
          this.snbarService.openSnackBar('book created successfully')
        },
        error: (err) => {
          this.snbarService.openSnackBar(err.error.message)
        }
      })
  }

  cancelUpdate() {
    this.form.reset()
    this.isUpdate = false;
  }


  ngOnDestroy() {
    this.destroy$.next()
  }

}
