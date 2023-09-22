import { CartService } from './../../../carts/cart.service';
import { Component, OnInit } from '@angular/core';
import productsData from 'src/assets/products-list.json'
import { Iproduct } from '../../products.interface';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  
  products:Iproduct[]=[]
arryCart:Iproduct[]=[];
constructor(private product_service:SharedService,
 private CartService:CartService){}

ngOnInit(){
  this.getProducts()
}
getProducts() {
  this.product_service.getProducts_fromApi().subscribe(
    (res:any) => {
      console.log(res);
      this.products=res.products
      
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  )
}

 addToCart(product: Iproduct){
this.CartService.addCartArray_service(product)
 }


}
