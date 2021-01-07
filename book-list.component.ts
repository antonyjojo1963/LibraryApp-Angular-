import { Component, OnInit } from '@angular/core';
import { bookModel } from './book.model'
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title:String = "Book List";

  books!: bookModel[];

  imageWidth: number = 50;
  imageMargin: number = 2;

  
  constructor(private bookService: BookService) { }


  ngOnInit(): void {
    this.bookService.getbooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

}
