import { Component, OnInit } from '@angular/core';
import productsData from 'src/assets/products-list.json'
import { Product } from '../../products.interface';
import { ProdServiceService } from '../../prod-service.service';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products:Product[]=[]
arryCart:Product[]=[];

constructor(private product_service:ProdServiceService){}

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
  );
}
addToArray(product_id: any){
  this.product_service.addToArray_service(product_id).subscribe(
    (res:any) => {
      console.log(res);
      this.arryCart=[...this.arryCart,res]
      console.log(this.arryCart);
      

    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
}

}
