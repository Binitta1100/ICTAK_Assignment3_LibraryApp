import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from './book.model';
import { BookService } from '../book.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String = "Books";
  books: BookModel[];
  constructor(private bookService: BookService, private router:Router, private _auth: AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  DeleteBook(id: String){
    this.bookService.deleteBook(id).subscribe(res =>{
      this.bookService.getBooks().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditBook(book:any){
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['editbook']);
  }

  ReadBook(book:any){
    localStorage.setItem("readBookId", book._id.toString());
    this.router.navigate(['book']);
  }
}
