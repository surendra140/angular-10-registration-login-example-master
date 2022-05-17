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
  bookArray:any = [];
  cartItemFunc(){
      
      var cartCount = JSON.parse(localStorage.getItem("localCart") || '{}');
      console.log(cartCount);
      this.bookArray=cartCount;
    }
}
