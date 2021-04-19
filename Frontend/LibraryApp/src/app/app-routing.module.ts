import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'books', canActivate:[AuthGuard], component : BooksComponent},
  {path : 'addbook', canActivate:[AuthGuard], component : AddBookComponent},
  {path : 'editbook', component : EditBookComponent},
  {path : 'authors', canActivate:[AuthGuard], component : AuthorsComponent},
  {path : 'addauthor', canActivate:[AuthGuard], component : AddAuthorComponent},
  {path : 'editauthor', component : EditAuthorComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'book', canActivate:[AuthGuard], component : BookComponent},
  {path : 'author', canActivate:[AuthGuard], component : AuthorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
