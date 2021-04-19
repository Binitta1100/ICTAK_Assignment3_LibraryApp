import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  title:String = "Edit Book";
  constructor(private bookService: BookService, private router:Router) { }
  bookItem = new BookModel( null, null, null, null);

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }

  EditBook(){    
    this.bookService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }
}
