import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:3000/book/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(item){
    return this.http.post("http://localhost:3000/addbook",{"book":item})
      .subscribe(data => {console.log(data)})
  }
  deleteBook(id:any){
    return this.http.delete("http://localhost:3000/deletebook/"+id);
  }
  editBook(book:any)
  {
    return this.http.put("http://localhost:3000/editbook", book)
    .subscribe(data =>{console.log(data)})
  }
}
