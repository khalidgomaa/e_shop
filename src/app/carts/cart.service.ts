import { Injectable } from '@angular/core';
import { Iproduct } from '../products/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartArray:Iproduct[]=[]
products_cart_length!: number;
  productInCart = false;
alertMessage=''
  constructor() { }

  addCartArray_service(product:Iproduct){
    if (this.cartArray.find((cartProduct) => cartProduct.id === product.id)) {
      this.arlreadyFound(product)
      console.log("is already here");
      alert("Product is already in the cart!")
    } else {
      this.productInCart = false;
      this.alertMessage = ''
    this.cartArray=[...this.cartArray,product]
 this.products_cart_length=  this.cartArray.length
 console.log(this.cartArray.length)
    product['quantity'] = 1;
  }}
  arlreadyFound(product:Iproduct){
    this.productInCart = true;
    this.alertMessage = 'Product is already in the cart!';
  }
}
