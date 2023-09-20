import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  //~ Example method to fetch product data from an API
  getProducts_fromApi(){
    return this.http.get(this.apiUrl);
  }

  //~ Example method to add a product to the cart
  addToCart(product: any): void {
    // Implement your cart logic here
  }

  // method to retrieve the cart contents
  getCart(): any[] {
    // Implement your cart logic here
    return [];
  }
}
