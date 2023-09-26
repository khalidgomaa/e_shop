import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../products.interface';
import productsData from 'src/assets/products-list.json';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: any;
  productId: number = -1; // Initialize with a default value
  // preoducts:Iproduct[]=productsData

  constructor(
    private route: ActivatedRoute,

    private product_service:SharedService
  ) { }

  ngOnInit() {
    this.productId=this.route.snapshot['params']['id']
    this.product_service.getOneProduct_service(this.productId).subscribe(
      (res:any) => {
        console.log(res);
        this.product=res
        
      })
    // this.route.params.subscribe(params => {
    //   this.productId = +params['id'];
    
    //   this.product = this.products.find(p => p.id === this.productId);
      
    
    //   if (!this.product) {
        
    //     this.router.navigate(['/not-found']); 
    //   }
    // });
  }
}
