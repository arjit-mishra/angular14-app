import {Component, OnInit} from '@angular/core';
import {Book} from "../interfaces/Book";
import {BookService} from "./book.service";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  isShowing: boolean = true;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
