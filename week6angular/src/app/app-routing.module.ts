import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletelistComponent } from './completelist/completelist.component';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const booklistModule = () => import('./booklist/booklist.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: booklistModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {path : 'completelist', component:CompletelistComponent},
   


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }