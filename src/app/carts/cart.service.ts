import { Injectable } from '@angular/core';
import { Iproduct } from '../products/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartArray:Iproduct[]=[]
  constructor() { }

  addCartArray_service(product:Iproduct){
    this.cartArray=[...this.cartArray,product]
    console.log( this.cartArray)
  }
}
