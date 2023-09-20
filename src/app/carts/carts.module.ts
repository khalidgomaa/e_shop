import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductsComponent } from './cart-products/cart-products.component';



@NgModule({
  declarations: [
    CartProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartProductsComponent
  ]
})
export class CartsModule { }
