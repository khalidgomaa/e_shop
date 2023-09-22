import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ProductsModule } from '../products/products.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    CartProductsComponent
  ]
})
export class CartsModule { }
