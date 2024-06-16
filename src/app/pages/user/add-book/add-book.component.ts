import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../../../core/interfaces/auth.interface';
import { decodeUserToken } from '../../../core/utils/jwt.helper';
import { BookService } from '../../../core/service/book/book.service';
import { CreateBook, ResponseBook } from '../../../core/interfaces/book.interface';
import { SnackbarService } from '../../../core/service/shared/snackbar/snackbar.service';
import { ChatBoxCommunicateService } from '../../../core/service/chat/chat-box-communicate.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  form !: FormGroup;
  userData !: UserData
  isUpdate  = false; 
  @Input() books !: ResponseBook[] ;



  constructor(
    private fb: FormBuilder,
    private bookService : BookService,
    private snbarService : SnackbarService,
    private comService : ChatBoxCommunicateService
    ) {}

  ngOnInit() {
    this.userData = decodeUserToken() as UserData

    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      publishedDate: ['', [Validators.required]]
    });

    this.waitUpdate()

  }

  waitUpdate(){
    this.comService.update.subscribe({
      next : res => {
          this.isUpdate = true
          this.setForm(res)
      }
    })
  }

  setForm(id  : string ){
    const book = this.books.find(each => each.id == id)
    this.form = this.fb.group({
      title: [book?.title, [Validators.required]],
      description: [book?.description],
      publishedDate: [book?.publishedDate, [Validators.required]]
    });
  }

  onSubmit() {
    const publishedDate = this.form.value.publishedDate
    const formData : CreateBook =  {...this.form.value}
    formData['publishedDate'] = publishedDate.toISOString()
    formData['authorId'] = this.userData.userId
    
    if(this.isUpdate){
      this.updateBook(formData)
    }
    this.addBook(formData)
  }

  updateBook(formData : any){
    this.bookService.updateBook(formData)
    .subscribe({
      next : res => {
        console.log(res)
        this.snbarService.openSnackBar('book updated successfully')
      },
      error : (err) =>{
        this.snbarService.openSnackBar(err.error.message)
       }
    })
  }

  addBook(formData : any){
    this.bookService.createBook(formData)
    .subscribe({
      next : res => {
        console.log(res)
        this.snbarService.openSnackBar('book created successfully')
      },
      error : (err) =>{
        this.snbarService.openSnackBar(err.error.message)
       }
    })
  }

  cancelUpdate(){
    this.form.reset()
    this.isUpdate = false;
  }


}
