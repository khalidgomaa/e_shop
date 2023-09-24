import { Injectable } from '@angular/core';
import { Iproduct } from '../products/products.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArray: Iproduct[] = [];
  private _products_cart_length = new BehaviorSubject<number>(0);
  products_cart_length$ = this._products_cart_length.asObservable();
  productInCart = false;
  alertMessage = '';

  constructor() { }

  addCartArray_service(product: Iproduct) {
    if (this.cartArray.find((cartProduct) => cartProduct.id === product.id)) {
      this.arlreadyFound(product);
      console.log("is already here");
    } else {
      this.productInCart = false;
      this.alertMessage = '';
      this.cartArray = [...this.cartArray, product];
      this._products_cart_length.next(this.cartArray.length); // Notify subscribers
      product['quantity'] = 1;
    }
  }

  arlreadyFound(product: Iproduct) {
    this.productInCart = true;
    this.alertMessage = 'Product is already in the cart!';
  }
}
