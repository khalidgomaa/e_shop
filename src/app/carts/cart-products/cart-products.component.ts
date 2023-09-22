import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/products/products.interface';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})

export class CartProductsComponent implements OnInit{
  cart_products:Iproduct[]=[]
constructor(private CartSrvc:CartService){
  
}

ngOnInit(): void {
  this.cart_products=this.CartSrvc.cartArray
}

increaseQuantity(product: Iproduct) {
  // Find the product in the cart and increase its quantity
  const cartProduct = this.cart_products.find((p) => p.id === product.id);
  if (cartProduct) {
    cartProduct.quantity++;
  }
}
decreaseQuantity(product: Iproduct) {
  // Find the product in the cart and decrease its quantity, but not below 1
  const cartProduct = this.cart_products.find((p) => p.id === product.id);
  if (cartProduct && cartProduct.quantity > 1) {
    cartProduct.quantity--;
  }
}
getTotalPrice(): number {
  // Calculate the total price of all products in the cart
  return this.cart_products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);





}
