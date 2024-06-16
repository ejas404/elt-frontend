import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../../../core/interfaces/auth.interface';
import { decodeUserToken } from '../../../core/utils/jwt.helper';
import { BookService } from '../../../core/service/book/book.service';
import { CreateBook } from '../../../core/interfaces/book.interface';
import { SnackbarService } from '../../../core/service/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  form !: FormGroup;
  userData !: UserData



  constructor(
    private fb: FormBuilder,
    private bookService : BookService,
    private snbarService : SnackbarService
    ) {}

  ngOnInit() {
    this.userData = decodeUserToken() as UserData

    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      publishedDate: ['', [Validators.required]]
    });

  }

  onSubmit() {
    const publishedDate = this.form.value.publishedDate
    const formData : CreateBook =  {...this.form.value}
    formData['publishedDate'] = publishedDate.toISOString()
    formData['authorId'] = this.userData.userId
    this.bookService.createBook(formData).subscribe({
      next : res => {
        console.log(res)
      },
      error : (err) =>{
        this.snbarService.openSnackBar(err.error.message)
       }
    })
  }
}
