import { Component, OnInit } from '@angular/core';
import { AllproductsComponent } from 'src/app/products/components/allproducts/allproducts.component';
import { Iproduct } from 'src/app/products/products.interface';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})

export class CartProductsComponent implements OnInit{
  cart_products:Iproduct[]=[]
constructor(private products:AllproductsComponent){
  this.cart_products=products.arryCart
}
ngOnInit(): void {
}
}
