import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  title:String = "Edit Author";
  constructor(private authorService: AuthorService, private router:Router) { }
  authorItem = new AuthorModel( null, null, null, null);

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }

  EditAuthor(){    
    this.authorService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }
}
