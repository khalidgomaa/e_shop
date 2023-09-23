import { CartService } from './../../../carts/cart.service';
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header_cart_length:number=0;
  constructor(private renderer: Renderer2,
     private el: ElementRef,
     private CartService:CartService) {
 
     }
  ngOnInit() {
    this.header_cart_length =this.CartService.products_cart_length   
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement.querySelector('.navbar'), 'show');
    }, 700); // 500 milliseconds delay, adjust as needed
  }
}