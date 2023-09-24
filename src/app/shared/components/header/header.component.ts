import { CartService } from './../../../carts/cart.service';
import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header_cart_length: number = 0;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.products_cart_length$.subscribe((length) => {
      this.header_cart_length = length;
    });

    setTimeout(() => {
      this.renderer.addClass(
        this.el.nativeElement.querySelector('.navbar'),
        'show'
      );
    }, 700);
  }
}
