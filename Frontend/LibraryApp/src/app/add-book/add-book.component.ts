import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BookService } from '../book.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title:String = "Add Book";

  constructor(private bookService: BookService, private router:Router, private _auth: AuthService) { }
  bookItem = new BookModel( null, null, null, null);
  ngOnInit(): void {
  }

  AddBook(){
    this.bookService.newBook(this.bookItem);
    alert("Success");
    this.router.navigate(['books']);
  }
}
