import {Component, OnInit} from '@angular/core';
import {Book} from "../interfaces/Book";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [{
    name: 'clean code',
    author: 'Robert D. Martin',
    src: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    amount: 800
  },
    {
      name: 'The Pragmatic programmer',
      author: 'David ThOmas',
      src: 'https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 500
    }];

  cart: Book[] = [];

  isShowing: boolean = true;


  constructor() {
    console.log('Books constructor');
  }

  ngOnInit(): void {
    console.log('Books onInit');
  }

  addToCart(bookEvent: Book) {
    this.cart.push(bookEvent);
  }
}
