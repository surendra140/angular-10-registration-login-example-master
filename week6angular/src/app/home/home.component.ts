import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html',
            styleUrls: ['./home.component.css']
})
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    BookArray = [
        {
          prodId: 1,
          img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg",
          title: "English Vocublery",
          desc: "English vocabulary in used",
        },
        {
          prodId: 2,
          img: "https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg",
          title: "Rich DAD",
          desc: "Rich Dad Poor Dad",
        },
        {
          prodId: 3,
          img: "https://covers.zlibcdn2.com/covers299/books/ae/d2/11/aed211bf01bb707e690cc9ad10d78840.jpg",
          title: "A Little Life",
          desc: "Hanya Vanagihara",
        },
        {
          prodId: 4,
          img: "https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg",
          title: "Red Queen",
          desc:"Victoria Aveyard",
        },
        {
          prodId: 5,
          img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg",
          title: "English Vocublery",
          desc: "English vocabulary in used",
        },
        {
          prodId: 6,
          img: "https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg",
          title: "Rich DAD",
          desc: "Rich Dad Poor Dad",
        },
        {
          prodId: 7,
          img: "https://covers.zlibcdn2.com/covers299/books/ae/d2/11/aed211bf01bb707e690cc9ad10d78840.jpg",
          title: "A Little Life",
          desc: "Hanya Vanagihara",
        },
        {
          prodId: 8,
          img: "https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg",
          title: "Red Queen",
          desc:"Victoria Aveyard",
        }
      ]

      itemsCart:any =[]; 

  //add to wishlist
  addWishlist(prod:any){
      
       // this.bookArray.push(prod);
       // console.log(this.bookArray);
        console.log(prod);
        let cartDataNull = localStorage.getItem('localCart');
        if(cartDataNull == null){
          let storeDataGet:any = [];
          storeDataGet.push(prod);
          localStorage.setItem('localCart', JSON.stringify(storeDataGet));
        }
        else{
          let index:number = -1;
          if(index == -1){
            this.itemsCart.push(prod);
            localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
          }
          else{
            localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
          }
        }   
  }

    completeCart:any = [];
  //add to completelist
   addComplete(prod:any){
    
     console.log(prod);
        let cartDataNull = localStorage.getItem('localList');
        if(cartDataNull == null){
          let storeDataGet:any = [];
          storeDataGet.push(prod);
          localStorage.setItem('localList', JSON.stringify(storeDataGet));
        }
        else{
          let index:number = -1;
          if(index == -1){
            this.completeCart.push(prod);
            localStorage.setItem('localList',JSON.stringify(this.completeCart));
          }
          else{
            localStorage.setItem('localList',JSON.stringify(this.completeCart));
          }
        }   
   }
}