import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  title:String = "Add Author";
  constructor(private authorService: AuthorService, private router:Router, private _auth: AuthService) { }
  authorItem = new AuthorModel( null, null, null, null);
  ngOnInit(): void {
  }

  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    alert("Success");
    this.router.navigate(['authors']);
  }
}
