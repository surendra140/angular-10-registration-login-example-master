import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletelistComponent } from '../completelist/completelist.component';

import { LayoutComponent } from './layout.component';

import { WishlistComponent } from '../wishlist/wishlist.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: WishlistComponent },
            {path : 'completelist', component:CompletelistComponent},
                    
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }