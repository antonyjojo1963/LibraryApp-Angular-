import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookModel } from '../book-list/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  title:String = "Add Books"
  constructor(private bookService: BookService,private router: Router) { }
  bookitem = new bookModel(null,null,null,null,null,null);
  
  ngOnInit(): void {
  }
  addbook()
  {
    this.bookService.newbook(this.bookitem);
    console.log("called");
    alert("Successfully Added");
    this.router.navigate(['/'])
  }
}
