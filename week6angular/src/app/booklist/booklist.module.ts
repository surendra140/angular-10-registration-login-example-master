import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './booklist-routing.module';
import { LayoutComponent } from './layout.component';

import { WishlistComponent } from '../wishlist/wishlist.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        WishlistComponent,
        
    ]
})
export class UsersModule { }