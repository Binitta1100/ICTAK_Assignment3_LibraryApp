import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from './author.model';
import { AuthorService } from '../author.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:String = "Authors";
  authors: AuthorModel[];
  constructor(private authorService: AuthorService, private router:Router, private _auth: AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

  DeleteAuthor(id: String){
    this.authorService.deleteAuthor(id).subscribe(res =>{
      this.authorService.getAuthors().subscribe((data)=>{
        this.authors=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditAuthor(author:any){
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['editauthor']);
  }

  ReadAuthor(author:any){
    localStorage.setItem("readAuthorId", author._id.toString());
    this.router.navigate(['author']);
  }
}
