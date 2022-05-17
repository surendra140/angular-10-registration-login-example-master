import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  bookArray:any = [
    {
      prodId: 1,
      img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg",
      title: 400,
      desc: 2,
    },
    {
      prodId: 2,
      img: "https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg",
      title: 500,
      desc: 4,
    },
  ];
  
  cartItemFunc(){
      
      var cartCount = JSON.parse(localStorage.getItem("localCart") || '{}');
      console.log(cartCount);
      this.bookArray=cartCount;
    }
}
