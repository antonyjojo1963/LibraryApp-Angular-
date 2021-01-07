import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookModel } from './book-list/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getbooks(){
    return this.http.get("http://localhost:3000/books");
  }

  newbook(item)
  {
    return this.http.post("http://localhost:3000/insert",{"book":item})
    .subscribe(data=>{console.log(data)})
  }

}
