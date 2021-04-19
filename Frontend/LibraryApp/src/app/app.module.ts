import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    AddBookComponent,
    EditBookComponent,
    EditAuthorComponent,
    AddAuthorComponent,
    SignupComponent,
    LoginComponent,
    BookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
