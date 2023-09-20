import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../products.interface';
import productsData from 'src/assets/products-list.json';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: any;
  productId: number = -1; // Initialize with a default value
  products: Product[] = productsData;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      // Retrieve the selected product based on productId
      this.product = this.products.find(p => p.id === this.productId);
      
      // Handle the case when the product is not found
      if (!this.product) {
        
        this.router.navigate(['/not-found']); 
      }
    });
  }
}
