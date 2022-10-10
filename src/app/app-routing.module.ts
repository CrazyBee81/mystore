import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCartComponent } from './cart/product-cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details/:id', component: ProductDetailComponent },
  { path: 'cart', component: ProductCartComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
