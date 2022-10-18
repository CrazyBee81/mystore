import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCartComponent } from './cart/product-cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details/:id', component: ProductDetailComponent },
  { path: 'cart', component: ProductCartComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
