import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completelist',
  templateUrl: './completelist.component.html',
  styleUrls: ['./completelist.component.css']
})
export class CompletelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookArray:any = [
    {
      prodId: 1,
      img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg",
      amt: 400,
      qnt: 2,
    },
    {
      prodId: 2,
      img: "https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg",
      amt: 500,
      qnt: 4,
    },
  ];
  
  cartItemFunc(){
      
    var cartCount = JSON.parse(localStorage.getItem("localList") || '{}');
    console.log(cartCount);
    this.bookArray=cartCount;
  }


}
