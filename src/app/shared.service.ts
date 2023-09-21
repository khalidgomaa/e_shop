import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) { }

  //~  method to fetch product data from an API
  getProducts_fromApi(){
    return this.http.get(this.apiUrl);
  }

  //~  method to add a product to the cart
  getOneProduct_service(id: any) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // method to retrieve the cart contents
  getCart(): any[] {
    // Implement your cart logic here
    return [];
  }
}
