import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name = 'Clean code';
  author = 'Robert D. Martin';
  src = 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

  isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
