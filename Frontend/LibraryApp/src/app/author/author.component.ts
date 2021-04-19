import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:String = "Author";
  author = new AuthorModel( null, null, null, null);
  constructor(private authorService: AuthorService, private router:Router) { }

  ngOnInit(): void {
    let rauthorId = localStorage.getItem("readAuthorId");
    this.authorService.getAuthor(rauthorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }
}
