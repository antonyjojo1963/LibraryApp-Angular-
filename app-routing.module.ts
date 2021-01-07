import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
  {path:'',component:BookListComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:NewBookComponent},
  {path:'signup',component:SignupComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
